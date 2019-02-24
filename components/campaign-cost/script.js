import Vue from "vue";
import allAges from "~/lib/foe-data/ages";
import { campaignCost } from "~/lib/foe-data/campaign-cost";
import { agesGoods, goods } from "~/lib/foe-data/goods";
import { bonus } from "~/lib/foe-data/bonus";

const i18nPrefix = "components.campaign_cost.";

const ages = JSON.parse(JSON.stringify(allAges));
delete ages.NoAge;

export default {
  name: "CampaignCost",
  data() {
    const provinces = this.sortProvinceArray(campaignCost, ages.BronzeAge.key);
    return {
      i18nPrefix,
      ages,
      agesGoods,
      campaignCost,
      currentAge: ages.BronzeAge.key,
      province: provinces[Object.keys(provinces)[0]],
      result: null,
      sectorConquired: [],
      haveUnknownCosts: false,
      errors: {
        currentAge: false,
        province: false
      }
    };
  },
  watch: {
    currentAge(val) {
      if (Object.keys(this.$data.ages).indexOf(val) >= 0) {
        this.$data.errors.currentAge = false;
        this.$data.province = this.sortProvinceArray(campaignCost, val)[Object.keys(campaignCost[val])[0]];
        this.compute();
      } else {
        this.$data.errors.currentAge = true;
      }
    },

    province(val) {
      if (Object.keys(campaignCost[this.$data.currentAge]).indexOf(val.key) >= 0) {
        this.$data.errors.province = false;
        Vue.set(this.$data, "sectorConquired", Array(val.sectors.length).fill(false));
        this.compute();
      } else {
        this.$data.errors.province = true;
      }
    }
  },
  methods: {
    haveError(key) {
      return this.$data.errors[key] ? "is-danger" : "";
    },

    sortProvinceArray(campaignCost, currentAge) {
      const ordered = {};
      Object.keys(campaignCost[currentAge])
        .sort((a, b) => {
          return this.$t("foe_data.province." + a) > this.$t("foe_data.province." + b)
            ? 1
            : this.$t("foe_data.province." + b) > this.$t("foe_data.province." + a)
              ? -1
              : 0;
        })
        .forEach(function(key) {
          ordered[key] = campaignCost[currentAge][key];
        });
      return ordered;
    },

    switchConquired(index, value) {
      this.$data.sectorConquired[index] = !!value;
      this.compute();
    },

    compute() {
      if (this.$data.errors.currentAge || this.$data.errors.province) {
        return;
      }
      this.$data.haveUnknownCosts = false;

      let good = {};
      let specialGoods = {};
      let goodsColumnsData = [];
      let specialGoodsColumnsData = [];
      let index = 0;
      let ages = {};
      for (const sector of this.$data.province.sectors) {
        /* istanbul ignore if */
        if (Object.keys(sector).indexOf("cost") < 0) {
          this.$data.haveUnknownCosts = true;
          continue;
        }
        for (const need of sector.cost) {
          if (need.type === bonus.special_good) {
            if (!specialGoods[need.key]) {
              specialGoods[need.key] = 0;
              specialGoodsColumnsData.push({ key: need.key, displayName: this.$t("foe_data.goods." + need.key) });
            }
            specialGoods[need.key] += !this.$data.sectorConquired[index] ? need.value : 0;
          } else {
            if (!good[goods[need.key].age]) {
              good[goods[need.key].age] = {};
            }
            if (!good[goods[need.key].age][need.key]) {
              good[goods[need.key].age][need.key] = 0;
              ages[goods[need.key].age] = true;
            }
            good[goods[need.key].age][need.key] += !this.$data.sectorConquired[index] ? need.value : 0;
          }
        }
        index++;
      }

      for (let age in ages) {
        for (let good of agesGoods[age].goods) {
          goodsColumnsData.push({
            key: good.key,
            age: good.age,
            displayName: this.$t("foe_data.goods." + good.key)
          });
        }
      }

      let result = {
        good,
        specialGoods,
        nbColumns: goodsColumnsData.length + specialGoodsColumnsData.length,
        goodsColumnsData,
        specialGoodsColumnsData
      };
      Vue.set(this.$data, "result", result);
    }
  },
  mounted() {
    this.compute();
  }
};
