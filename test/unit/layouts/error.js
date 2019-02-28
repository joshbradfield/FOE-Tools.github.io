import { shallowMount } from "@vue/test-utils";
import Component from "../../../layouts/_error/Error";
import { getView } from "../localVue";

const factory = (props = {}) => {
  const { localVue, store } = getView();
  return shallowMount(Component, {
    propsData: {
      error: {
        statusCode: 404,
        message: "Not found"
      },
      ...props
    },
    localVue: localVue,
    store: store,
    stubs: ["nuxt"]
  });
};

describe("Error", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Initialize with unknown error code", () => {
    const wrapper = factory({
      error: {
        statusCode: 42,
        message: "Answer to the Ultimate Question of Life, the Universe, and Everything"
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Initialize with unknown error", () => {
    const wrapper = factory({
      error: {
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
