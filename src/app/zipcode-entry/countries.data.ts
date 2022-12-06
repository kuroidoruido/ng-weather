import { countries } from "country-data";

export interface Country {
  label: string;
  code: string;
}

export const ALL_COUNTRIES: Country[] = countries.all.map((country) => ({
  label: country.name,
  code: country.alpha2.toLocaleLowerCase(),
}));
ALL_COUNTRIES.sort((a, b) => a.label.localeCompare(b.label));
