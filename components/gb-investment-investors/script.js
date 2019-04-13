import Vue from "vue";
import Utils from "~/scripts/utils";
import gbProcess from "~/lib/foe-compute-process/gb-investment";
import gbListSelect from "~/components/gb-list-select/GbListSelect";
import YesNo from "~/components/yes-no/YesNo";

const i18nPrefix = "components.gb_investment_investors.";
const urlPrefix = "gbi_";
const defaultArcPercentage = 80;

const QUERY_KEY = {
  from: urlPrefix + "f",
  to: urlPrefix + "t",
  yourArcBonus: urlPrefix + "yab",
  takingPlaceInConsideration: urlPrefix + "tpic",
  showPlace: urlPrefix + "sp",
  customPercentage: urlPrefix + "cp",
  investorPercentageGlobal: urlPrefix + "ipg",
  investorPercentageCustom: urlPrefix + "pc"
};

const MAX_TAKING_PLACE_IN_CONSIDERATION = 2;

let oldInvestorPercentageCustom;
let oldFromInput = 0;

const INPUT_COMPARATOR = {
  from: { comparator: [">=", 1], type: "int" },
  to: { comparator: [">=", 1], type: "int" },
  yourArcBonus: { comparator: [">=", 0], type: "float" },
  takingPlaceInConsideration: { comparator: [0, MAX_TAKING_PLACE_IN_CONSIDERATION], type: "int" },
  investorPercentageGlobal: { comparator: [">=", 0], type: "float" },
  investorPercentageCustom: { comparator: [">=", 0], type: "float" }
};

export default {
  name: "GbInvestmentInvestors",
  props: {
    gb: {
      type: Object,
      required: true
    },
    canPermalink: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const maxLevel = this.$props.gb.levels.length;
    const data = {
      i18nPrefix,
      yourArcBonus: this.$cookies.get("yourArcBonus") === undefined ? 0 : this.$cookies.get("yourArcBonus"),
      investorPercentageGlobal: defaultArcPercentage,
      investorPercentageCustom: Array.from(new Array(5), () => defaultArcPercentage),
      customPercentage: false,
      result: null,
      maxLevel,
      from: this.cookieValid(`${this.$route.params.gb}_from`) ? this.$cookies.get(`${this.$route.params.gb}_from`) : 1,
      to: this.cookieValid(`${this.$route.params.gb}_to`) ? this.$cookies.get(`${this.$route.params.gb}_to`) : maxLevel,
      maxConsideration: MAX_TAKING_PLACE_IN_CONSIDERATION + 1,
      takingPlaceInConsideration: this.cookieValid(`${this.$route.params.gb}_takingPlaceInConsideration`)
        ? parseInt(this.$cookies.get(`${this.$route.params.gb}_takingPlaceInConsideration`))
        : 0,
      showPlace: Array.from(new Array(5), (val, index) => index === 0),
      errors: {
        from: false,
        to: false,
        yourArcBonus: false,
        percentageValueGlobal: false,
        takingPlaceInConsideration: false
      }
    };

    if (this.$cookies.get(`${this.$route.params.gb}_showPlace`) instanceof Array) {
      data.showPlace = Utils.normalizeBooleanArray(this.$cookies.get(`${this.$route.params.gb}_showPlace`));
    }

    Object.assign(data, this.checkQuery(data.maxLevel, data.from, data.to, data.customPercentage));
    this.$store.commit("ADD_URL_QUERY", {
      key: QUERY_KEY.from,
      value: data.from,
      ns: "gbii"
    });
    this.$store.commit("ADD_URL_QUERY", { key: QUERY_KEY.to, value: data.to, ns: "gbii" });
    this.$store.commit("ADD_URL_QUERY", {
      key: QUERY_KEY.yourArcBonus,
      value: data.yourArcBonus,
      ns: "gbii"
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: QUERY_KEY.investorPercentageGlobal,
      value: data.investorPercentageGlobal,
      ns: "gbii"
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: QUERY_KEY.cp,
      value: data.customPercentage ? 1 : 0,
      ns: "gbii"
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: QUERY_KEY.takingPlaceInConsideration,
      value: data.takingPlaceInConsideration,
      ns: "gbii"
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: QUERY_KEY.showPlace,
      value: JSON.stringify(data.showPlace),
      ns: "gbii"
    });

    oldInvestorPercentageCustom = JSON.parse(JSON.stringify(data.investorPercentageCustom));

    return data;
  },
  computed: {
    fromInput: {
      get() {
        return this.normalizedFrom() - 1;
      },
      set(val) {
        this.checkFrom(val + 1);
        oldFromInput = val + 1;
      }
    },
    isPermalink() {
      return this.$store.state.isPermalink;
    },
    permaLink() {
      return {
        path: this.$i18nPath("gb-investment/" + this.gb.key + "/"),
        query: this.$store.getters.getUrlQuery("gbii")
      };
    }
  },
  watch: {
    from(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        this.$data.errors.from = true;
        return;
      }

      if (
        Utils.handlerForm(
          this,
          "from",
          !val || val.length === 0 ? 1 : val,
          oldVal,
          [1, this.normalizedTo()],
          !this.isPermalink,
          `${this.$route.params.gb}_from`
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: QUERY_KEY.from,
          value: val,
          ns: "gbii"
        });
        this.updateGlobalProfitLoss();
      }
    },
    to(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        this.$data.errors.to = true;
        return;
      }

      if (
        Utils.handlerForm(
          this,
          "to",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          [this.normalizedFrom(), this.$data.maxLevel],
          !this.isPermalink,
          `${this.$route.params.gb}_to`
        ) === Utils.FormCheck.VALID
      ) {
        if (this.$data.errors.from) {
          if (this.checkFrom(oldFromInput)) {
            this.$data.errors.from = false;
          }
        }
        this.$store.commit("UPDATE_URL_QUERY", {
          key: QUERY_KEY.to,
          value: val,
          ns: "gbii"
        });
        this.updateGlobalProfitLoss();
      }
    },
    takingPlaceInConsideration(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "takingPlaceInConsideration",
          val.length === 0 ? 0 : val,
          oldVal,
          INPUT_COMPARATOR.takingPlaceInConsideration.comparator,
          !this.isPermalink,
          this.$route.params.gb + "_takingPlaceInConsideration"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: QUERY_KEY.takingPlaceInConsideration,
          value: val,
          ns: "gbii"
        });
        this.compute();
      }
    },
    yourArcBonus(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        return;
      }

      if (
        Utils.handlerForm(
          this,
          "yourArcBonus",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          INPUT_COMPARATOR.yourArcBonus.comparator,
          !this.isPermalink,
          "yourArcBonus",
          INPUT_COMPARATOR.yourArcBonus.type
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: QUERY_KEY.yourArcBonus,
          value: val,
          ns: "gbii"
        });
        this.compute();
      }
    },
    investorPercentageGlobal(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        return;
      }

      if (
        Utils.handlerForm(
          this,
          "investorPercentageGlobal",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          [">=", 0],
          false,
          this.$route.params.gb + "_investorPercentageGlobal",
          "float"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: QUERY_KEY.investorPercentageGlobal,
          value: val,
          ns: "gbii"
        });

        for (let index = 0; index < this.$data.investorPercentageCustom.length; index++) {
          this.$store.commit("UPDATE_URL_QUERY", {
            key: QUERY_KEY.investorPercentageCustom + (index + 1),
            value: val,
            ns: "gbii"
          });
          this.$data.investorPercentageCustom[index] = val;
        }

        this.compute();
      }
    },
    investorPercentageCustom(val) {
      let result = Utils.FormCheck.VALID;
      for (let index = 0; index < val.length; index++) {
        if (typeof val[index] !== "number") {
          return;
        }
        if (
          Utils.handlerForm(
            this,
            "investorPercentageCustom_" + index,
            val[index].length === 0 ? 0 : val[index],
            oldInvestorPercentageCustom[index],
            [">=", 0],
            false,
            this.$route.params.gb + "_investorPercentageCustom_" + index,
            "float"
          ) === Utils.FormCheck.INVALID
        ) {
          result = Utils.FormCheck.INVALID;
        }
      }
      if (result === Utils.FormCheck.VALID) {
        oldInvestorPercentageCustom = JSON.parse(JSON.stringify(val));
        for (let index = 0; index < val.length; index++) {
          this.$store.commit("UPDATE_URL_QUERY", {
            key: QUERY_KEY.investorPercentageCustom + (index + 1),
            value: val[index],
            ns: "gbii"
          });
        }
        this.compute();
      }
    },
    customPercentage(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: QUERY_KEY.customPercentage,
        value: val ? 1 : 0,
        ns: "gbii"
      });
      for (let i = 0; i < 5; i++) {
        this.$data.investorPercentageCustom[i] = Utils.normalizeNumberValue(this.$data.investorPercentageGlobal);
        this.$store.commit("UPDATE_URL_QUERY", {
          key: QUERY_KEY.investorPercentageCustom + (i + 1),
          value: this.$data.investorPercentageCustom[i],
          ns: "gbii"
        });
      }
    },
    showPlace(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: QUERY_KEY.showPlace,
        value: JSON.stringify(val),
        ns: "gbii"
      });
      this.$cookies.set(`${this.$route.params.gb}_showPlace`, Utils.normalizeBooleanArray(val), {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
    }
  },
  methods: {
    normalizedFrom() {
      return Utils.normalizeNumberValue(this.$data.from, 1);
    },
    normalizedTo() {
      return Utils.normalizeNumberValue(this.$data.to, 1);
    },
    goTo(val) {
      this.$router.push(`/gb-investment/${val}/`);
    },
    haveError(key) {
      return this.$data.errors[key] ? "is-danger" : "";
    },

    cookieValid(key) {
      return this.$cookies.get(key) !== undefined && !isNaN(this.$cookies.get(key));
    },

    checkFrom(val) {
      if (val.length === 0) {
        Vue.set(this.$data.errors, "from", true);
        return false;
      }
      if (
        Utils.handlerForm(this, "from", val, this.normalizedFrom(), [1, this.normalizedTo()]) === Utils.FormCheck.VALID
      ) {
        Vue.set(this.$data.errors, "from", false);
        Vue.set(this.$data, "from", val);
        return true;
      }
      return false;
    },

    /**
     * Check URL query and return query data
     * @param maxLevel {number} Max level of the GB
     * @param defaultFrom {number} From level
     * @param defaultTo {number} To level
     * @param defaultCustomPercentage {number} Default value for custom arc bonus of investors
     * @return {Object} Return an object with 'isPermalink' set to False if URI no contains query, otherwise it return
     * an object with corresponding values
     */
    checkQuery(maxLevel, defaultFrom, defaultTo, defaultCustomPercentage) {
      let noCheck = ["from", "to", "investorPercentageCustom"];
      let result = {};
      let change = Utils.FormCheck.NO_CHANGE;
      let investorPercentageCustom = Array.apply(null, Array(5)).map(() => defaultArcPercentage);
      let tmp;
      let from = defaultFrom;
      let to = defaultTo;
      let fromToChange = 0;
      let customPercentage = defaultCustomPercentage;

      for (let key in INPUT_COMPARATOR) {
        if (noCheck.indexOf(key) >= 0) {
          continue;
        }
        tmp = Utils.checkFormNumeric(
          this.$route.query[QUERY_KEY[key]],
          -1,
          INPUT_COMPARATOR[key].comparator,
          INPUT_COMPARATOR[key].type
        );
        if (tmp.state === Utils.FormCheck.VALID) {
          change = Utils.FormCheck.VALID;
          result[key] = tmp.value;
        }
      }

      if (
        this.$route.query[QUERY_KEY.from] &&
        !isNaN(this.$route.query[QUERY_KEY.from]) &&
        parseInt(this.$route.query[QUERY_KEY.from]) >= 1
      ) {
        fromToChange++;
        from = parseInt(this.$route.query[QUERY_KEY.from]);
      }

      if (
        this.$route.query[QUERY_KEY.to] &&
        !isNaN(this.$route.query[QUERY_KEY.to]) &&
        parseInt(this.$route.query[QUERY_KEY.to]) >= 1
      ) {
        fromToChange++;
        to = parseInt(this.$route.query[QUERY_KEY.to]);
      }

      if (fromToChange > 0 && from <= to) {
        change = Utils.FormCheck.VALID;
        result.from = from;
        result.to = to;
      }

      if (
        this.$route.query[QUERY_KEY.customPercentage] &&
        !isNaN(this.$route.query[QUERY_KEY.customPercentage]) &&
        parseInt(this.$route.query[QUERY_KEY.customPercentage]) >= 0
      ) {
        change = Utils.FormCheck.VALID;
        result.customPercentage = parseInt(this.$route.query[QUERY_KEY.customPercentage]) === 1;
        customPercentage = result.customPercentage;
      }

      if (customPercentage) {
        for (let i = 0; i < 5; i++) {
          tmp = Utils.checkFormNumeric(
            this.$route.query[QUERY_KEY.investorPercentageCustom + (i + 1)],
            -1,
            INPUT_COMPARATOR.investorPercentageCustom.comparator,
            INPUT_COMPARATOR.investorPercentageCustom.type
          );
          if (tmp.state === Utils.FormCheck.VALID) {
            change = Utils.FormCheck.VALID;
            investorPercentageCustom[i] = tmp.value;
          }
        }
      }

      if (change === Utils.FormCheck.VALID) {
        this.$store.commit("IS_PERMALINK", true);
        result.investorPercentageCustom = investorPercentageCustom;
      }

      if (this.$route.query[QUERY_KEY.showPlace]) {
        let tmpShowPlace = JSON.parse(this.$route.query[QUERY_KEY.showPlace]);
        if (tmpShowPlace instanceof Array) {
          result.showPlace = Utils.normalizeBooleanArray(tmpShowPlace);
        }
      }

      if (change === Utils.FormCheck.VALID) {
        this.$store.commit("IS_PERMALINK", true);
        result.change = true;
      }

      return result;
    },

    updateGlobalProfitLoss() {
      this.$data.result.globalProfitLoss = [];
      const tmpMap = this.$data.result.slice(this.$data.from - 1, this.$data.to);
      for (let i = 0; i < 5; i++) {
        this.$data.result.globalProfitLoss.push(tmpMap.map(k => k.investment[i].roi).reduce((i, j) => i + j, 0));
      }
    },

    compute() {
      const result = [];
      for (let i = 0; i < this.$props.gb.levels.length; i++) {
        const investorPercentage =
          this.$data.takingPlaceInConsideration === 2
            ? Utils.normalizeNumberArray(this.$data.investorPercentageCustom)
            : Array.apply(null, Array(5)).map(() => this.$data.yourArcBonus);
        const currentLevel = Object.assign(
          JSON.parse(JSON.stringify(this.$props.gb.levels[i])),
          gbProcess.ComputeLevelInvestment(i + 1, investorPercentage, this.$props.gb.levels)
        );

        let currentDeposits = 0;
        for (let j = 0; j < currentLevel.investment.length; j++) {
          if (j > 0) {
            switch (this.$data.takingPlaceInConsideration) {
              case 0:
                break;
              case 1:
                currentDeposits += currentLevel.investment[j - 1].fp;
                break;
              case 2:
                currentDeposits +=
                  currentLevel.investment[j - 1].preparation + currentLevel.investment[j - 1].participation;
                break;
            }
          }

          if (this.$data.takingPlaceInConsideration === 2) {
            currentLevel.investment[j].realParticipation = Math.round(
              currentLevel.investment[j].reward * (1 + this.$data.yourArcBonus / 100)
            );
            currentLevel.investment[j].roi =
              Math.round(currentLevel.investment[j].reward * (1 + this.$data.yourArcBonus / 100)) -
              currentLevel.investment[j].expectedParticipation;
          } else {
            currentLevel.investment[j] = Object.assign(
              currentLevel.investment[j],
              gbProcess.ComputeSecurePlace(
                currentLevel.cost,
                currentDeposits,
                0,
                0,
                Utils.normalizeNumberValue(this.$data.yourArcBonus),
                currentLevel.reward[j]
              )
            );
          }
        }

        result.push(currentLevel);
      }

      Vue.set(this.$data, "result", result);
      this.updateGlobalProfitLoss();
    }
  },
  mounted() {
    this.compute();
  },
  components: {
    gbListSelect,
    YesNo
  }
};
