import gbStatistics from "~/components/gb-statistics/GbStatistics";

const i18nPrefix = "routes.gb_statistics.";

export default {
  head() {
    this.$store.commit("SET_HERO", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle"
    });

    return { title: this.$t(i18nPrefix + "title") };
  },
  async fetch({ app, store }) {
    if (!Object.keys(store.state.foe.gbs).length) {
      const result = await app.$axios.$get("/foe-data/gbs.json");
      store.commit("foe/updateSpecificKey", { key: "gbs", value: result });
    }
  },
  data() {
    this.$store.commit("SET_CURRENT_LOCATION", "gb_statistics");

    return {};
  },
  components: {
    gbStatistics
  }
};
