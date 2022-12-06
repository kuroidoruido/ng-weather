import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Location, WeatherService } from "../weather.service";
import { LocationService } from "app/location.service";

@Component({
  selector: "app-current-conditions",
  templateUrl: "./current-conditions.component.html",
  styleUrls: ["./current-conditions.component.css"],
})
export class CurrentConditionsComponent {
  currentConditions$ = this.weatherService.getCurrentConditions();

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService,
    private router: Router
  ) {}

  showForecast(location: Location) {
    this.router.navigate([
      "/forecast",
      `${location.zipcode},${location.country}`,
    ]);
  }

  removeLocation(event: MouseEvent, location: Location) {
    event.stopPropagation();
    this.locationService.removeLocation(location);
  }
}
