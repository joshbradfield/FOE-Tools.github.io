import cfCalculator from "~/components/cf-calculator/CfCalculator";

const i18nPrefix = "routes.cf_calculator.";

export default {
  head() {
    this.$store.set("hero", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle"
    });

    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    return {};
  },
  components: {
    cfCalculator
  }
};
