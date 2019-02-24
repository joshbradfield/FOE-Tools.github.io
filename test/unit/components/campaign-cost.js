import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/campaign-cost/CampaignCost";
import { getView } from "../localVue";
import ages from "../../../lib/foe-data/ages";

const factory = () => {
  const { localVue, store } = getView();
  return shallowMount(Component, {
    localVue: localVue,
    store: store
  });
};

describe("CampaignCost", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Change "currentAge" value', () => {
    const wrapper = factory();
    const value = ages.IronAge.key;
    expect(wrapper.vm.currentAge).toBe(ages.BronzeAge.key);
    wrapper.vm.currentAge = value;
    expect(wrapper.vm.currentAge).toBe(value);
    expect(wrapper.vm.errors.currentAge).toBe(false);
  });

  test('Change "currentAge" invalid value', () => {
    const wrapper = factory();
    const value = "foo";
    expect(wrapper.vm.currentAge).toBe(ages.BronzeAge.key);
    wrapper.vm.currentAge = value;
    expect(wrapper.vm.currentAge).toBe(value);
    expect(wrapper.vm.errors.currentAge).toBe(true);
  });

  test('Change "province" value', () => {
    const wrapper = factory();
    const provinces = wrapper.vm.sortProvinceArray(wrapper.vm.campaignCost, wrapper.vm.currentAge);
    const value = provinces[Object.keys(provinces)[1]];

    expect(wrapper.vm.province).toBe(provinces[Object.keys(provinces)[0]]);
    wrapper.vm.province = value;
    expect(wrapper.vm.province).toBe(value);
    expect(wrapper.vm.errors.province).toBe(false);
  });

  test('Change "province" invalid value', () => {
    const wrapper = factory();
    const provinces = wrapper.vm.sortProvinceArray(wrapper.vm.campaignCost, wrapper.vm.currentAge);
    const value = "foo";

    expect(wrapper.vm.province).toBe(provinces[Object.keys(provinces)[0]]);
    wrapper.vm.province = value;
    expect(wrapper.vm.province).toBe(value);
    expect(wrapper.vm.errors.province).toBe(true);
  });

  test('Call "switchConquired"', () => {
    const wrapper = factory();
    const provinces = wrapper.vm.sortProvinceArray(wrapper.vm.campaignCost, wrapper.vm.currentAge);
    const index = 0;
    const value = true;
    wrapper.vm.province = provinces[Object.keys(provinces)[1]];

    expect(wrapper.vm.sectorConquired[index]).toBe(false);
    wrapper.vm.switchConquired(index, value);
    expect(wrapper.vm.sectorConquired[index]).toBe(value);
  });

  test('Call "compute" with invalid age', () => {
    const wrapper = factory();
    wrapper.vm.currentAge = ages.VirtualFuture.key;
    const provinces = wrapper.vm.sortProvinceArray(wrapper.vm.campaignCost, wrapper.vm.currentAge);
    const result = {
      good: { VirtualFuture: { cryptocash: 445, data_crystals: 270, golden_rice: 605, nanites: 565, tea_silk: 305 } },
      goodsColumnsData: [
        { age: "VirtualFuture", displayName: "Cryptocash", key: "cryptocash" },
        { age: "VirtualFuture", displayName: "Data Crystals", key: "data_crystals" },
        { age: "VirtualFuture", displayName: "Golden Rice", key: "golden_rice" },
        { age: "VirtualFuture", displayName: "Nanites", key: "nanites" },
        { age: "VirtualFuture", displayName: "Tea Silk", key: "tea_silk" }
      ],
      nbColumns: 7,
      specialGoods: { orichalcum: 150, promethium: 145 },
      specialGoodsColumnsData: [
        { displayName: "Promethium", key: "promethium" },
        { displayName: "Orichalcum", key: "orichalcum" }
      ]
    };

    wrapper.vm.province = provinces[Object.keys(provinces)[1]];
    wrapper.vm.compute();
    wrapper.vm.currentAge = "foo";
    wrapper.vm.compute();
    expect(wrapper.vm.result).toEqual(result);
  });
});
