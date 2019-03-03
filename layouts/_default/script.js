import Vue from "vue";
import languageSelector from "~/components/language-selector/LanguageSelector";
import packageConfig from "~/package.json";
import Utils from "~/scripts/utils";
import DayNight from "./components/dialogDayNight/DialogDayNight";

const i18nPrefix = "components.site_layout.";

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
        lang: this.lang
      },
      bodyAttrs: {
        class: this.darkTheme ? "dark-theme" : "light-theme"
      }
    };
  },
  data() {
    return {
      i18nPrefix: i18nPrefix,
      siteVersion: packageConfig.version,
      darkTheme:
        this.$cookies.get("dayNightMode") === undefined ? false : this.$cookies.get("dayNightMode") === "night",
      dayNightMode: this.$cookies.get("dayNightMode") === undefined ? "day" : this.$cookies.get("dayNightMode"),
      burgerMenuVisible: false,
      cookieDisclaimerUndisplayed:
        this.$cookies.get("cookieDisclaimerDisplayed") === undefined
          ? true
          : this.$cookies.get("cookieDisclaimerDisplayed") !== true,
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
        this.$store.state.routes.contributors,
        this.$store.state.routes.changelog
      ],
      dayNightWatchdog: (() => {
        let timeout;
        return {
          start() {
            if (!timeout) {
              timeout = setInterval(this.updateDayNightMode, 60000);
            }
          },

          stop() {
            clearInterval(timeout);
            timeout = undefined;
          }
        };
      })()
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
    }
  },
  watch: {
    lang(val) {
      this.$formatNumberLocale(val);
    },
    "$route.path"() {
      Vue.set(this.$data, "burgerMenuVisible", false);
    },
    dayNightMode(val) {
      switch (val) {
        case "day":
          this.darkTheme = false;
          this.dayNightWatchdog.stop.call(this);
          this.updateDayNightCookie("day");
          break;
        case "night":
          this.darkTheme = true;
          this.dayNightWatchdog.stop.call(this);
          this.updateDayNightCookie("night");
          break;
        case "auto":
          this.dayNightWatchdog.start.call(this);
          this.updateDayNightCookie("auto");
          this.updateDayNightMode();
          this.showDayNightDialog();
          break;
      }
    },
    darkTheme(val) {
      console.log("value updated: ", val);

      this.$store.commit("IS_DARK_THEME", !!val);
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
    showDayNightDialog() {
      let self = this;
      this.$modal.open({
        parent: this,
        component: DayNight,
        hasModalCard: true,
        events: {
          dayStartChange: () => {
            self.updateDayNightMode();
          },
          nightStartChange: () => {
            self.updateDayNightMode();
          }
        }
      });
    },
    updateDayNightMode() {
      if (this.dayNightMode !== "auto") {
        this.dayNightWatchdog.stop.call(this);
      }
      const current = this.$moment().format("HH:mm");
      const dayStart = this.$moment(this.$cookies.get("dayStart"), "HH:mm").format("HH:mm");
      const nightStart = this.$moment(this.$cookies.get("nightStart"), "HH:mm").format("HH:mm");
      const isDay = current >= dayStart && current < nightStart;
      this.darkTheme = !isDay;
    },
    updateDayNightCookie(value) {
      this.$cookies.set("dayNightMode", value, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
    }
  },
  mounted() {
    this.$formatNumberLocale(this.lang);
    if (this.dayNightMode === "auto") {
      this.dayNightWatchdog.start.call(this);
      this.updateDayNightMode();
    }
  },
  components: {
    languageSelector
  }
};
