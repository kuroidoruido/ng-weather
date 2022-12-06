import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { isNotDefinedOrEmpty } from "./utils/fp";
import { Location, WeatherService } from "./weather.service";

export const LOCATIONS: string = "locations";

@Injectable()
export class LocationService {
  locations: Location[] = [];

  constructor(private weatherService: WeatherService) {
    let locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.locations = JSON.parse(locString);
    }
    this.weatherService.setLocations(this.locations);
  }

  addLocation(location: Location) {
    if (isNotDefinedOrEmpty(location.zipcode)) {
      return throwError(() => "Empty zipcode");
    }
    if (isNotDefinedOrEmpty(location.country)) {
      return throwError(() => "Empty country");
    }
    this.locations.push(location);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    return this.weatherService.setLocations(this.locations);
  }

  removeLocation(location: Location) {
    const oldLocations = this.locations;
    this.locations = this.locations.filter(
      (loc) =>
        loc.zipcode !== location.zipcode || loc.country !== location.country
    );
    if (this.locations.length !== oldLocations.length) {
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
      this.weatherService.setLocations(this.locations);
    }
  }
}
