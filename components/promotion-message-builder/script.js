import Utils from "~/scripts/utils";
import yesNo from "~/components/yes-no/YesNo";
import numberinput from "~/components/number-input/NumberInput";
import * as PMBuilder from "~/scripts/promotion-message-builder";
import Observatory from "~/lib/foe-data/gbs-data/Observatory";

const i18nPrefix = "components.promotion_message_builder.";
const defaultTemplateNameRegex = /Default\s\d+/;

export default {
  name: "PromotionMessageBuilder",
  props: {
    gbKey: {
      type: String,
      default: Observatory.key
    },
    messageInterpolation: {
      type: Array,
      default: () => {
        return [{ key: "FLVL", value: 9 }, { key: "TLVL", value: 10 }];
      }
    },
    placesInterpolationValues: {
      type: Array,
      default: () => {
        const placesInterpolationValues = [];
        for (let i = 0; i < Observatory.levels[9].reward.length; i++) {
          if (Observatory.levels[9].reward[i] <= 0) {
            continue;
          }
          placesInterpolationValues.push([
            { key: "PI", value: i + 1 },
            { key: "PV", value: Math.round(Observatory.levels[9].reward[i] * 1.9) }
          ]);
        }
        return placesInterpolationValues;
      }
    }
  },
  data() {
    const defaultTemplates = PMBuilder.defaultPromotionMessages;
    const customTemplates = this.$cookies.get("customPromotionMessagesTemplates")
      ? this.$cookies.get("customPromotionMessagesTemplates")
      : [];
    const data = {
      i18nPrefix,
      tooltips: {
        config: false
      },
      action: "create",
      templateName: "",
      startFromTemplate: "",
      defaultTemplates,
      customTemplates,
      oldTemplateName: "",
      result: {
        prefix: "",
        suffix: "",
        useShortGbName: false,
        reversePlacesOrder: false,
        placeSeparator: "",
        place: "",
        message: ""
      },
      errors: {
        templateName: { found: false, message: "" }
      }
    };

    return data;
  },
  computed: {
    lang() {
      return this.$store.state.locale;
    },
    resultString() {
      return JSON.stringify(this.result);
    },
    placePreview() {
      return !this.result.place || !this.result.place.length
        ? ""
        : PMBuilder.buildPlace.call(this, this.result.place, this.$props.placesInterpolationValues[0]);
    },
    selectLabel() {
      return this.action === "create"
        ? this.$t(i18nPrefix + "start_from_template")
        : this.action === "update"
        ? this.$t(i18nPrefix + "edit_template")
        : this.$t(i18nPrefix + "delete_template");
    },
    resultMessage() {
      return !this.result.message || !this.result.message.length
        ? ""
        : PMBuilder.buildMessage.call(
            this,
            this.$props.gbKey,
            this.result,
            this.$props.messageInterpolation,
            this.$props.placesInterpolationValues
          );
    }
  },
  watch: {
    lang() {
      if (this.$data.result !== null) {
        this.updatePromotionMessage();
      }
    },
    templateName(val) {
      if (!val || !val.length) {
        this.errors.templateName.found = true;
        this.errors.templateName.message = this.$t("utils.errors.field_cannot_be_empty");
      } else if (defaultTemplateNameRegex.test(val)) {
        this.errors.templateName.found = true;
        this.errors.templateName.message = this.$t(i18nPrefix + "errors.template_cannot_have_this_name");
      } else {
        this.errors.templateName.found = false;
        this.errors.templateName.message = "";
      }
    },
    startFromTemplate(templateName) {
      const tmp = defaultTemplateNameRegex.test(templateName)
        ? this.defaultTemplates.find(elt => elt.name === templateName).config
        : this.customTemplates.find(elt => elt.name === templateName).config;
      this.result = JSON.parse(JSON.stringify(tmp));
      this.oldTemplateName = templateName;
      if (this.action === "edit") {
        this.templateName = templateName;
      }
    }
  },
  methods: {
    successCopy(index) {
      this.tooltips[index] = true;
      let self = this;
      /* istanbul ignore next */
      setTimeout(function() {
        self.tooltips[index] = false;
      }, 3000);
    },
    getTemplateSample(templateName) {
      let template = defaultTemplateNameRegex.test(templateName)
        ? this.defaultTemplates.find(elt => elt.name === templateName)
        : this.customTemplates.find(elt => elt.name === templateName);
      return PMBuilder.buildMessage.call(
        this,
        this.$props.gbKey,
        template.config,
        this.$props.messageInterpolation,
        this.$props.placesInterpolationValues
      );
    },
    save() {
      if (!this.templateName || !this.templateName.length) {
        this.errors.templateName.found = true;
        this.errors.templateName.message = this.$t("utils.errors.field_cannot_be_empty");
        return;
      } else if (defaultTemplateNameRegex.test(this.templateName)) {
        this.errors.templateName.found = true;
        this.errors.templateName.message = this.$t(i18nPrefix + "errors.template_cannot_have_this_name");
        return;
      } else {
        this.errors.templateName.found = false;
        this.errors.templateName.message = "";
      }
      let result = this.$cookies.get("customPromotionMessagesTemplates");
      if (!result) {
        result = [];
      }
      if (this.action === "edit") {
        let index = this.customTemplates.map(elt => elt.name).indexOf(this.oldTemplateName);
        if (index >= 0) {
          // Otherwise, the user try to edit an template that do not exists
          result[index] = { name: this.templateName, config: this.result };
        }
      } else {
        result.push({ name: this.templateName, config: this.result });
      }
      this.$cookies.set(`customPromotionMessagesTemplates`, result, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
      this.customTemplates = result;
      this.$store.commit("UPDATE_CUSTOM_PROMOTION_MESSAGE_TEMPLATES", JSON.parse(JSON.stringify(this.customTemplates)));
    },
    deleteTemplate() {
      if (!this.startFromTemplate || !this.startFromTemplate.length) {
        return;
      }
      const index = this.customTemplates.map(elt => elt.name).indexOf(this.startFromTemplate);
      this.customTemplates.splice(index, 1);

      this.$store.commit("UPDATE_CUSTOM_PROMOTION_MESSAGE_TEMPLATES", JSON.parse(JSON.stringify(this.customTemplates)));
      this.$cookies.set(`customPromotionMessagesTemplates`, this.customTemplates, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
    },
    cookieValid(key) {
      return this.$cookies.get(key) !== undefined && !isNaN(this.$cookies.get(key));
    },
    haveError(input) {
      return this.$data.errors[input] ? "is-danger" : "";
    }
  },
  components: {
    yesNo,
    numberinput
  }
};
