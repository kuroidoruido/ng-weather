import { Component } from "@angular/core";
import { WeatherService } from "../weather.service";
import { Router } from "@angular/router";
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

  showForecast(zipcode: string) {
    this.router.navigate(["/forecast", zipcode]);
  }

  removeLocation(event: MouseEvent, zipcode: string) {
    event.stopPropagation();
    this.locationService.removeLocation(zipcode);
  }
}
