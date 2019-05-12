import { gbs, gbList } from "~/lib/foe-data/gbs";

const i18nPrefix = "components.gb_investment.gb_list_select.";

export default {
  name: "GbListSelect",
  props: {
    current: {
      type: String,
      required: true
    }
  },
  data() {
    const gbData = Object.keys(gbs)
      .map(k => {
        return { value: k, text: this.$t("foe_data.gb." + k) };
      })
      .sort((a, b) => (a.text > b.text ? 1 : b.text > a.text ? -1 : 0));

    return {
      i18nPrefix: i18nPrefix,
      foeGBList: gbList,
      gbData,
      selected: this.$props.current,
      name: this.$t("foe_data.gb." + this.$props.current),
      tmpName: "",
      id: "gbList" + this._uid
    };
  },
  computed: {
    filteredDataObj() {
      return this.gbData.filter(option => {
        return (
          option.text
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    }
  },
  watch: {
    selected(val) {
      if (val in gbs) {
        this.$emit("change", val);
      }
    }
  },
  methods: {
    onFocus: /* istanbul ignore next */ function(evt) {
      evt.target.select();
    }
  }
};
