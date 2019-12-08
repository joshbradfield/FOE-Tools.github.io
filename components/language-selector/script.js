import Utils from "~/scripts/utils";
import countryFlagEmoji from "country-flag-emoji";

export default {
  name: "LanguageSelector",
  data() {
    let supportedLocales = [];
    for (const key of this.$store.state.supportedLocales) {
      supportedLocales.push({
        key,
        displayName: this.$t("language_selector." + (key === "en" ? "en" : "common"), { lang: key })
      });
    }
    supportedLocales.sort((a, b) => (a.displayName > b.displayName ? 1 : b.displayName > a.displayName ? -1 : 0));

    return {
      currentLang: this.$cookies.get("locale"),
      supportedLocales,
      countryFlagEmoji
    };
  },
  watch: {
    currentLang(lang) {
      this.$cookies.set("locale", lang, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
      this.$store.commit("SET_LANG", lang);
      window.location.reload();
    }
  },
  methods: {
    getCurrentCountry(locale) {
      // This allow to manage special cases
      if (locale === "sv") {
        return "se";
      } else if (locale === "cs") {
        return "cz";
      } else {
        return locale;
      }
    }
  }
};
