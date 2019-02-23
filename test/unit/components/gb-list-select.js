import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/gb-list-select/GbListSelect";
import { getView } from "../localVue";

const defaultGb = "Observatory";

const factory = () => {
  const { localVue, store } = getView();
  return shallowMount(Component, {
    propsData: {
      current: defaultGb
    },
    localVue: localVue,
    store: store
  });
};

describe("GbListSelect", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Change "gbList" value', () => {
    const wrapper = factory();
    const newGb = "Statue_of_Zeus";
    expect(wrapper.vm.gbList).toBe(defaultGb);
    wrapper.vm.gbList = newGb;
    expect(wrapper.vm.gbList).toBe(newGb);
    expect(wrapper.emitted().change).toBeTruthy();
    expect(wrapper.emitted().change[0]).toEqual([newGb]);
  });
});
