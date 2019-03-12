import questData from "~/lib/foe-data/rq-quests";
import cfCalculatorProcess from "~/lib/foe-compute-process/cf-calculator";
import Utils from "~/scripts/utils";
import YesNo from "~/components/yes-no/YesNo";

const i18nPrefix = "components.cf_calculator.";
const urlPrefix = "cfc_";

const queryKey = {
  yourAge: urlPrefix + "ya",
  yourCfBoost: urlPrefix + "ycfb",
  coins: urlPrefix + "c",
  supplies: urlPrefix + "s",
  goods: urlPrefix + "g",
  fpBy24h: urlPrefix + "fp",
  otherRq: urlPrefix + "orq",
  suppliesGathered: urlPrefix + "sp",
  secondRq: urlPrefix + "srq",
  cumulativeQuest: urlPrefix + "cq"
};

const inputComparator = {
  yourCfBoost: { comparator: [">=", 0] },
  coins: { comparator: [">=", 0] },
  supplies: { comparator: [">=", 0] },
  goods: { comparator: [">=", 0] },
  fpBy24h: { comparator: [">=", 0] },
  otherRq: { comparator: [">=", 0] },
  suppliesGathered: { comparator: [">=", 0] },
  cumulativeQuest: { comparator: [">=", 1] }
};

export default {
  name: "CfCalculator",
  head /* istanbul ignore next */: function() {
    this.$store.commit("SET_HERO", {
      title: "routes.cf_calculator.hero.title",
      subtitle: "routes.cf_calculator.hero.subtitle"
    });

    return { title: this.$t("routes.cf_calculator.title") };
  },
  props: {
    canPermalink: {
      type: Boolean,
      default: false
    }
  },
  data() {
    this.$store.commit("SET_CURRENT_LOCATION", "cf_calculator");

    let data = {
      yourCfBoost: 0,
      coins: 0,
      supplies: 0,
      goods: 0,
      fpBy24h: 0,
      otherRq: 0,
      suppliesGathered: 0,
      cumulativeQuest: 0
    };

    for (let key in data) {
      if (this.$cookies.get(key) !== undefined) {
        let result = Utils.checkFormNumeric(this.$cookies.get(key), -1, inputComparator[key].comparator);
        if (result.state === Utils.FormCheck.VALID) {
          data[key] = result.value;
        }
      }
    }

    data.yourAge =
      this.$cookies.get("yourAge") === undefined || !(this.$cookies.get("yourAge") in questData.ages)
        ? questData.ages.BronzeAge.key
        : this.$cookies.get("yourAge");
    data.secondRq = this.$cookies.get("secondRq") === undefined ? false : this.$cookies.get("secondRq") === true;

    Object.assign(data, this.checkQuery());

    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.yourAge,
      value: data.yourAge
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.yourCfBoost,
      value: data.yourCfBoost
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.coins,
      value: data.coins
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.supplies,
      value: data.supplies
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.goods,
      value: data.goods
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.fpBy24h,
      value: data.fpBy24h
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.otherRq,
      value: data.otherRq
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.suppliesGathered,
      value: data.suppliesGathered
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.secondRq,
      value: data.secondRq ? 1 : 0
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.cumulativeQuest,
      value: data.cumulativeQuest
    });

    return {
      ...data,
      i18nPrefix,
      questData: questData,
      oneQuest: [
        questData.ages.BronzeAge.key,
        questData.ages.IronAge.key,
        questData.ages.EarlyMiddleAges.key,
        questData.ages.HighMiddleAges.key
      ],
      checkSecondQuest: false,
      infinityGenerator: false,
      result: {
        bp: 0,
        medals: 0,
        goods: 0,
        fp: 0,
        dailyUbq: 0,
        bonusUbq: 0,
        secondRqCompleted: 0,
        totalGoods: 0,
        totalFp: 0,
        totalRqCompleted: 0,
        coinSupplyReturn: []
      },
      errors: {
        yourAge: false,
        yourCfBoost: false,
        coins: false,
        supplies: false,
        goods: false,
        fpBy24h: false,
        otherRq: false,
        suppliesGathered: false,
        cumulativeQuest: false
      }
    };
  },
  computed: {
    isPermalink() {
      return this.$store.state.isPermalink;
    },
    permaLink() {
      return {
        path: this.$i18nPath("cf-calculator/"),
        query: this.$store.state.urlQuery
      };
    }
  },
  watch: {
    yourAge(val) {
      if (this.yourAge in questData.ages) {
        this.errors.yourAge = false;
        if (!this.isPermalink) {
          this.$cookies.set("yourAge", val, {
            path: this.$nuxt.$route.path,
            expires: Utils.getDefaultCookieExpireTime()
          });
        }
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.yourAge,
          value: val
        });
        if (this.oneQuest.indexOf(this.yourAge) > -1) {
          this.secondRq = false;
          this.$store.commit("UPDATE_URL_QUERY", {
            key: queryKey.secondRq,
            value: 0
          });
          if (!this.isPermalink) {
            this.$cookies.set("secondRq", false, {
              path: this.$nuxt.$route.path,
              expires: Utils.getDefaultCookieExpireTime()
            });
          }
        }
        this.checkSecondQuest = this.oneQuest.indexOf(val) === -1;
        this.calculate();
      } else {
        this.errors.yourAge = true;
      }
    },
    secondRq(val) {
      const value = !!val;
      if (!this.isPermalink) {
        this.$cookies.set("secondRq", value, {
          path: this.$nuxt.$route.path,
          expires: Utils.getDefaultCookieExpireTime()
        });
      }
      this.$data.suppliesGathered = value ? Utils.normalizeNumberValue(this.$data.suppliesGathered) : 0;
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.secondRq,
        value: value ? 1 : 0
      });
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.suppliesGathered,
        value: value ? Utils.normalizeNumberValue(this.$data.suppliesGathered) : 0
      });
      this.calculate();
    },
    yourCfBoost(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "yourCfBoost",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.yourCfBoost.comparator,
          !this.isPermalink,
          "yourCfBoost"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.yourCfBoost,
          value: val
        });
        this.$data.infinityGenerator = false;
        this.$data.cumulativeQuest = 0;
        this.calculate();
      }
    },
    coins(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "coins",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.coins.comparator,
          !this.isPermalink,
          "coins"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.coins,
          value: val
        });
        this.calculate();
      }
    },
    supplies(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "supplies",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.supplies.comparator,
          !this.isPermalink,
          "supplies"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.supplies,
          value: val
        });
        this.calculate();
      }
    },
    goods(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "goods",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.goods.comparator,
          !this.isPermalink,
          "goods"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.goods,
          value: val
        });
        this.calculate();
      }
    },
    fpBy24h(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "fpBy24h",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.fpBy24h.comparator,
          !this.isPermalink,
          "fpBy24h"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.fpBy24h,
          value: val
        });
        this.calculate();
      }
    },
    otherRq(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "otherRq",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.otherRq.comparator,
          !this.isPermalink,
          "otherRq"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.otherRq,
          value: val
        });
        this.calculate();
      }
    },
    suppliesGathered(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "suppliesGathered",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.suppliesGathered.comparator,
          !this.isPermalink,
          "suppliesGathered"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.suppliesGathered,
          value: val
        });
        this.calculate();
      }
    },
    cumulativeQuest(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "cumulativeQuest",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.cumulativeQuest.comparator,
          !this.isPermalink,
          "cumulativeQuest"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.cumulativeQuest,
          value: val
        });
        this.calculate();
      }
    }
  },
  mounted() {
    this.checkSecondQuest = this.oneQuest.indexOf(this.$data.yourAge) === -1;
    this.calculate();
  },
  methods: {
    /**
     * Calculate all the rewards and number of quests that can be accomplished.
     * Based on: https://docs.google.com/spreadsheets/d/13-mBxR4eumRXWPi6Ayq2D9OGZ9C55eMEb6xyHnLl_-g/edit#gid=2009380732
     */
    calculate() {
      this.$data.result = cfCalculatorProcess.compute(
        this.$data.questData.ages[this.$data.yourAge],
        Utils.normalizeNumberValue(this.$data.yourCfBoost),
        Utils.normalizeNumberValue(this.$data.coins),
        Utils.normalizeNumberValue(this.$data.supplies),
        Utils.normalizeNumberValue(this.$data.goods),
        Utils.normalizeNumberValue(this.$data.fpBy24h),
        !!this.$data.secondRq,
        Utils.normalizeNumberValue(this.$data.suppliesGathered),
        Utils.normalizeNumberValue(this.$data.otherRq),
        Utils.normalizeNumberValue(this.$data.cumulativeQuest)
      );
      this.$data.infinityGenerator = this.$data.result.infinityGenerator;
      if (this.$data.infinityGenerator && this.$data.cumulativeQuest === 0) {
        this.$data.cumulativeQuest = this.$data.result.defaultCumulativeQuest;
      }
    },
    checkQuery() {
      let result = {};
      let change = Utils.FormCheck.NO_CHANGE;
      let tmp;

      for (let key in inputComparator) {
        tmp = Utils.checkFormNumeric(this.$route.query[queryKey[key]], -1, inputComparator[key].comparator);
        if (tmp.state === Utils.FormCheck.VALID) {
          change = Utils.FormCheck.VALID;
          result[key] = tmp.value;
        }
      }

      if (this.$route.query[queryKey.yourAge] && this.$route.query[queryKey.yourAge] in questData.ages) {
        change = Utils.FormCheck.VALID;
        result["yourAge"] = this.$route.query[queryKey.yourAge];
      }

      if (
        this.$route.query[queryKey.secondRq] &&
        !isNaN(this.$route.query[queryKey.secondRq]) &&
        parseInt(this.$route.query[queryKey.secondRq]) >= 0
      ) {
        change = Utils.FormCheck.VALID;
        result["secondRq"] = parseInt(this.$route.query[queryKey.secondRq]) === 1;
      }

      if (change === Utils.FormCheck.VALID) {
        this.$store.commit("IS_PERMALINK", true);
      }

      return result;
    },
    haveError(input) {
      return this.$data.errors[input] ? "is-danger" : "";
    }
  },
  components: {
    YesNo
  }
};
