import Utils from "~/scripts/utils";
import gbProcess from "~/lib/foe-compute-process/gb-investment";
import gbListSelect from "~/components/gb-list-select/GbListSelect";
import yesNo from "~/components/yes-no/YesNo";
import securePosition from "~/components/secure-position/SecurePosition";
import * as Errors from "../../scripts/errors";

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
  displayGbName: urlPrefix + "dgbn",
  shortName: urlPrefix + "sn",
  showLevel: urlPrefix + "sl",
  showSnipe: urlPrefix + "ss",
  yourArcBonus: urlPrefix + "yab"
};

const inputComparator = {
  yourArcBonus: { comparator: [">=", 0], type: "float" }
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
    let investorPercentageGlobal = this.cookieValid(`${this.$route.params.gb}_investorPercentageGlobal`)
      ? parseFloat(this.$cookies.get(`${this.$route.params.gb}_investorPercentageGlobal`))
      : defaultArcPercentage;
    const data = {
      i18nPrefix,
      level: this.cookieValid(`${this.$route.params.gb}_level`)
        ? parseInt(this.$cookies.get(`${this.$route.params.gb}_level`))
        : 10,
      maxLevel: this.$props.gb.levels.length,
      ownerInvestment: this.cookieValid(`${this.$route.params.gb}_ownerInvestment`)
        ? parseInt(this.$cookies.get(`${this.$route.params.gb}_ownerInvestment`))
        : 0,
      investorPercentageGlobal,
      investorPercentageCustom: Array.from(new Array(5), () => investorPercentageGlobal),
      investorParticipation: [],
      addInvestors: null,
      showExtraInvestors: false,
      showSnipe: this.cookieValid("showSnipe") ? !!this.$cookies.get("showSnipe") : false,
      placeFree: [{ state: true }, { state: true }, { state: true }, { state: true }, { state: true }],
      prefix: this.$cookies.get("gbPrefix") ? this.$cookies.get("gbPrefix") : "",
      suffix: this.$cookies.get("gbSuffix") ? this.$cookies.get("gbSuffix") : "",
      displayGbName: this.cookieValid("displayGbName") ? !!this.$cookies.get("displayGbName") : true,
      shortName: this.cookieValid("shortName") ? !!this.$cookies.get("shortName") : false,
      showLevel: this.cookieValid("showLevel") ? !!this.$cookies.get("showLevel") : false,
      yourArcBonus: this.$cookies.get("yourArcBonus") === undefined ? 0 : parseFloat(this.$cookies.get("yourArcBonus")),
      displayTableCard: this.$cookies.get("displayTableCard") ? !!this.$cookies.get("displayTableCard") : false,
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
        addInvestors: false,
        yourArcBonus: false
      },
      promotion: [],
      childChange: false
    };

    for (let i = 0; i < 5; i++) {
      if (this.cookieValid(`${this.$route.params.gb}_investorPercentageCustom_${i}`)) {
        data.investorPercentageCustom[i] = parseFloat(
          this.$cookies.get(`${this.$route.params.gb}_investorPercentageCustom_${i}`)
        );
      }
    }

    if (
      this.$cookies.get(`${this.$route.params.gb}_investorParticipation`) &&
      this.$cookies.get(`${this.$route.params.gb}_investorParticipation`) instanceof Array
    ) {
      data.investorParticipation = this.$cookies.get(`${this.$route.params.gb}_investorParticipation`);
      // this "if" is to update previous storage method to prevent app crash
      if (typeof data.investorParticipation[0] === "number") {
        let tmp = [];
        for (const value of data.investorParticipation) {
          tmp.push({ value, isPotentialSniper: true });
        }
        data.investorParticipation = tmp;
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
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.investorParticipation,
      value: JSON.stringify(data.investorParticipation),
      ns: "gbi"
    });

    for (let index = 0; index < data.investorPercentageCustom.length; index++) {
      this.$store.commit("ADD_URL_QUERY", {
        key: queryKey.investorPercentageCustom + (index + 1),
        value: data.investorPercentageCustom[index],
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
      key: queryKey.displayGbName,
      value: data.displayGbName ? 1 : 0,
      ns: "gbi"
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.showLevel,
      value: data.showLevel ? 1 : 0,
      ns: "gbi"
    });
    this.$store.commit("UPDATE_URL_QUERY", {
      key: queryKey.showSnipe,
      value: data.showSnipe ? 1 : 0,
      ns: "gbi"
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.yourArcBonus,
      value: data.yourArcBonus,
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
    },
    maxInvestment() {
      return !this.$data.result || !this.$data.result.cost
        ? 0
        : this.$data.result.cost - this.investorParticipationNormalizedSum - this.ownerInvestmentNormalized;
    },
    investorParticipationNormalizedSum() {
      return this.investorParticipationNormalized.reduce((i, j) => i + j.value, 0);
    },
    investorParticipationNormalized() {
      /* istanbul ignore next */
      if (!(this.$data.investorParticipation instanceof Array)) {
        throw new Errors.InvalidTypeError({ expected: "Array", actual: typeof this.$data.investorParticipation });
      }

      return this.$data.investorParticipation.map(k => {
        k.value = Utils.normalizeNumberValue(k.value, 0);
        k.isPotentialSniper = !!k.isPotentialSniper;
        return k;
      });
    },
    levelNormalized() {
      return Utils.normalizeNumberValue(this.$data.level, 1);
    },
    ownerInvestmentNormalized() {
      return Utils.normalizeNumberValue(this.$data.ownerInvestment);
    },
    nbColumns() {
      return 6 + (this.$data.showSnipe ? 1 : 0) + (this.investorParticipationNormalizedSum ? 2 : 0);
    },
    getCustomArcBonus() {
      return Utils.normalizeNumberValue(this.$data.yourArcBonus);
    }
  },
  watch: {
    level(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        this.$data.errors.level = true;
        return;
      }

      if (
        Utils.handlerForm(
          this,
          "level",
          !val || val.length === 0 ? 1 : val,
          oldVal,
          [1, this.$data.maxLevel],
          !this.isPermalink,
          this.$route.params.gb + "_level"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.level,
          value: val,
          ns: "gbi"
        });
        this.$data.ownerInvestment = 0;
        this.$data.showExtraInvestors = false;
        this.$data.investorParticipation = [];
        this.$data.result = {};
        this.calculate();
      }
    },
    ownerInvestment(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        this.$data.errors.ownerInvestment = true;
        return;
      }
      if (
        Utils.handlerForm(
          this,
          "ownerInvestment",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          [0, this.result.cost - this.investorParticipationNormalizedSum],
          !this.isPermalink,
          this.$route.params.gb + "_ownerInvestment"
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
    addInvestors(val, oldVal) {
      if (val === null) {
        return;
      }
      if (val && typeof val !== "number" && val.length > 0) {
        this.$data.errors.addInvestors = true;
        return;
      }

      if (
        Utils.handlerForm(this, "addInvestors", !val || val.length === 0 ? 0 : val, oldVal, [1, this.maxInvestment]) ===
        Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.addInvestors,
          value: val,
          ns: "gbi"
        });
      }
    },
    investorPercentageGlobal(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        this.$data.errors.investorPercentageGlobal = true;
        return;
      }

      const value = !val || val.length === 0 ? 0 : val;

      if (
        Utils.handlerForm(
          this,
          "investorPercentageGlobal",
          value,
          oldVal,
          [">=", 0],
          !this.isPermalink,
          this.$route.params.gb + "_investorPercentageGlobal",
          "float"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.investorPercentageGlobal,
          value: val,
          ns: "gbi"
        });

        let investorPercentageCustom = [];
        for (let index = 0; index < this.$data.investorPercentageCustom.length; index++) {
          this.$store.commit("UPDATE_URL_QUERY", {
            key: queryKey.investorPercentageCustom + (index + 1),
            value: Utils.normalizeNumberValue(val),
            ns: "gbi"
          });
          investorPercentageCustom.push(value);
        }
        this.$data.investorPercentageCustom = investorPercentageCustom;

        this.calculate();
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
          this.$route.params.gb + "_investorPercentageCustom_" + index,
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
    investorParticipation(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.investorParticipation,
        value: JSON.stringify(val),
        ns: "gbi"
      });
      this.$cookies.set(`${this.$route.params.gb}_investorParticipation`, val, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
      this.calculate();
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
    displayGbName(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.displayGbName,
        value: val ? 1 : 0,
        ns: "gbi"
      });
      this.$cookies.set("displayGbName", val, {
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
    showSnipe(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.showSnipe,
        value: val ? 1 : 0,
        ns: "gbi"
      });
      this.$cookies.set("showSnipe", val, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
    },
    yourArcBonus(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        return;
      }
      this.$data.change = true;
      if (
        Utils.handlerForm(
          this,
          "yourArcBonus",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.yourArcBonus.comparator,
          !this.isPermalink,
          "yourArcBonus",
          "float"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.yourArcBonus,
          value: val,
          ns: "gbi"
        });
        this.calculate();
      }
    },
    displayTableCard(val) {
      this.$cookies.set("displayTableCard", !!val, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
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
      this.$router.push(`/gb-investment/${val}/`);
    },
    cookieValid(key) {
      return this.$cookies.get(key) !== undefined && !isNaN(this.$cookies.get(key));
    },
    calculate() {
      if (this.maxInvestment < 0) {
        // to prevent BoundExceededError
        return;
      }
      try {
        this.$data.result = gbProcess.ComputeLevelInvestment(
          this.levelNormalized,
          Utils.normalizeNumberArray(this.$data.investorPercentageCustom),
          this.$props.gb.levels,
          this.investorParticipationNormalized,
          Utils.normalizeNumberValue(this.$data.ownerInvestment),
          Utils.normalizeNumberValue(this.$data.yourArcBonus)
        );
      } catch (e) {
        // TODO: error processing
        throw e;
      }
    },
    updatePromotionMessage() {
      this.$data.promotion = [
        this.getPromotionMessage(),
        this.getPromotionMessage(false),
        this.getPromotionMessage(true, true),
        this.getPromotionMessage(false, true),

        this.getPromotionMessage(true, false, true),
        this.getPromotionMessage(true, true, true)
      ];
    },
    getPromotionMessage(titleFirst = true, reverse = false, onlyPlaceIndex = false) {
      let result = this.$data.prefix.length > 0 ? this.$data.prefix : "";
      const addGbAndLevel = () => {
        result = result
          .concat(
            this.$data.displayGbName
              ? " " + this.$t(`foe_data.gb${this.$data.shortName ? "_short" : ""}.${this.$props.gb.key}`)
              : ""
          )
          .concat(this.$data.showLevel ? " " + (this.$data.level - 1) + " → " + this.$data.level : "");
      };
      if (titleFirst) {
        addGbAndLevel();
      }

      let array = reverse ? this.$data.result.investment.reduce((a, b) => [b, ...a], []) : this.$data.result.investment;

      let i = reverse ? 5 : 0;
      for (const place of array) {
        i -= reverse ? 1 : 0;
        if (place.participation > 0 && this.$data.placeFree[i].state) {
          if (onlyPlaceIndex) {
            result += ` ${i + 1}`;
          } else {
            result += ` ${this.$t(i18nPrefix + "promotion.promo." + i, {
              investment: place.participation
            })}`;
          }
        }
        i += reverse ? 0 : 1;
      }

      if (!titleFirst) {
        addGbAndLevel();
      }
      result += " " + this.$data.suffix;

      return { message: result.trim(), active: false };
    },
    successCopy(index) {
      this.promotion[index].active = true;
      let self = this;
      /* istanbul ignore next */
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

      this.updatePromotionMessage();
    },
    changeIsPotentialSniper(i, value) {
      this.$data.investorParticipation[i].isPotentialSniper = !!value;

      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.investorParticipation,
        value: JSON.stringify(this.$data.investorParticipation),
        ns: "gbi"
      });
      this.$cookies.set(`${this.$route.params.gb}_investorParticipation`, this.$data.investorParticipation, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });

      this.calculate();
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
      let investorParticipation = [];
      let placeFree = Array.apply(null, Array(5)).map(() => {
        return { state: true };
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

        if (this.$route.query[queryKey.investorParticipation]) {
          const parsedParticipation = JSON.parse(this.$route.query[queryKey.investorParticipation]);
          if (parsedParticipation instanceof Array) {
            isPermalink = true;
            investorParticipation = parsedParticipation;
          }
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

      if (this.$route.query[queryKey.displayGbName]) {
        isPermalink = true;
        result.displayGbName = !!parseInt(this.$route.query[queryKey.displayGbName]);
      }

      if (this.$route.query[queryKey.shortName]) {
        isPermalink = true;
        result.shortName = !!parseInt(this.$route.query[queryKey.shortName]);
      }

      if (this.$route.query[queryKey.showLevel]) {
        isPermalink = true;
        result.showLevel = !!parseInt(this.$route.query[queryKey.showLevel]);
      }

      if (this.$route.query[queryKey.showSnipe]) {
        isPermalink = true;
        result.showSnipe = !!parseInt(this.$route.query[queryKey.showSnipe]);
      }

      const tmp = Utils.checkFormNumeric(
        this.$route.query[queryKey.yourArcBonus],
        -1,
        inputComparator.yourArcBonus.comparator,
        inputComparator.yourArcBonus.type
      );
      if (tmp.state === Utils.FormCheck.VALID) {
        isPermalink = true;
        result.yourArcBonus = tmp.value;
      }

      if (isPermalink) {
        this.$store.commit("IS_PERMALINK", true);
        result.investorPercentageCustom = investorPercentageCustom;
        result.investorParticipation = investorParticipation;
        result.placeFree = placeFree;
      }

      return result;
    },
    addInvestor() {
      const val = this.$data.addInvestors;
      if (val && typeof val !== "number" && val.length > 0) {
        this.$data.errors.addInvestors = true;
        return;
      }

      if (
        Utils.handlerForm(this, "addInvestors", !val || val.length === 0 ? 0 : val, 0, [1, this.maxInvestment]) ===
        Utils.FormCheck.VALID
      ) {
        this.$data.investorParticipation.push({ value: val, isPotentialSniper: true });
        // Not efficient, but small array
        /* istanbul ignore next */
        this.$data.investorParticipation = this.$data.investorParticipation.sort((a, b) => b.value - a.value);

        this.$data.addInvestors = null;

        this.calculate();
      }
    },
    removeInvestor(index) {
      if (!Utils.inRange(index, 0, this.$data.investorParticipation.length - 1)) {
        return;
      }

      this.$data.investorParticipation.splice(index, 1);
      this.calculate();
    },
    haveReadTipAboutAddInvestor: /* istanbul ignore next */ function() {
      if (!this.$cookies.get("haveReadTipAboutAddInvestor")) {
        let self = this;
        this.$snackbar.open({
          message: this.$t(i18nPrefix + "gb_investment.form.tooltip_add_investors"),
          position: "is-top",
          actionText: this.$t("utils.Ok"),
          indefinite: true,
          onAction: () => {
            self.$cookies.set("haveReadTipAboutAddInvestor", true, {
              path: "/",
              expires: Utils.getDefaultCookieExpireTime()
            });
          }
        });
      }
    },
    haveError(input) {
      return this.$data.errors[input] ? "is-danger" : "";
    }
  },
  mounted() {
    this.calculate();
  },
  components: {
    securePosition,
    gbListSelect,
    yesNo
  }
};
