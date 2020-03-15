import Vue from "vue";
import Utils from "~/scripts/utils";
import { splitGoods } from "~/scripts/trade";
import ages from "~/lib/foe-data/ages";
import YesNo from "~/components/yes-no/YesNo";

const i18nPrefix = "components.simple_trade.";
const MAX_TRADE = 1000;
const MIN_DEFAULT_RATIO = 0.5;
const MAX_DEFAULT_RATIO = 2;

let agesGoods = {};

export default {
  name: "SimpleTrade",
  props: {
    tradeArray: {
      type: Object,
      required: true
    }
  },
  data() {
    agesGoods = this.$store.state.foe.goods.agesGoods;

    let data = {
      i18nPrefix,
      agesGoods,
      value: 0,
      values: {},
      currentAge: null,
      results: {},
      split: false,
      splitValueId: "splitValue" + this._uid,
      splitValue: MAX_TRADE,
      maxSplitValue: MAX_TRADE,
      showRatio: false,
      errors: {
        splitValue: false
      }
    };

    for (let age in agesGoods) {
      data.values[age] = 0;
      data.results[age] = { show: false, value: 0, ratio: 0, split: "" };
    }

    return data;
  },
  watch: {
    split() {
      this.$data.splitValue = MAX_TRADE;
      this.compute();
    },
    splitValue(val) {
      if (Utils.inRange(val, 0, MAX_TRADE)) {
        this.$data.errors.splitValue = false;
        this.compute();
      } else {
        this.$data.errors.splitValue = true;
      }
    }
  },
  methods: {
    /**
     * Set value of each inputs at 0 except for input corresponding to the age in parameter
     * @param currentAge Age where we not set value to 0
     */
    resetForm(currentAge) {
      for (let age in agesGoods) {
        if (currentAge !== age) {
          Vue.set(this.$data.values, age, 0);
        }
        this.$data.results[age] = { show: false, value: 0, ratio: 0, split: "" };
      }
    },

    /**
     * Reset form only if all values is equal 0
     * @param currentAge Reference of current age, it is not very important here
     */
    resetFormIfAllZero(currentAge) {
      for (let age in agesGoods) {
        if (this.$data.values[age] > 0) {
          return;
        }
      }
      this.resetForm(currentAge);
    },

    haveError(key) {
      if (!(key in ages)) {
        return this.$data.errors[key] ? "is-danger" : "";
      }

      if (this.$data.values[key] > MAX_TRADE) {
        return "is-warning";
      }
    },

    compute() {
      const currentAge = this.$data.currentAge;
      for (let age in this.$props.tradeArray[currentAge]) {
        if (!Utils.inRange(this.$props.tradeArray[currentAge][age], MIN_DEFAULT_RATIO, MAX_DEFAULT_RATIO)) {
          continue;
        }

        let value = Math.round(this.$props.tradeArray[currentAge][age] * this.$data.values[currentAge]);
        let result = value;

        if (this.$data.split) {
          result = splitGoods(
            Utils.normalizeNumberValue(this.$data.values[currentAge]),
            Utils.normalizeNumberValue(this.$data.splitValue, 1000),
            this.$props.tradeArray[currentAge][age],
            this.$props.tradeArray[age][currentAge]
          );
          if (result[1].from === 0) {
            result = this.$t("components.trade.split_message.common", {
              count: this.$formatNumber(result[0].count),
              valueFrom: this.$formatNumber(result[0].from),
              ageFrom: this.$t("foe_data.age_short." + currentAge),
              valueTo: this.$formatNumber(result[0].to),
              ageTo: this.$t("foe_data.age_short." + age)
            });
          } else {
            result = this.$t("components.trade.split_message.multi", {
              count: this.$formatNumber(result[0].count),
              valueFrom: this.$formatNumber(result[0].from),
              ageFrom: this.$t("foe_data.age_short." + currentAge),
              valueTo: this.$formatNumber(result[0].to),
              ageTo: this.$t("foe_data.age_short." + age),
              valueFromSingle: this.$formatNumber(result[1].from),
              valueToSingle: this.$formatNumber(result[1].to)
            });
          }
        }

        Vue.set(this.$data.results[age], "show", true);
        this.$data.results[age].value = this.$formatNumber(value);
        this.$data.results[age].split = result;
        this.$data.results[age].ratio = Utils.roundTo(this.$props.tradeArray[currentAge][age], 2);
      }
    },

    getBestRates(currentAge) {
      this.resetForm(currentAge);
      this.$data.currentAge = currentAge;
      this.compute();
    }
  },
  components: {
    YesNo
  }
};
