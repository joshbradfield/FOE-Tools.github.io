import { shallowMount } from "@vue/test-utils";
import Component from "../../layouts/_default/Default";
import { getView } from "./localVue";
import Errors from "../../scripts/errors";

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

const i18nPrefix = "routes.secure_position.";

describe("Store", () => {
  test('Call "SET_HERO"', () => {
    const wrapper = factory();
    expect(wrapper.vm.$store.state.hero).toEqual({
      title: "components.site_layout.hero.title",
      subtitle: "components.site_layout.hero.slogan_html"
    });
    wrapper.vm.$store.commit("SET_HERO", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle"
    });
    expect(wrapper.vm.$store.state.hero).toEqual({
      title: "routes.secure_position.hero.title",
      subtitle: "routes.secure_position.hero.subtitle"
    });
  });

  test('Call "RESTORE_HERO"', () => {
    const wrapper = factory();
    expect(wrapper.vm.$store.state.hero).toEqual({
      title: "components.site_layout.hero.title",
      subtitle: "components.site_layout.hero.slogan_html"
    });
    wrapper.vm.$store.commit("SET_HERO", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle"
    });
    expect(wrapper.vm.$store.state.hero).toEqual({
      title: "routes.secure_position.hero.title",
      subtitle: "routes.secure_position.hero.subtitle"
    });
    wrapper.vm.$store.commit("RESTORE_HERO");
    expect(wrapper.vm.$store.state.hero).toEqual({
      title: "components.site_layout.hero.title",
      subtitle: "components.site_layout.hero.slogan_html"
    });
  });

  test('Call "getUrlQuery"', () => {
    const wrapper = factory();
    wrapper.vm.$store.commit("ADD_URL_QUERY", { key: "foo", value: "bar" });
    expect(wrapper.vm.$store.getters.getUrlQuery()).toEqual({ foo: "bar" });
  });

  test('Throw error when call "ADD_URL_QUERY" with invalid key', () => {
    const wrapper = factory();
    wrapper.vm.$store.commit("ADD_URL_QUERY", { key: "foo", value: "bar" });
    expect(() => wrapper.vm.$store.commit("ADD_URL_QUERY", { key: "foo", value: "bar" })).toThrow(
      Errors.keyAlreadyExistsInUrlQueryException("foo")
    );
  });

  test('Throw error when call "ADD_URL_QUERY" with invalid key in namespace', () => {
    const wrapper = factory();
    wrapper.vm.$store.commit("ADD_URL_QUERY", { key: "foo", value: "bar" });
    expect(() => wrapper.vm.$store.commit("ADD_URL_QUERY", { key: "foo", value: "bar", ns: "baz" })).toThrow(
      Errors.keyAlreadyExistsInUrlQueryOrUrlQueryNamespaceException("foo")
    );
  });

  test('Throw error when call "UPDATE_URL_QUERY" with invalid namespace', () => {
    const wrapper = factory();
    wrapper.vm.$store.commit("ADD_URL_QUERY", { key: "foo", value: "bar" });
    expect(() => wrapper.vm.$store.commit("UPDATE_URL_QUERY", { key: "foo", value: "bar", ns: "baz" })).toThrow(
      Errors.namespaceNotFoundException("baz")
    );
  });

  test('Call "IS_DARK_THEME"', () => {
    const wrapper = factory();
    expect(wrapper.vm.$store.state.isDarkTheme).toEqual(false);
    wrapper.vm.$store.commit("IS_DARK_THEME", true);
    expect(wrapper.vm.$store.state.isDarkTheme).toEqual(true);
  });
});
