import Utils from "~/scripts/utils";
import gbProcess from "~/scripts/foe-gb-investment";
import gbListSelect from "~/components/gb-list-select/GbListSelect";
import yesNo from "~/components/yes-no/YesNo";

const i18nPrefix = "components.gb_investment.";

let oldInvestorPercentageCustom;
const defaultArcPercentage = 90;

const urlPrefix = "gbi_";

const queryKey = {
  level: urlPrefix + "l",
  ownerInvestment: urlPrefix + "oi",
  investorPercentageGlobal: urlPrefix + "ipg",
  investorPercentageCustom: urlPrefix + "p",
  investorParticipation: urlPrefix + "ip",
  placeFree: urlPrefix + "pFree",
  prefix: urlPrefix + "px",
  suffix: urlPrefix + "sx",
  shortName: urlPrefix + "sn",
  showLevel: urlPrefix + "sl"
};

export default {
  name: "GbInvestment",
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
      level: this.cookieValid("level") ? parseInt(this.$cookies.get("level")) : 10,
      maxLevel: this.$props.gb.levels.length,
      ownerInvestment: this.cookieValid("ownerInvestment") ? parseInt(this.$cookies.get("ownerInvestment")) : 0,
      investorPercentageGlobal: this.cookieValid("investorPercentageGlobal")
        ? parseFloat(this.$cookies.get("investorPercentageGlobal"))
        : defaultArcPercentage,
      investorPercentageCustom: [
        defaultArcPercentage,
        defaultArcPercentage,
        defaultArcPercentage,
        defaultArcPercentage,
        defaultArcPercentage
      ],
      investorParticipation: [0, 0, 0, 0, 0],
      placeFree: [{ state: true }, { state: true }, { state: true }, { state: true }, { state: true }],
      prefix: this.$cookies.get("gbPrefix") ? this.$cookies.get("gbPrefix") : "",
      suffix: this.$cookies.get("gbSuffix") ? this.$cookies.get("gbSuffix") : "",
      shortName: this.cookieValid("shortName") ? !!this.$cookies.get("shortName") : false,
      showLevel: this.cookieValid("showLevel") ? !!this.$cookies.get("showLevel") : false,
      result: null,
      errors: {
        level: false,
        ownerInvestment: false,
        percentageValueGlobal: false,
        investorPercentageCustom_0: false,
        investorPercentageCustom_1: false,
        investorPercentageCustom_2: false,
        investorPercentageCustom_3: false,
        investorPercentageCustom_4: false,
        investorParticipation_0: false,
        investorParticipation_1: false,
        investorParticipation_2: false,
        investorParticipation_3: false,
        investorParticipation_4: false
      },
      promotion: [],
      childChange: false,
      query: this.GET_URL_QUERY
    };

    for (let i = 0; i < 5; i++) {
      if (this.cookieValid("investorPercentageCustom_" + i)) {
        data.investorPercentageCustom[i] = parseFloat(this.$cookies.get("investorPercentageCustom_" + i));
      }
    }

    for (let i = 0; i < 5; i++) {
      if (this.cookieValid("investorParticipation_" + i)) {
        data.investorParticipation[i] = parseFloat(this.$cookies.get("investorParticipation_" + i));
      }
    }

    Object.assign(data, this.checkQuery(data.level, data.maxLevel));

    oldInvestorPercentageCustom = JSON.parse(JSON.stringify(data.investorPercentageCustom));

    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.level,
      value: data.level,
      ns: "gbi"
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.ownerInvestment,
      value: data.ownerInvestment,
      ns: "gbi"
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.investorPercentageGlobal,
      value: data.investorPercentageGlobal,
      ns: "gbi"
    });

    for (let index = 0; index < data.investorPercentageCustom.length; index++) {
      this.$store.commit("ADD_URL_QUERY", {
        key: queryKey.investorPercentageCustom + (index + 1),
        value: data.investorPercentageCustom[index],
        ns: "gbi"
      });
    }

    for (let index = 0; index < data.investorParticipation.length; index++) {
      this.$store.commit("ADD_URL_QUERY", {
        key: queryKey.investorParticipation + (index + 1),
        value: data.investorParticipation[index],
        ns: "gbi"
      });
    }

    for (let index = 0; index < data.placeFree.length; index++) {
      this.$store.commit("ADD_URL_QUERY", {
        key: queryKey.placeFree + (index + 1),
        value: data.placeFree[index].state ? 1 : 0,
        ns: "gbi"
      });
    }

    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.prefix,
      value: data.prefix,
      ns: "gbi"
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.suffix,
      value: data.suffix,
      ns: "gbi"
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.shortName,
      value: data.shortName ? 1 : 0,
      ns: "gbi"
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.showLevel,
      value: data.showLevel ? 1 : 0,
      ns: "gbi"
    });

    return data;
  },
  computed: {
    isPermalink() {
      return this.$store.state.isPermalink;
    },
    lang() {
      return this.$store.state.locale;
    },
    permaLink() {
      return {
        path: this.$i18nPath("gb-investment/" + this.gb.key + "/"),
        query: this.$store.getters.getUrlQuery("gbi")
      };
    }
  },
  watch: {
    GET_URL_QUERY(val) {
      this.$data.permalink.query = val;
    },
    level(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "level",
          val.length === 0 ? 0 : val,
          oldVal,
          [1, this.$data.maxLevel],
          !this.isPermalink,
          this.$nuxt.$route.path
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.level,
          value: val,
          ns: "gbi"
        });
        this.$data.ownerInvestment = 0;
        this.$data.investorParticipation = [0, 0, 0, 0, 0];
        this.calculate();
      }
    },
    ownerInvestment(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "ownerInvestment",
          val.length === 0 ? 0 : val,
          oldVal,
          [0, this.$data.result.cost],
          !this.isPermalink,
          this.$nuxt.$route.path
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.ownerInvestment,
          value: val,
          ns: "gbi"
        });
        this.calculate();
      }
    },
    investorPercentageGlobal(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "investorPercentageGlobal",
          val.length === 0 ? 0 : val,
          oldVal,
          [">=", 0],
          !this.isPermalink,
          this.$nuxt.$route.path,
          "float"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.investorPercentageGlobal,
          value: val,
          ns: "gbi"
        });
        this.calculate();
      }
      for (let index = 0; index < this.$data.investorPercentageCustom.length; index++) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.investorPercentageCustom + (index + 1),
          value: val,
          ns: "gbi"
        });
        this.$data.investorPercentageCustom[index] = val;
      }
    },
    investorPercentageCustom(val) {
      let result = Utils.FormCheck.VALID;
      let tmp;
      for (let index = 0; index < val.length; index++) {
        tmp = Utils.handlerForm(
          this,
          "investorPercentageCustom_" + index,
          val[index].length === 0 ? 0 : val[index],
          oldInvestorPercentageCustom[index],
          [">=", 0],
          !this.isPermalink,
          this.$nuxt.$route.path,
          "float"
        );
        if (tmp === Utils.FormCheck.INVALID) {
          result = Utils.FormCheck.INVALID;
        } else if (tmp === Utils.FormCheck.VALID) {
          this.$store.commit("UPDATE_URL_QUERY", {
            key: queryKey.investorPercentageCustom + (index + 1),
            value: val[index],
            ns: "gbi"
          });
        }
      }
      if (result === Utils.FormCheck.VALID) {
        oldInvestorPercentageCustom = JSON.parse(JSON.stringify(val));
        this.calculate();
      }
    },
    prefix(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.prefix,
        value: val,
        ns: "gbi"
      });
      this.$cookies.set("gbPrefix", val, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
      this.updatePromotionMessage();
    },
    suffix(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.suffix,
        value: val,
        ns: "gbi"
      });
      this.$cookies.set("gbSuffix", val, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
      this.updatePromotionMessage();
    },
    shortName(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.shortName,
        value: val ? 1 : 0,
        ns: "gbi"
      });
      this.$cookies.set("shortName", val, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
      this.updatePromotionMessage();
    },
    showLevel(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.showLevel,
        value: val ? 1 : 0,
        ns: "gbi"
      });
      this.$cookies.set("showLevel", val, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
      this.updatePromotionMessage();
    },
    result(val) {
      if (val !== null) {
        this.updatePromotionMessage();
      }
    },
    lang() {
      if (this.$data.result !== null) {
        this.updatePromotionMessage();
      }
    }
  },
  methods: {
    goTo(val) {
      window.location.href = this.$i18nPath(`gb-investment/${val}/`);
    },
    cookieValid(key) {
      return this.$cookies.get(key) !== undefined && !isNaN(this.$cookies.get(key));
    },
    calculate() {
      try {
        this.$data.result = gbProcess.Submit(
          this.$data.level,
          this.$data.investorPercentageCustom,
          this.$props.gb.levels,
          this.$data.investorParticipation
        );
        this.$emit("updateLevelData", this.$data.result);
      } catch (e) {
        this.$data.errors["investorParticipation_" + e.index] = true;
      }
    },
    updatePromotionMessage() {
      this.$data.promotion = [
        this.getPromotionMessage(),
        this.getPromotionMessage(false),
        this.getPromotionMessage(true, true),
        this.getPromotionMessage(false, true)
      ];
    },
    getPromotionMessage(titleFirst = true, reverse = false) {
      let result = this.$data.prefix.length > 0 ? `${this.$data.prefix} ` : "";
      result += titleFirst
        ? this.$t(`foe_data.gb${this.$data.shortName ? "_short" : ""}.${this.$props.gb.key}`) +
          `${this.$data.showLevel ? " " + (this.$data.level - 1) + " → " + this.$data.level : ""}`
        : "";
      let array = reverse ? this.$data.result.investment.reduce((a, b) => [b, ...a], []) : this.$data.result.investment;

      let i = reverse ? 5 : 0;
      for (const place of array) {
        i -= reverse ? 1 : 0;
        if (place.participation > 0 && this.$data.placeFree[i].state) {
          result += titleFirst
            ? ` ${this.$t(i18nPrefix + "promotion.promo." + i, {
                investment: place.participation
              })}`
            : `${this.$t(i18nPrefix + "promotion.promo." + i, {
                investment: place.participation
              })} `;
        }
        i += reverse ? 0 : 1;
      }

      result += titleFirst
        ? ""
        : this.$t(`foe_data.gb${this.$data.shortName ? "_short" : ""}.${this.$props.gb.key}`) +
          `${this.$data.showLevel ? " " + (this.$data.level - 1) + " → " + this.$data.level : ""}`;
      result += this.$data.suffix.length > 0 ? ` ${this.$data.suffix}` : "";

      return { message: result, active: false };
    },
    successCopy(index) {
      this.promotion[index].active = true;
      let self = this;
      setTimeout(function() {
        self.promotion[index].active = false;
      }, 3000);
    },
    changePlaceFree(i, value) {
      this.$data.placeFree[i].state = value;

      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.placeFree + (i + 1),
        value: value ? 1 : 0,
        ns: "gbi"
      });

      this.$data.promotion = [
        this.getPromotionMessage(),
        this.getPromotionMessage(false),
        this.getPromotionMessage(true, true),
        this.getPromotionMessage(false, true)
      ];
    },

    /**
     * Check URL query and return query data
     * @param level Current selected level
     * @param maxLevel Max level of the GB
     * @return {Object} Return an object with 'isPermalink' set to False if URI no contains query, otherwise it return
     * an object with corresponding values
     */
    checkQuery(level, maxLevel) {
      let result = { level };
      let investorPercentageCustom = Array.apply(null, Array(5)).map(() => defaultArcPercentage);
      let investorParticipation = Array.apply(null, Array(5)).map(() => 0);
      let placeFree = Array.apply(null, Array(5)).map(() => {
        return { free: true };
      });
      let isPermalink = false;

      // Check level
      if (
        this.$route.query[queryKey.level] &&
        !isNaN(this.$route.query[queryKey.level]) &&
        Utils.inRange(parseInt(this.$route.query[queryKey.level]), 1, maxLevel)
      ) {
        isPermalink = true;
        result.level = parseInt(this.$route.query[queryKey.level]);
      }

      // Check owner investment
      if (
        this.$route.query[queryKey.ownerInvestment] &&
        !isNaN(this.$route.query[queryKey.ownerInvestment]) &&
        Utils.inRange(
          parseInt(this.$route.query[queryKey.ownerInvestment]),
          0,
          this.$props.gb.levels[result.level - 1].cost
        )
      ) {
        isPermalink = true;
        result.ownerInvestment = parseInt(this.$route.query[queryKey.ownerInvestment]);
      }

      // Check global investors percentage
      if (
        this.$route.query[queryKey.investorPercentageGlobal] &&
        !isNaN(this.$route.query[queryKey.investorPercentageGlobal]) &&
        parseFloat(this.$route.query[queryKey.investorPercentageGlobal]) >= 0
      ) {
        isPermalink = true;
        result.investorPercentageGlobal = parseInt(this.$route.query[queryKey.investorPercentageGlobal]);
        investorPercentageCustom = Array.apply(null, Array(5)).map(() => result.investorPercentageGlobal);
      }

      //  Check percentage value for each investors
      for (let i = 0; i < 5; i++) {
        if (
          this.$route.query[queryKey.investorPercentageCustom + (i + 1)] &&
          !isNaN(this.$route.query[queryKey.investorPercentageCustom + (i + 1)]) &&
          parseFloat(this.$route.query[queryKey.investorPercentageCustom + (i + 1)]) >= 0
        ) {
          isPermalink = true;
          investorPercentageCustom[i] = parseFloat(this.$route.query[queryKey.investorPercentageCustom + (i + 1)]);
        }

        if (
          this.$route.query[queryKey.investorParticipation + (i + 1)] &&
          !isNaN(this.$route.query[queryKey.investorParticipation + (i + 1)]) &&
          parseFloat(this.$route.query[queryKey.investorParticipation + (i + 1)]) >= 0
        ) {
          isPermalink = true;
          investorParticipation[i] = parseFloat(this.$route.query[queryKey.investorParticipation + (i + 1)]);
        }
      }

      //  Check free place for each investors
      for (let i = 0; i < 5; i++) {
        if (
          this.$route.query[queryKey.placeFree + (i + 1)] &&
          !isNaN(this.$route.query[queryKey.placeFree + (i + 1)]) &&
          parseInt(this.$route.query[queryKey.placeFree + (i + 1)]) >= 0
        ) {
          isPermalink = true;
          placeFree[i].state = parseInt(this.$route.query[queryKey.placeFree + (i + 1)]) === 1;
        }
      }

      if (this.$route.query[queryKey.prefix]) {
        isPermalink = true;
        result.prefix = this.$route.query[queryKey.prefix];
      }

      if (this.$route.query[queryKey.suffix]) {
        isPermalink = true;
        result.suffix = this.$route.query[queryKey.suffix];
      }

      if (this.$route.query[queryKey.shortName]) {
        isPermalink = true;
        result.shortName = !!parseInt(this.$route.query[queryKey.shortName]);
      }

      if (this.$route.query[queryKey.showLeve]) {
        isPermalink = true;
        result.showLeve = !!parseInt(this.$route.query[queryKey.showLeve]);
      }

      if (isPermalink) {
        this.$store.commit("IS_PERMALINK", true);
        result.investorPercentageCustom = investorPercentageCustom;
        result.investorParticipation = investorParticipation;
        result.placeFree = placeFree;
      }

      return result;
    },
    changeInvestorParticipation(currentIndex, value) {
      if (this.$data.investorParticipation[currentIndex] === value) {
        // nothing to do
        return;
      }

      let lastValue = this.$data.result.cost;
      if (currentIndex > 0) {
        lastValue = Math.min(
          this.$data.result.investment[currentIndex - 1].participation,
          this.$data.result.cost - this.$data.result.investment[currentIndex - 1].cumulativeInvestment
        );
      }

      if (
        Utils.handlerForm(
          this,
          "investorParticipation_" + currentIndex,
          value.length === 0 ? 0 : value,
          this.$data.investorParticipation[currentIndex],
          [0, lastValue],
          !this.isPermalink,
          this.$nuxt.$route.path,
          "int"
        ) === Utils.FormCheck.VALID
      ) {
        this.$data.errors["investorParticipation_" + currentIndex] = false;
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.investorParticipation + (currentIndex + 1),
          value: value,
          ns: "gbi"
        });
        this.$data.investorParticipation[currentIndex] = value;

        const newCumulativeResult = this.$data.result.investment[currentIndex - 1].cumulativeInvestment + value;
        let acc = 0;
        for (let i = currentIndex + 1; i < this.$data.investorParticipation.length; i++) {
          if (this.$data.investorParticipation[i] >= value || acc + newCumulativeResult >= this.$data.result.cost) {
            this.$data.investorParticipation[i] = 0;
          }
          acc += this.$data.investorParticipation[i];
        }
        this.calculate();
      } else {
        this.$data.errors["investorParticipation_" + currentIndex] = true;
      }
    },
    getInvestorParticipation(index) {
      return this.$data.investorParticipation[index];
    },
    haveError(input) {
      return this.$data.errors[input] ? "is-danger" : "";
    }
  },
  mounted() {
    this.calculate();
  },
  components: {
    gbListSelect,
    yesNo
  }
};
