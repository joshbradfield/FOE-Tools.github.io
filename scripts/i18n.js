// Get locales (and common)
import common from "../locales/common.json";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import de from "../locales/de.json";
import ru from "../locales/ru.json";
import nl from "../locales/nl.json";
import hu from "../locales/hu.json";

// Requires al packages
export const i18next = require("i18next");
import numeral from "numeral";
import "numeral/locales/fr";
import "numeral/locales/de";
import "numeral/locales/ru";
import "numeral/locales/nl-nl";
import "numeral/locales/hu";

// Constant used
export const defaultLocale = "en";
export const supportedLocales = ["en", "fr", "de", "ru", "nl", "hu"];
const languageList = ["common"].concat(supportedLocales);
const resources = { common, en, fr, de, ru, nl, hu };

export const numeralSpecialLocales = {
  nl: "nl-nl"
};

i18next.init({
  lng: defaultLocale,
  debug: false,
  whitelist: languageList,
  ns: ["common", "translation"],
  fallbackLng: languageList,
  fallbackNS: ["common"],
  resources,
  interpolation: {
    format: function(value, format, lng) {
      if (format === "number") {
        if (numeralSpecialLocales[lng]) {
          numeral.locale(numeralSpecialLocales[lng]);
        } else {
          numeral.locale(lng);
        }
        return numeral(value).format("0,0");
      }
      return value;
    }
  }
});
