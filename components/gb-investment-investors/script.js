import Vue from "vue";
import Utils from "~/scripts/utils";
import gbProcess from "~/lib/foe-compute-process/gb-investment";
import gbListSelect from "~/components/gb-list-select/GbListSelect";

const i18nPrefix = "components.gb_investment_investors.";
const urlPrefix = "gbi_";

const QUERY_KEY = {
  targetLevel: urlPrefix + "tl",
  yourArcBonus: urlPrefix + "yab",
  takingPlaceInConsideration: urlPrefix + "tpic",
  showP1: urlPrefix + "sp1",
  showP2: urlPrefix + "sp2",
  showP3: urlPrefix + "sp3",
  showP4: urlPrefix + "sp4",
  showP5: urlPrefix + "sp5"
};

const MAX_TAKING_PLACE_IN_CONSIDERATION = 2;

const INPUT_COMPARATOR = {
  yourArcBonus: { comparator: [">=", 0], type: "float" },
  takingPlaceInConsideration: { comparator: [0, MAX_TAKING_PLACE_IN_CONSIDERATION], type: "int" }
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
    const data = {
      i18nPrefix,
      targetLevel: this.cookieValid("targetLevel") ? parseInt(this.$cookies.get("targetLevel")) : 1,
      yourArcBonus: this.$cookies.get("yourArcBonus") === undefined ? 0 : this.$cookies.get("yourArcBonus"),
      result: null,
      maxLevel: this.$props.gb.levels.length,
      maxConsideration: MAX_TAKING_PLACE_IN_CONSIDERATION + 1,
      takingPlaceInConsideration: this.cookieValid("takingPlaceInConsideration")
        ? parseInt(this.$cookies.get("takingPlaceInConsideration"))
        : 0,
      showP1: this.cookieValid("showP1") ? !!this.$cookies.get("showP1") : true,
      showP2: this.cookieValid("showP2") ? !!this.$cookies.get("showP2") : false,
      showP3: this.cookieValid("showP3") ? !!this.$cookies.get("showP3") : false,
      showP4: this.cookieValid("showP4") ? !!this.$cookies.get("showP4") : false,
      showP5: this.cookieValid("showP5") ? !!this.$cookies.get("showP5") : false,
      errors: {
        targetLevel: false,
        yourArcBonus: false,
        takingPlaceInConsideration: false
      }
    };

    Object.assign(data, this.checkQuery(data.maxLevel));

    this.$store.commit("ADD_URL_QUERY", {
      key: QUERY_KEY.targetLevel,
      value: data.targetLevel,
      ns: "gbii"
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: QUERY_KEY.yourArcBonus,
      value: data.yourArcBonus,
      ns: "gbii"
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: QUERY_KEY.takingPlaceInConsideration,
      value: data.takingPlaceInConsideration,
      ns: "gbii"
    });

    for (let i = 1; i <= 5; i++) {
      this.$store.commit("ADD_URL_QUERY", {
        key: QUERY_KEY["showP" + i],
        value: data["showP" + i] ? 1 : 0,
        ns: "gbii"
      });
    }

    return data;
  },
  computed: {
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
    targetLevel(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "targetLevel",
          val.length === 0 ? 0 : val,
          oldVal,
          [1, this.$data.maxLevel],
          !this.isPermalink
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: QUERY_KEY.targetLevel,
          value: val,
          ns: "gbii"
        });
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
          !this.isPermalink
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
          "/",
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
    showP1(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: QUERY_KEY.showP1,
        value: val ? 1 : 0,
        ns: "gbii"
      });
      this.$cookies.set("showP1", val, {
        path: "",
        expires: Utils.getDefaultCookieExpireTime()
      });
    },
    showP2(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: QUERY_KEY.showP2,
        value: val ? 1 : 0,
        ns: "gbii"
      });
      this.$cookies.set("showP2", val, {
        path: "",
        expires: Utils.getDefaultCookieExpireTime()
      });
    },
    showP3(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: QUERY_KEY.showP3,
        value: val ? 1 : 0,
        ns: "gbii"
      });
      this.$cookies.set("showP3", val, {
        path: "",
        expires: Utils.getDefaultCookieExpireTime()
      });
    },
    showP4(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: QUERY_KEY.showP4,
        value: val ? 1 : 0,
        ns: "gbii"
      });
      this.$cookies.set("showP4", val, {
        path: "",
        expires: Utils.getDefaultCookieExpireTime()
      });
    },
    showP5(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: QUERY_KEY.showP5,
        value: val ? 1 : 0,
        ns: "gbii"
      });
      this.$cookies.set("showP5", val, {
        path: "",
        expires: Utils.getDefaultCookieExpireTime()
      });
    }
  },
  methods: {
    goTo(val) {
      this.$router.push(`/gb-investment/${val}/`);
    },
    haveError(key) {
      return this.$data.errors[key] ? "is-danger" : "";
    },

    cookieValid(key) {
      return this.$cookies.get(key) !== undefined && !isNaN(this.$cookies.get(key));
    },

    /**
     * Check URL query and return query data
     * @param maxLevel {number} Max level of the GB
     * @return {Object} Return an object with 'isPermalink' set to False if URI no contains query, otherwise it return
     * an object with corresponding values
     */
    checkQuery(maxLevel) {
      let result = {};
      let change = Utils.FormCheck.NO_CHANGE;
      let tmp;

      // Check level
      if (
        this.$route.query[QUERY_KEY.targetLevel] &&
        !isNaN(this.$route.query[QUERY_KEY.targetLevel]) &&
        Utils.inRange(parseInt(this.$route.query[QUERY_KEY.targetLevel]), 1, maxLevel)
      ) {
        change = Utils.FormCheck.VALID;
        result.targetLevel = parseInt(this.$route.query[QUERY_KEY.targetLevel]);
      }

      for (let key in INPUT_COMPARATOR) {
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

      for (let i = 1; i <= 5; i++) {
        tmp = Utils.checkFormNumeric(this.$route.query[QUERY_KEY["showP" + i]], -1, [0, 1]);
        if (tmp.state === Utils.FormCheck.VALID) {
          change = Utils.FormCheck.VALID;
          result["showP" + i] = !!tmp.value;
        }
      }

      if (change === Utils.FormCheck.VALID) {
        this.$store.commit("IS_PERMALINK", true);
        result.change = true;
      }

      return result;
    },

    compute() {
      const result = [];

      for (let i = 0; i < this.$props.gb.levels.length; i++) {
        const investorPercentage = Array.apply(null, Array(5)).map(() =>
          Utils.normalizeNumberValue(this.$data.yourArcBonus)
        );
        const defaultParticipation = Array.apply(null, Array(5)).map(() => 0);
        const currentLevel = Object.assign(
          JSON.parse(JSON.stringify(this.$props.gb.levels[i])),
          gbProcess.ComputeLevelInvestment(i + 1, investorPercentage, this.$props.gb.levels, defaultParticipation)
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

          if (this.$data.takingPlaceInConsideration === 2) {
            currentLevel.investment[j].roi = 0;
          }
        }

        result.push(currentLevel);
      }

      Vue.set(this.$data, "result", result);
    }
  },
  mounted() {
    this.compute();
  },
  components: {
    gbListSelect
  }
};
