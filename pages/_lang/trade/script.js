import SimpleTrade from "~/components/simple-trade/SimpleTrade";
import Trade from "~/components/trade/Trade";
import { TradeArrayType, fairTradeArray, simpleTradeArray } from "~/scripts/trade";

const i18nPrefix = "routes.trade.";

export default {
  head() {
    this.$store.set("hero", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle"
    });

    return { title: this.$t(i18nPrefix + "title") };
  },
  async fetch({ app, store }) {
    if (!Object.keys(store.get("foe/goods")).length) {
      const goodsResult = await app.$axios.$get("/foe-data/goods.json");
      store.set("foe/goods", goodsResult);
    }
  },
  data() {
    this.$store.set("currentLocation", "trade");
    this.$store.commit("RESTORE_HERO");

    return {
      i18nPrefix,
      TradeArrayType,
      tab: 1,
      fairTradeArray,
      simpleTradeArray
    };
  },
  components: {
    SimpleTrade,
    Trade
  }
};
