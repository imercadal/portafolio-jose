import en from "./dictionaries/en";
import es from "./dictionaries/es";

export function getDictionary(locale: string) {
  return locale === "es" ? es : en;
}
