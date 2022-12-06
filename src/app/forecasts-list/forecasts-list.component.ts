import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, Observable, switchMap } from "rxjs";
import { Location, WeatherService } from "../weather.service";

@Component({
  selector: "app-forecasts-list",
  templateUrl: "./forecasts-list.component.html",
  styleUrls: ["./forecasts-list.component.css"],
})
export class ForecastsListComponent {
  forecast$: Observable<any>;

  constructor(public weatherService: WeatherService, route: ActivatedRoute) {
    this.forecast$ = route.params.pipe(
      map((params) => params.location.split(",")),
      map(([zipcode, country]): Location => ({ zipcode, country })),
      switchMap((location) => weatherService.getForecast(location))
    );
  }
}
