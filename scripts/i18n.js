// Get locales (and common)
import common from "../locales/common.json";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import de from "../locales/de.json";
import ru from "../locales/ru.json";
import nl from "../locales/nl.json";
import hu from "../locales/hu.json";
import pl from "../locales/pl.json";
import sv from "../locales/sv.json";
import pt from "../locales/pt.json";
import es from "../locales/es.json";
import sk from "../locales/sk.json";
import tr from "../locales/tr.json";
import it from "../locales/it.json";
import cs from "../locales/cs.json";
import da from "../locales/cs.json";

// Requires al packages
import hideI18next from "i18next";
export const i18next = hideI18next;

import { defaultLocale, numeral, numeralSpecialLocales, supportedLocales } from "./locales";

// Constant used
const languageList = ["common"].concat(supportedLocales);
const resources = { common, en, fr, de, ru, nl, hu, pl, sv, pt, es, sk, tr, it, cs, da };

export function initializeI18next() {
  hideI18next.init({
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
}

initializeI18next();
