import securePosition from "~/components/secure-position/SecurePosition";

const i18nPrefix = "routes.secure_position.";

export default {
  head() {
    this.$store.commit("SET_HERO", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle"
    });

    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    this.$store.commit("SET_CURRENT_LOCATION", "secure_position");

    return {};
  },
  components: {
    securePosition
  }
};
