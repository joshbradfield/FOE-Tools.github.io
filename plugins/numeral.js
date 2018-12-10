import numeral from "numeral";
import { numeralSpecialLocales } from "~/scripts/i18n";

const VueNumeral = {
  install(Vue) {
    /**
     * This function format a number for a specific locale
     * @param value {number} value to format
     * @param lng {string} (Optional) Code of the locale
     * @return {string} Return formated string
     */
    Vue.prototype.$formatNumber = (value, lng) => {
      if (lng) {
        if (numeralSpecialLocales[lng]) {
          numeral.locale(numeralSpecialLocales[lng]);
        } else {
          numeral.locale(lng);
        }
      }
      return numeral(value).format("0,0");
    };

    /**
     * Get or set current locale used in numeral
     * @param lng {string} (Optional, default null) If not null, this will set the current locale
     * @return {string} Return the current locale
     */
    Vue.prototype.$formatNumberLocale = (lng = null) => {
      if (lng === null) {
        return numeral.locale();
      }
      if (numeralSpecialLocales[lng]) {
        numeral.locale(numeralSpecialLocales[lng]);
      } else {
        numeral.locale(lng);
      }
    };
  }
};

export default VueNumeral;
