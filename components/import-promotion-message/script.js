import Utils from "~/scripts/utils";
import yesNo from "~/components/yes-no/YesNo";
import numberinput from "~/components/number-input/NumberInput";
import * as PMBuilder from "~/scripts/promotion-message-builder";
import Observatory from "~/lib/foe-data/gbs-data/Observatory";

const i18nPrefix = "components.import_promotion_message.";
const defaultTemplateNameRegex = /Default\s\d+/;

export default {
  name: "ImportPromotionMessage",
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
    const data = {
      i18nPrefix,
      templateName: "",
      template: "",
      resultMessage: "",
      errors: {
        templateName: { found: false, message: "" },
        template: { found: false, message: "" }
      }
    };

    return data;
  },
  computed: {
    lang() {
      return this.$store.state.locale;
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
    template(val) {
      if (!val || !val.length) {
        return "";
      }
      let template;
      try {
        template = {
          prefix: "",
          suffix: "",
          useShortGbName: false,
          reversePlacesOrder: false,
          placeSeparator: "",
          ...JSON.parse(val)
        };
      } catch (e) {
        this.errors.template.found = true;
        this.errors.template.message = this.$t(i18nPrefix + "errors.invalid_data");
        return;
      }

      const keys = Object.keys(template);
      if (!keys.includes("message") || !keys.includes("place")) {
        this.errors.template.found = true;
        this.errors.template.message = this.$t(i18nPrefix + "errors.invalid_data");
        return;
      }

      this.errors.template.found = false;
      this.errors.template.message = "";

      this.resultMessage = PMBuilder.buildMessage.call(
        this,
        this.$props.gbKey,
        template,
        this.$props.messageInterpolation,
        this.$props.placesInterpolationValues
      );
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
    save() {
      let error = false;
      if (!this.template || !this.template.length) {
        this.errors.template.found = true;
        this.errors.template.found = this.$t("utils.errors.field_cannot_be_empty");
        error = true;
      }
      let template;
      try {
        template = {
          prefix: "",
          suffix: "",
          useShortGbName: false,
          reversePlacesOrder: false,
          placeSeparator: "",
          ...JSON.parse(this.template)
        };
      } catch (e) {
        this.errors.template.found = true;
        this.errors.template.message = this.$t(i18nPrefix + "errors.invalid_data");
        error = true;
      }

      const keys = Object.keys(template);
      if (!keys.includes("message") || !keys.includes("place")) {
        this.errors.template.found = true;
        this.errors.template.message = this.$t(i18nPrefix + "errors.invalid_data");
        error = true;
      }

      this.errors.template.found = false;
      this.errors.template.found = "";

      if (!this.templateName || !this.templateName.length) {
        this.errors.templateName.found = true;
        this.errors.templateName.message = this.$t("utils.errors.field_cannot_be_empty");
        error = true;
      } else if (defaultTemplateNameRegex.test(this.templateName)) {
        this.errors.templateName.found = true;
        this.errors.templateName.message = this.$t(i18nPrefix + "errors.template_cannot_have_this_name");
        error = true;
      } else {
        this.errors.templateName.found = false;
        this.errors.templateName.message = "";
      }

      if (error) {
        return;
      }

      let result = this.$cookies.get("customPromotionMessagesTemplates");
      if (!result) {
        result = [];
      }
      result.push({ name: this.templateName, config: template });
      this.$cookies.set(`customPromotionMessagesTemplates`, result, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
      this.$store.commit("UPDATE_CUSTOM_PROMOTION_MESSAGE_TEMPLATES", JSON.parse(JSON.stringify(result)));
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
    haveError(input) {
      return this.$data.errors[input] ? "is-danger" : "";
    }
  },
  components: {
    yesNo,
    numberinput
  }
};
