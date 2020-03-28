const i18nPrefix = "routes.contact.";

export default {
  head() {
    this.$store.set("hero", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle"
    });

    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    this.$store.set("currentLocation", "contact");

    return {
      i18nPrefix
    };
  }
};
