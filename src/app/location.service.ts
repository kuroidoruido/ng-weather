import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { isNotDefinedOrEmpty } from "./utils/fp";
import { WeatherService } from "./weather.service";

export const LOCATIONS: string = "locations";

@Injectable()
export class LocationService {
  locations: string[] = [];

  constructor(private weatherService: WeatherService) {
    let locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.locations = JSON.parse(locString);
    }
    this.weatherService.setLocations(this.locations);
  }

  addLocation(zipcode: string) {
    if (isNotDefinedOrEmpty(zipcode)) {
      return throwError(() => "Empty zipcode");
    }
    this.locations.push(zipcode);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    return this.weatherService.setLocations(this.locations);
  }

  removeLocation(zipcode: string) {
    let index = this.locations.indexOf(zipcode);
    if (index !== -1) {
      this.locations.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
      this.weatherService.setLocations(this.locations);
    }
  }
}
