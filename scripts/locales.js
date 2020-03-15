export const defaultLocale = "en";

export const supportedLocales = [
  "en",
  "fr",
  "de",
  "ru",
  "nl",
  "hu",
  "pl",
  "sv",
  "pt",
  "es",
  "sk",
  "tr",
  "it",
  "cs",
  "da"
];

export const numeralSpecialLocales = {
  nl: "nl-nl",
  sv: "sv-se",
  pt: "pt-pt",
  da: "da-dk"
};

import hideNumeral from "numeral";
import "numeral/locales/fr";
import "numeral/locales/de";
import "numeral/locales/ru";
import "numeral/locales/nl-nl";
import "numeral/locales/hu";
import "numeral/locales/pl";
import "numeral/locales/pt-pt";
import "numeral/locales/es";
import "numeral/locales/sk";
import "numeral/locales/tr";
import "numeral/locales/it";
import "numeral/locales/cs";
import "numeral/locales/da-dk";
import * as numeralSvSe from "./numeral_custom_locals/sv-se";
numeralSvSe.init(hideNumeral);

export const numeral = hideNumeral;
