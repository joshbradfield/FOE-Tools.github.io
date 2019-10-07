import { config, shallowMount } from "@vue/test-utils";

import Component from "~/components/language-selector/LanguageSelector";
import { getView } from "../localVue";

const factory = () => {
  const { localVue, store, i18n } = getView();
  return shallowMount(Component, {
    localVue,
    store,
    i18n
  });
};

describe("LanguageSelector", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Change current lang", () => {
    const wrapper = factory();
    window.location.reload = jest.fn();

    expect(wrapper.vm.$store.state.locale).toBe("en");

    wrapper.vm.currentLang = "fr";

    expect(config.mocks.$cookies.set.mock.calls.length).toBe(1);
    expect(config.mocks.$cookies.set.mock.calls[0][0]).toEqual("locale");
    expect(config.mocks.$cookies.set.mock.calls[0][1]).toEqual("fr");
    expect(config.mocks.$cookies.set.mock.calls[0][2].path).toEqual("/");
    expect(config.mocks.$cookies.set.mock.calls[0][2].expires).toBeTruthy();

    expect(wrapper.vm.$store.state.locale).toBe("fr");
    expect(window.location.reload.mock.calls.length).toBe(1);
  });

  test('Call "getCurrentCountry" with a non special locale', () => {
    const wrapper = factory();
    window.location.reload = jest.fn();

    expect(wrapper.vm.getCurrentCountry("en")).toBe("en");
  });

  test('Call "getCurrentCountry" with a special locale', () => {
    const wrapper = factory();
    window.location.reload = jest.fn();

    expect(wrapper.vm.getCurrentCountry("sv")).toBe("se");
  });
});
