import Utils from "~/scripts/utils";

const i18nPrefix = "routes.gb_investment_gb_chooser.";
let gbList = {};

export default {
  head() {
    this.$store.set("hero", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle"
    });

    return {
      title: this.$t(i18nPrefix + "title")
    };
  },
  async fetch({ app, store }) {
    if (!Object.keys(store.get("foe/gbs")).length) {
      const result = await app.$axios.$get("/foe-data/gbs.json");
      store.set("foe/gbs", result);
    }
  },
  data() {
    gbList = this.$store.get("foe/gbs@gbList");

    return {
      i18nPrefix: i18nPrefix,
      GBsByAge: Utils.splitArray(gbList, 2, true)
    };
  },
  methods: {
    getGbStyle(key) {
      return key + "-header";
    }
  }
};
