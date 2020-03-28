const i18nPrefix = "routes.help_to_translate_the_site.";

export default {
  head() {
    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    this.$store.set("currentLocation", "help_to_translate_the_site");
    this.$store.set("hero", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle"
    });

    return {
      i18nPrefix
    };
  }
};
