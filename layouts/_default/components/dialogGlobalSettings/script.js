import YesNo from "~/components/yes-no/YesNo";
import DayNight from "../dialogDayNight/DialogDayNight";
import Utils from "~/scripts/utils";

const i18nPrefix = "components.site_layout.global_config_dialog.";
const defaultConfig = {
  fixedMainMenu: true,
  gbSelectMode: "datalist", // datalist | select
  dayNightMode: "day" // day | night | auto
};

export default {
  data() {
    return {
      i18nPrefix,
      fixedMainMenu:
        this.$cookies.get("fixedMainMenu") === undefined
          ? defaultConfig.fixedMainMenu
          : this.$cookies.get("fixedMainMenu"),
      gbSelectMode:
        this.$cookies.get("gbSelectMode") === undefined
          ? defaultConfig.gbSelectMode
          : this.$cookies.get("gbSelectMode"),
      gbSelectModes: [
        { key: "datalist", text: this.$t(i18nPrefix + "select_gb_style_mode.datalist") },
        { key: "select", text: this.$t(i18nPrefix + "select_gb_style_mode.select") }
      ],
      dayNightMode:
        this.$cookies.get("dayNightMode") === undefined
          ? defaultConfig.dayNightMode
          : this.$cookies.get("dayNightMode"),
      dayNightModes: [
        { key: "day", text: this.$t(i18nPrefix + "day_night_mode.Day") },
        { key: "night", text: this.$t(i18nPrefix + "day_night_mode.Night") },
        { key: "auto", text: this.$t(i18nPrefix + "day_night_mode.Auto") }
      ]
    };
  },
  computed: {},
  watch: {
    fixedMainMenu(val) {
      this.$store.commit("IS_FIXED_MAIN_MENU", val);
      this.$cookies.set("fixedMainMenu", val, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
    },
    gbSelectMode(val) {
      this.$store.commit("IS_GB_SELECT_MODE_DATALIST", val === "datalist");
      this.$cookies.set("gbSelectMode", val, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
    },
    dayNightMode(val) {
      this.$store.commit("IS_DARK_THEME", val === "night");
      this.$cookies.set("dayNightMode", val, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
      this.$emit("dayNightChanged", val);
    }
  },
  methods: {
    resetSettings() {
      this.$data.fixedMainMenu = defaultConfig.fixedMainMenu;
      this.$data.gbSelectMode = defaultConfig.gbSelectMode;
      this.$data.dayNightMode = defaultConfig.dayNightMode;
    }
  },
  components: {
    YesNo,
    DayNight
  }
};
