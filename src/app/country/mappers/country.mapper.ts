import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-countries.interface";

export class CountryMapper {

  static mapRestCountryToCountry(
    restCountry: RESTCountry
  ): Country {

    return {

      cca2: restCountry.alpha2Code,

      flag: restCountry.flag,

      flagSvg: restCountry.flags.svg,

      name: restCountry.name,

      capital: restCountry.capital,

      population: restCountry.population,

      region: restCountry.region,

      subRegion: restCountry.subregion,

    };

  }

  static mapRestCountryArrayToCountryArray(
    countries: RESTCountry[]
  ): Country[] {

    return countries.map(country =>
      this.mapRestCountryToCountry(country)
    );

  }

}