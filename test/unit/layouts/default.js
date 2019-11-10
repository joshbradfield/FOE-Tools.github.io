import { config, shallowMount } from "@vue/test-utils";
import Component from "../../../layouts/_default/Default";
import { getView } from "../localVue";

const factory = (mocks = {}) => {
  const { localVue, store } = getView();
  return shallowMount(Component, {
    localVue: localVue,
    store: store,
    stubs: ["nuxt"],
    mocks: {
      $route: {
        path: "foo"
      },
      ...mocks
    }
  });
};

describe("Default", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Initialize with cookie disclaimer accepted and Day/Night auto", () => {
    const wrapper = factory({
      $cookies: {
        get: jest.fn().mockImplementation(key => {
          switch (key) {
            case "cookieDisclaimerDisplayed":
              return true;
            case "dayNightMode":
              return "auto";
          }
          return undefined;
        }),
        set: config.mocks["$cookies"].set
      }
    });
    expect(wrapper.vm.cookieDisclaimerUndisplayed).toBe(false);
    expect(wrapper.vm.dayNightMode).toBe("auto");
  });

  test('Change "lang" value', async () => {
    const wrapper = factory();
    const value = 1000;
    expect(wrapper.vm.$formatNumber(value)).toBe("1,000");

    await wrapper.vm.i18n.i18next.changeLanguage("fr");
    wrapper.vm.$store.state.locale = "fr";

    expect(wrapper.vm.$formatNumber(value)).toBe("1 000");
  });

  test("Change route", () => {
    const wrapper = factory();
    wrapper.vm.burgerMenuVisible = true;

    wrapper.vm.$route.path = "bar";
    expect(wrapper.vm.burgerMenuVisible).toBe(false);
  });

  test('Call "confirmInfoCookie"', () => {
    const wrapper = factory();
    expect(wrapper.vm.cookieDisclaimerUndisplayed).toBe(true);
    wrapper.vm.confirmInfoCookie();
    expect(wrapper.vm.cookieDisclaimerUndisplayed).toBe(false);
  });

  test('Call "toggleMenu"', () => {
    const wrapper = factory();
    expect(wrapper.vm.burgerMenuVisible).toBe(false);
    wrapper.vm.toggleMenu();
    expect(wrapper.vm.burgerMenuVisible).toBe(true);
  });

  test('Call "updateDayNightCookie"', () => {
    const wrapper = factory({ ...config.mocks["$cookies"] });

    wrapper.vm.updateDayNightCookie("auto");
    expect(config.mocks.$cookies.set.mock.calls.length).toBe(2);
    expect(config.mocks.$cookies.set.mock.calls[1][0]).toEqual("dayNightMode");
    expect(config.mocks.$cookies.set.mock.calls[1][1]).toEqual("auto");
    expect(config.mocks.$cookies.set.mock.calls[1][2].path).toEqual("/");
    expect(config.mocks.$cookies.set.mock.calls[1][2].expires).toBeTruthy();
  });
});
