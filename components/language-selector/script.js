import Utils from "~/scripts/utils";

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
      supportedLocales
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
  }
};
