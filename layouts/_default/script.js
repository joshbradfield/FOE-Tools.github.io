import Vue from "vue";
import languageSelector from "~/components/language-selector/LanguageSelector";
import packageConfig from "~/package.json";
import Utils from "~/scripts/utils";
import GlobalSettings from "./components/dialogGlobalSettings/DialogGlobalSettings";
import { getUserLocale } from "get-user-locale";
import { defaultPromotionMessages } from "~/scripts/promotion-message-builder";
import { v4 } from "uuid";

const i18nPrefix = "components.site_layout.";
const dayNightWatchdogTimeout = 60000;
const defaultProfileName = "Default";

const tagURL = "https://api.github.com/repos/FOE-Tools/FOE-Tools.github.io/git/refs/tags";

export default {
  head /* istanbul ignore next */: function() {
    return {
      link: [
        {
          hid: "icon_1",
          rel: "icon",
          type: "image/png",
          href: "/img/icons/favicon-16x16.png"
        }
      ],
      htmlAttrs: {
        lang: this.lang,
        class: this.$store.state.isDarkTheme ? "dark-theme" : "light-theme"
      },
      bodyAttrs: {
        class:
          (this.$store.state.isFixedMainMenu ? "has-navbar-fixed-top " : "") +
          (this.$store.state.isDarkTheme ? "dark-theme" : "light-theme")
      }
    };
  },
  data() {
    this.$store.dispatch("nuxtServerInit");

    this.initData();

    this.$store.commit("IS_DARK_THEME", this.$store.state.global.dayNightMode === "night");
    this.$store.commit("IS_FIXED_MAIN_MENU", this.$clone(this.$store.state.global.fixedMainMenu));
    this.$store.commit("IS_GB_SELECT_MODE_DATALIST", this.$store.state.global.gbSelectMode === "datalist");

    if (!this.$store.state.global.lastVisitVersion.length) {
      this.$store.commit("global/updateSpecificKey", { key: "lastVisitVersion", value: packageConfig.version });
    }

    if (!this.$store.state.global.donationConversion.length) {
      this.$store.commit("global/updateSpecificKey", { key: "donationConversion", value: this.getNextConversion() });
    }

    return {
      i18nPrefix: i18nPrefix,
      siteVersion: packageConfig.version,
      nbUpdateSinceLastVisit: 0,
      dayNightMode: this.$clone(this.$store.state.global.dayNightMode),
      burgerMenuVisible: false,
      cookieDisclaimerUndisplayed: !this.$clone(this.$store.state.global.cookieDisclaimerDisplayed),
      haveReadLocaleInfoAvailable: this.$clone(this.$store.state.global.haveReadLocaleInfoAvailable),
      navbarLinks: {
        home: this.$store.state.routes.home,
        gb_investment: this.$store.state.routes.gb_investment,
        secure_position: this.$store.state.routes.secure_position,
        cf_calculator: this.$store.state.routes.cf_calculator,
        gb_statistics: this.$store.state.routes.gb_statistics,
        gb_forecast_cost: this.$store.state.routes.gb_forecast_cost,
        trade: this.$store.state.routes.trade,
        campaign_cost: this.$store.state.routes.campaign_cost
      },
      mainMenu: [
        {
          ...this.$store.state.routes.home,
          type: Utils.MenuRecordType.PAGE,
          name: this.$t(`main_menu.${this.$store.state.routes.home.key}`),
          children: []
        },
        {
          type: Utils.MenuRecordType.MENU_ENTRY,
          name: this.$t("utils.content.tools"),
          key: null,
          link: null,
          children: [
            {
              ...this.$store.state.routes.gb_investment,
              type: Utils.MenuRecordType.PAGE,
              name: this.$t(`main_menu.${this.$store.state.routes.gb_investment.key}`),
              children: []
            },
            {
              ...this.$store.state.routes.secure_position,
              type: Utils.MenuRecordType.PAGE,
              name: this.$t(`main_menu.${this.$store.state.routes.secure_position.key}`),
              children: []
            },
            {
              ...this.$store.state.routes.cf_calculator,
              type: Utils.MenuRecordType.PAGE,
              name: this.$t(`main_menu.${this.$store.state.routes.cf_calculator.key}`),
              children: []
            },
            {
              ...this.$store.state.routes.trade,
              type: Utils.MenuRecordType.PAGE,
              name: this.$t(`main_menu.${this.$store.state.routes.trade.key}`),
              children: []
            },
            {
              ...this.$store.state.routes.campaign_cost,
              type: Utils.MenuRecordType.PAGE,
              name: this.$t(`main_menu.${this.$store.state.routes.campaign_cost.key}`),
              children: []
            }
          ]
        },
        {
          type: Utils.MenuRecordType.MENU_ENTRY,
          name: this.$t("utils.content.statistics"),
          link: null,
          key: null,
          children: [
            {
              ...this.$store.state.routes.gb_statistics,
              type: Utils.MenuRecordType.PAGE,
              name: this.$t(`main_menu.${this.$store.state.routes.gb_statistics.key}`),
              link: this.$store.state.routes.gb_statistics.link,
              children: []
            },
            {
              ...this.$store.state.routes.gb_forecast_cost,
              type: Utils.MenuRecordType.PAGE,
              name: this.$t(`main_menu.${this.$store.state.routes.gb_forecast_cost.key}`),
              children: []
            }
          ]
        }
      ],
      footerLinks: [
        this.$store.state.routes.about,
        this.$store.state.routes.contact,
        this.$store.state.routes.contributors,
        this.$store.state.routes.changelog
      ],
      dayNightWatchdog: (() => {
        let timeout;
        return {
          start: /* istanbul ignore next */ function() {
            if (!timeout) {
              timeout = setInterval(this.updateDayNightMode, dayNightWatchdogTimeout);
            }
          },
          stop: /* istanbul ignore next */ function() {
            clearInterval(timeout);
            timeout = undefined;
          }
        };
      })(),
      showSnackbarChangeLocale: false,
      detectedLocale: ""
    };
  },
  computed: {
    creationDate() {
      return this.$moment("2017-12-20");
    },
    isPermalink() {
      return this.$store.state.isPermalink;
    },
    lang() {
      return this.$store.state.locale;
    },
    isNewYear() {
      return this.$moment().format("MMDD") === this.creationDate.format("MMDD");
    },
    nbYears() {
      return this.$moment().year() - this.creationDate.year();
    },
    isConversionDate() {
      return this.$moment().isAfter(
        this.$moment(this.$clone(this.$store.state.global.donationConversion), "YYYY-MM-DD")
      );
    },
    hasSurvey() {
      return (
        this.$store.state.currentLocation !== "survey" && this.$store.state.survey && this.$store.state.survey.length
      );
    }
  },
  watch: {
    lang(val) {
      this.$formatNumberLocale(val);
    },
    "$route.path"() {
      Vue.set(this.$data, "burgerMenuVisible", false);
      this.$store.commit("RESET_LOCATION");
    },
    dayNightMode: /* istanbul ignore next */ function(val) {
      switch (val) {
        case "day":
          this.dayNightWatchdog.stop.call(this);
          this.updateDayNightCookie(val);
          break;
        case "night":
          this.dayNightWatchdog.stop.call(this);
          this.updateDayNightCookie(val);
          break;
        case "auto":
          this.updateDayNightCookie(val);
          this.updateDayNightMode();
          break;
      }
    }
  },
  methods: {
    confirmInfoCookie() {
      this.$data.cookieDisclaimerUndisplayed = false;
      this.$store.commit("global/updateSpecificKey", {
        key: "cookieDisclaimerDisplayed",
        value: true
      });
    },
    getNextConversion() {
      const min = 15;
      const max = 30;
      const amount = Math.random() * (max - min) + min;
      return this.$moment()
        .add(amount, "days")
        .format("YYYY-MM-DD");
    },
    toggleMenu() {
      Vue.set(this.$data, "burgerMenuVisible", !this.$data.burgerMenuVisible);
    },
    isActive(key) {
      return this.$store.state.currentLocation === key;
    },
    showGlobalSettings: /* istanbul ignore next */ function() {
      let self = this;
      this.$buefy.modal.open({
        parent: this,
        component: GlobalSettings,
        hasModalCard: true,
        events: {
          dayStartChange: () => {
            self.updateDayNightMode();
          },
          nightStartChange: () => {
            self.updateDayNightMode();
          },
          dayNightChanged: val => {
            this.$data.dayNightMode = val;
          }
        }
      });
    },
    updateDayNightMode: /* istanbul ignore next */ function() {
      if (this.dayNightMode !== "auto") {
        this.dayNightWatchdog.stop.call(this);
      } else {
        this.dayNightWatchdog.start.call(this);
      }
      const current = this.$moment().format("HH:mm");
      const dayStart = this.$moment(this.$clone(this.$store.state.global.dayStart), "HH:mm").format("HH:mm");
      const nightStart = this.$moment(this.$clone(this.$store.state.global.nightStart), "HH:mm").format("HH:mm");
      const isDay = current >= dayStart && current < nightStart;
      this.$store.commit("IS_DARK_THEME", !isDay);
    },
    updateDayNightCookie(value) {
      this.$store.commit("IS_DARK_THEME", value === "night");
      this.$store.commit("global/updateSpecificKey", {
        key: "dayNightMode",
        value: this.$clone(value)
      });
    },
    backToTop: /* istanbul ignore next */ function() {
      window.scroll({ top: 0 });
    },
    closeSnackbar: /* istanbul ignore next */ function() {
      this.showSnackbarChangeLocale = false;
      this.$store.commit("global/updateSpecificKey", {
        key: "haveReadLocaleInfoAvailable",
        value: true
      });
    },
    switchLocale: /* istanbul ignore next */ function() {
      this.closeSnackbar();
      this.$store.commit("global/updateSpecificKey", {
        key: "locale",
        value: this.$clone(this.detectedLocale)
      });
      this.$store.commit("SET_LANG", this.detectedLocale);
      window.location.reload();
    },
    onCloseDonationMessage: /* istanbul ignore next */ function() {
      this.$store.commit("global/updateSpecificKey", {
        key: "donationConversion",
        value: this.$clone(this.getNextConversion())
      });
    },
    initData: /* istanbul ignore next */ function() {
      const defaultInvestorPercentageGlobal = 90;

      let currentProfileID;

      if (!this.$store.state.global.profiles.length || !this.$store.state.global.currentProfile) {
        const ids = this.$store.state.global.profiles.map(k => k.key);
        do {
          currentProfileID = v4();
        } while (ids.indexOf(currentProfileID) >= 0);

        this.$store.commit("global/updateProfiles", [{ id: currentProfileID, name: defaultProfileName }]);
        this.$store.commit("global/updateCurrentProfile", currentProfileID);
        this.$store.commit("profile/addProfile", { key: currentProfileID, profile: {} });
      } else {
        currentProfileID = this.$store.state.global.currentProfile;
      }

      // Next, we move cookies to indexedDB
      const cookies = this.$cookies.getAll();

      const globalKeys = [
        "cookieDisclaimerDisplayed",
        "survey",
        "gbSelectMode",
        "fixedMainMenu",
        "haveReadLocaleInfoAvailable",
        "customPromotionMessagesTemplates",
        "haveReadTipAboutAddInvestor",
        "dayNightMode",
        "dayStart",
        "nightStart",
        "lastVisitVersion"
      ];

      if ("locale" in cookies) {
        this.$store.commit("global/updateSpecificKey", { key: "locale", value: this.$cookies.get("locale") });
      }

      for (const key of globalKeys) {
        if (key in cookies) {
          this.$store.commit("global/updateSpecificKey", { key, value: this.$cookies.get(key) });
          if (!this.$cookies.get(key)) {
            this.$cookies.set(key, true, {
              path: "/",
              expires: Utils.getDefaultCookieExpireTime()
            });
          }
          this.$cookies.remove(key, { path: "/" });
        }
      }

      let currentProfile = {
        gbShowPrefix: true,
        gbShowSuffix: true,
        displayTableCard: false,
        showOnlySecuredPlaces: false,
        displayGbName: true,
        promotionMessageList: defaultPromotionMessages,
        gbi_tab: 0,
        showSnipe: false,
        yourAge: "BronzeAge",
        shortName: false,
        showLevel: true,
        yourArcBonus: 0,
        yourCfBoost: 0,
        gbPrefix: "",
        gbSuffix: "",
        cf: {
          coins: 0,
          fpBy24h: 0,
          goods: 0,
          otherRq: 0,
          cumulativeQuest: 0,
          secondRq: false,
          supplies: 0,
          suppliesGathered: 0
        },
        gb: {}
      };

      const dbProfile = this.$store.state.profile.profiles[currentProfileID];
      if (!Utils.isNullOrUndef(dbProfile)) {
        currentProfile = {
          ...currentProfile,
          ...dbProfile,
          cf: { ...currentProfile.cf, ...this.$clone(dbProfile.cf) },
          gb: { ...this.$clone(dbProfile.gb) }
        };
      }

      const profileDefaultKeys = [
        { key: "gbShowPrefix", parentKey: "" },
        { key: "gbShowSuffix", parentKey: "" },
        { key: "displayTableCard", parentKey: "" },
        { key: "showOnlySecuredPlaces", parentKey: "" },
        { key: "displayGbName", parentKey: "" },
        { key: "promotionMessageList", parentKey: "" },
        { key: "gbi_tab", parentKey: "" },
        { key: "showSnipe", parentKey: "" },
        { key: "shortName", parentKey: "" },
        { key: "showLevel", parentKey: "" },
        { key: "yourArcBonus", parentKey: "" },
        { key: "yourCfBoost", parentKey: "" },
        { key: "yourAge", parentKey: "" },
        { key: "gbPrefix", parentKey: "" },
        { key: "gbSuffix", parentKey: "" },
        { key: "coins", parentKey: "cf" },
        { key: "supplies", parentKey: "cf" },
        { key: "goods", parentKey: "cf" },
        { key: "fpBy24h", parentKey: "cf" },
        { key: "otherRq", parentKey: "cf" },
        { key: "suppliesGathered", parentKey: "cf" },
        { key: "cumulativeQuest", parentKey: "cf" },
        { key: "secondRq", parentKey: "cf" }
      ];

      // Add keys that is global in the profile or in cf
      for (const profileDefaultKey of profileDefaultKeys) {
        if (profileDefaultKey.key in cookies) {
          if (profileDefaultKey.parentKey.length) {
            currentProfile[profileDefaultKey.parentKey][profileDefaultKey.key] = this.$cookies.get(
              profileDefaultKey.key
            );
          } else {
            currentProfile[profileDefaultKey.key] = this.$cookies.get(profileDefaultKey.key);
          }
          if (!this.$cookies.get(profileDefaultKey.key)) {
            this.$cookies.set(profileDefaultKey.key, true, {
              path: "/",
              expires: Utils.getDefaultCookieExpireTime()
            });
          }
          this.$cookies.remove(profileDefaultKey.key, { path: "/" });
        }
      }

      const cookieKeys = Object.keys(cookies);
      const defaultGBConf = Utils.getDefaultGBConf();

      // Get "easy" keys of GB
      cookieKeys.some(e => {
        const regGbTab = /^(\w+)_tab$/g;
        const regOwnerView = /^(\w+)_(ownerInvestment|investorParticipation|level)_?(\d*)$/g;
        const regInvestorView = /^(\w+)_(from|to|showPlace|takingPlaceInConsideration)_?(\d*)$/g;
        if (regGbTab.test(e)) {
          regGbTab.lastIndex = 0;
          const m = regGbTab.exec(e);

          currentProfile.gb[m[1]] = this.$clone(
            Utils.isNullOrUndef(currentProfile.gb[m[1]]) ? defaultGBConf : currentProfile.gb[m[1]]
          );

          currentProfile.gb[m[1]].tab = this.$cookies.get(e);
          if (!this.$cookies.get(e)) {
            this.$cookies.set(e, true, {
              path: "/",
              expires: Utils.getDefaultCookieExpireTime()
            });
          }
          this.$cookies.remove(e, { path: "/" });
        } else if (regOwnerView.test(e)) {
          regOwnerView.lastIndex = 0;
          const m = regOwnerView.exec(e);

          currentProfile.gb[m[1]] = this.$clone(
            Utils.isNullOrUndef(currentProfile.gb[m[1]]) ? defaultGBConf : currentProfile.gb[m[1]]
          );
          currentProfile.gb[m[1]].ownerView[m[2]] = this.$cookies.get(e);
          if (!this.$cookies.get(e)) {
            this.$cookies.set(e, true, {
              path: "/",
              expires: Utils.getDefaultCookieExpireTime()
            });
          }
          this.$cookies.remove(e, { path: "/" });
        } else if (regInvestorView.test(e)) {
          regInvestorView.lastIndex = 0;
          const m = regInvestorView.exec(e);

          currentProfile.gb[m[1]] = this.$clone(
            Utils.isNullOrUndef(currentProfile.gb[m[1]]) ? defaultGBConf : currentProfile.gb[m[1]]
          );

          currentProfile.gb[m[1]].investorView[m[2]] = this.$cookies.get(e);
          if (!this.$cookies.get(e)) {
            this.$cookies.set(e, true, {
              path: "/",
              expires: Utils.getDefaultCookieExpireTime()
            });
          }
          this.$cookies.remove(e, { path: "/" });
        }
      });

      // Get InvestorPercentageGlobal
      cookieKeys.some(e => {
        const reg = /^(\w+)_investorPercentageGlobal$/g;
        if (reg.test(e)) {
          reg.lastIndex = 0;
          const m = reg.exec(e);
          if (Utils.isNullOrUndef(currentProfile.gb[m[1]])) {
            currentProfile.gb[m[1]] = { ...this.$clone(defaultGBConf) };
          }
          currentProfile.gb[m[1]].ownerView.investorPercentageGlobal = this.$cookies.get(e);
          currentProfile.gb[m[1]].ownerView.investorPercentageCustom = Array.from(
            new Array(5),
            () => defaultInvestorPercentageGlobal
          );
          if (!this.$cookies.get(e)) {
            this.$cookies.set(e, true, {
              path: "/",
              expires: Utils.getDefaultCookieExpireTime()
            });
          }
          this.$cookies.remove(e, { path: "/" });
        }
      });

      // Get InvestorPercentageCustom
      cookieKeys.some(e => {
        const reg = /^(\w+)_investorPercentageCustom_?(\d*)$/g;
        if (reg.test(e)) {
          reg.lastIndex = 0;
          const m = reg.exec(e);

          if (Utils.isNullOrUndef(currentProfile.gb[m[1]])) {
            currentProfile.gb[m[1]] = { ...this.$clone(defaultGBConf) };
          } else if (!("investorPercentageGlobal" in currentProfile.gb[m[1]].ownerView)) {
            currentProfile.gb[m[1]].ownerView.investorPercentageGlobal = defaultInvestorPercentageGlobal;
          }

          currentProfile.gb[m[1]].ownerView.investorPercentageCustom[parseInt(m[2])] = parseFloat(this.$cookies.get(e));
          if (!this.$cookies.get(e)) {
            this.$cookies.set(e, true, {
              path: "/",
              expires: Utils.getDefaultCookieExpireTime()
            });
          }
          this.$cookies.remove(e, { path: "/" });
        }
      });

      this.$store.commit("profile/setProfile", { profileKey: currentProfileID, profile: { ...currentProfile } });
    }
  },
  mounted: /* istanbul ignore next */ function() {
    this.$formatNumberLocale(this.lang);
    if (this.dayNightMode === "auto") {
      this.dayNightWatchdog.start.call(this);
      this.updateDayNightMode();
    }

    this.$store.commit("SET_LANG", this.$clone(this.$store.state.global.locale));
    this.$data.lang = this.$clone(this.$store.state.global.locale);

    const detectedLocale = getUserLocale().slice(0, 2);
    if (
      !this.haveReadLocaleInfoAvailable &&
      this.lang !== detectedLocale &&
      this.$store.state.supportedLocales.indexOf(detectedLocale) >= 0
    ) {
      this.showSnackbarChangeLocale = true;
      this.detectedLocale = detectedLocale;
    }

    // Check updates
    if (this.$store.state.global.lastVisitVersion !== this.$data.siteVersion) {
      const lastVisitVersion = this.$clone(this.$store.state.global.lastVisitVersion);
      let xhr = new XMLHttpRequest();
      let self = this;
      xhr.open("GET", tagURL, true);
      xhr.onload = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const tags = JSON.parse(xhr.responseText);
            let found = false;
            let nb = 0;
            tags.forEach(elt => {
              if (!found && elt.ref.match(/v(\d+\.\d+\.\d+)$/)[1] === lastVisitVersion) {
                found = true;
              } else if (found) {
                nb += 1;
              }
              return false;
            });

            self.$data.nbUpdateSinceLastVisit = nb;

            this.$store.commit("global/updateSpecificKey", {
              key: "lastVisitVersion",
              value: this.$clone(self.$data.siteVersion)
            });
          } else {
            console.error(xhr.statusText);
          }
        }
      };
      xhr.onerror = function() {
        console.error(xhr.statusText);
      };
      xhr.send(null);
    }
  },
  components: {
    languageSelector
  }
};
