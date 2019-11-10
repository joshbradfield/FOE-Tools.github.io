import Vue from "vue";
import languageSelector from "~/components/language-selector/LanguageSelector";
import packageConfig from "~/package.json";
import Utils from "~/scripts/utils";
import GlobalSettings from "./components/dialogGlobalSettings/DialogGlobalSettings";
import { getUserLocale } from "get-user-locale";

const i18nPrefix = "components.site_layout.";
const dayNightWatchdogTimeout = 60000;

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
    this.$store.commit(
      "IS_DARK_THEME",
      this.$cookies.get("dayNightMode") === undefined ? false : this.$cookies.get("dayNightMode") === "night"
    );
    this.$store.commit(
      "IS_FIXED_MAIN_MENU",
      this.$cookies.get("fixedMainMenu") === undefined ? true : this.$cookies.get("fixedMainMenu")
    );
    this.$store.commit(
      "IS_GB_SELECT_MODE_DATALIST",
      this.$cookies.get("gbSelectMode") === undefined ? false : this.$cookies.get("gbSelectMode") === "datalist"
    );
    if (this.$cookies.get("lastVisitVersion") === undefined) {
      this.$cookies.set("lastVisitVersion", packageConfig.version, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
    }

    return {
      i18nPrefix: i18nPrefix,
      siteVersion: packageConfig.version,
      nbUpdateSinceLastVisit: 0,
      dayNightMode: this.$cookies.get("dayNightMode") === undefined ? "day" : this.$cookies.get("dayNightMode"),
      burgerMenuVisible: false,
      cookieDisclaimerUndisplayed:
        this.$cookies.get("cookieDisclaimerDisplayed") === undefined
          ? true
          : this.$cookies.get("cookieDisclaimerDisplayed") !== true,
      haveReadLocaleInfoAvailable:
        this.$cookies.get("haveReadLocaleInfoAvailable") !== undefined &&
        this.$cookies.get("haveReadLocaleInfoAvailable"),
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
      this.$cookies.set("cookieDisclaimerDisplayed", true, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
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
      const dayStart = this.$moment(this.$cookies.get("dayStart"), "HH:mm").format("HH:mm");
      const nightStart = this.$moment(this.$cookies.get("nightStart"), "HH:mm").format("HH:mm");
      const isDay = current >= dayStart && current < nightStart;
      this.$store.commit("IS_DARK_THEME", !isDay);
    },
    updateDayNightCookie(value) {
      this.$store.commit("IS_DARK_THEME", value === "night");
      this.$cookies.set("dayNightMode", value, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
    },
    backToTop: /* istanbul ignore next */ function() {
      window.scroll({ top: 0 });
    },
    closeSnackbar: /* istanbul ignore next */ function() {
      this.showSnackbarChangeLocale = false;
      this.$cookies.set("haveReadLocaleInfoAvailable", true, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
    },
    switchLocale: /* istanbul ignore next */ function() {
      this.closeSnackbar();
      this.$cookies.set("locale", this.detectedLocale, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
      this.$store.commit("SET_LANG", this.detectedLocale);
      window.location.reload();
    }
  },
  mounted: /* istanbul ignore next */ function() {
    this.$formatNumberLocale(this.lang);
    if (this.dayNightMode === "auto") {
      this.dayNightWatchdog.start.call(this);
      this.updateDayNightMode();
    }

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
    if (this.$cookies.get("lastVisitVersion") !== this.$data.siteVersion) {
      const lastVisitVersion = this.$cookies.get("lastVisitVersion");
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

            self.$cookies.set("lastVisitVersion", self.$data.siteVersion, {
              path: "/",
              expires: Utils.getDefaultCookieExpireTime()
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
