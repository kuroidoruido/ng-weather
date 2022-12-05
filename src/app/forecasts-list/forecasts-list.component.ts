import { Component } from "@angular/core";
import { WeatherService } from "../weather.service";
import { ActivatedRoute } from "@angular/router";
import { map, Observable, switchMap } from "rxjs";

@Component({
  selector: "app-forecasts-list",
  templateUrl: "./forecasts-list.component.html",
  styleUrls: ["./forecasts-list.component.css"],
})
export class ForecastsListComponent {
  forecast$: Observable<any>;

  constructor(public weatherService: WeatherService, route: ActivatedRoute) {
    this.forecast$ = route.params.pipe(
      map((params) => params.zipcode),
      switchMap((zipcode) => weatherService.getForecast(zipcode))
    );
  }
}
