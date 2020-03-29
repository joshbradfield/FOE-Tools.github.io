import Utils from "~/scripts/utils";

const i18nPrefix = "routes.home.";

export default {
  head() {
    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    this.$store.commit("RESTORE_HERO");

    return {
      i18nPrefix: i18nPrefix,
      content: [
        {
          title: "utils.content.tools",
          id: "tools",
          content: Utils.splitArray(
            [
              {
                title: "tools.gb_investment.title",
                subtitle: "tools.gb_investment.subtitle",
                link: this.$store.get("routes@gb_investment.link")
              },
              {
                title: "tools.secure_position.title",
                subtitle: "tools.secure_position.subtitle",
                link: this.$store.get("routes@secure_position.link")
              },
              {
                title: "tools.cf_calculator.title",
                subtitle: "tools.cf_calculator.subtitle",
                link: this.$store.get("routes@cf_calculator.link")
              },
              {
                title: "tools.trade.title",
                subtitle: "tools.trade.subtitle",
                link: this.$store.get("routes@trade.link")
              },
              {
                title: "tools.campaign_cost.title",
                subtitle: "tools.campaign_cost.subtitle",
                link: this.$store.get("routes@campaign_cost.link")
              }
            ],
            2,
            true
          )
        },
        {
          title: "utils.content.statistics",
          id: "statistics",
          content: Utils.splitArray(
            [
              {
                title: "statistics.gb_statistics.title",
                subtitle: "statistics.gb_statistics.subtitle",
                link: this.$store.get("routes@gb_statistics.link")
              },
              {
                title: "statistics.gb_forecast_cost.title",
                subtitle: "statistics.gb_forecast_cost.subtitle",
                link: this.$store.get("routes@gb_forecast_cost.link")
              }
            ],
            2,
            true
          )
        }
      ]
    };
  }
};
