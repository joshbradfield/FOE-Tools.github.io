import allContributorsrc from "~/all-contributorsrc.json";
import Utils from "~/scripts/utils";

const i18nPrefix = "routes.contributors.";

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
  data() {
    return {
      i18nPrefix,
      allContributorsrc,
      contributors: Utils.splitArray(allContributorsrc.contributors, 2, true)
    };
  }
};
