const i18nPrefix = "routes.donate.";

export default {
  head() {
    this.$store.commit("SET_HERO", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle"
    });

    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    this.$store.commit("SET_CURRENT_LOCATION", "donate");
    this.$store.commit("RESTORE_HERO");

    return {
      i18nPrefix,
      secure: location.protocol === "https:"
    };
  }
};
