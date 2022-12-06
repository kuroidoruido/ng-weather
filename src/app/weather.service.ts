import { Injectable } from "@angular/core";
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  filter,
  first,
  map,
  Observable,
  of,
  repeat,
  share,
  switchMap,
} from "rxjs";

import { HttpClient } from "@angular/common/http";

@Injectable()
export class WeatherService {
  static URL = "http://api.openweathermap.org/data/2.5";
  static APPID = "5a4b2d457ecbef9eb2a71e480b947604";
  static ICON_URL =
    "https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/";
  private locations$ = new BehaviorSubject<Location[]>([]);

  constructor(private http: HttpClient) {}

  setLocations(locations: Location[]): Observable<WeatherCondition[]> {
    this.locations$.next(locations);
    return this.getCurrentConditions().pipe(
      filter((conditions) => conditions.length === locations.length),
      first()
    );
  }

  private getCurrentCondition(
    location: Location
  ): Observable<WeatherCondition> {
    // Here we make a request to get the curretn conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http
      .get<ApiWeatherCondition>(
        `${WeatherService.URL}/weather?zip=${location.zipcode},${location.country}&units=imperial&APPID=${WeatherService.APPID}`
      )
      .pipe(
        map((data) => ({ location, data: data })),
        catchError((error) => of({ location, error: error }))
      );
  }

  getCurrentConditions(
    autoRefreshDelayInMillis = 30_000
  ): Observable<WeatherCondition[]> {
    return this.locations$.pipe(
      switchMap((locations) =>
        combineLatest(
          locations.map((loc) => this.getCurrentCondition(loc))
        ).pipe(first(), repeat({ delay: autoRefreshDelayInMillis }), share())
      )
    );
  }

  getForecast(location: Location): Observable<any> {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get(
      `${WeatherService.URL}/forecast/daily?zip=${location.zipcode},${location.country}&units=imperial&cnt=5&APPID=${WeatherService.APPID}`
    );
  }

  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) {
      return WeatherService.ICON_URL + "art_storm.png";
    } else if (id >= 501 && id <= 511) {
      return WeatherService.ICON_URL + "art_rain.png";
    } else if (id === 500 || (id >= 520 && id <= 531)) {
      return WeatherService.ICON_URL + "art_light_rain.png";
    } else if (id >= 600 && id <= 622) {
      return WeatherService.ICON_URL + "art_snow.png";
    } else if (id >= 801 && id <= 804) {
      return WeatherService.ICON_URL + "art_clouds.png";
    } else if (id === 741 || id === 761) {
      return WeatherService.ICON_URL + "art_fog.png";
    } else {
      return WeatherService.ICON_URL + "art_clear.png";
    }
  }
}

export interface Location {
  zipcode: string;
  country: string;
}

export interface WeatherCondition {
  location: Location;
  data?: ApiWeatherCondition;
  error?: any;
}

interface ApiWeatherCondition {
  coord: { lon: number; lat: number };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number; gust: number };
  rain?: { "1h": number };
  snow?: { "1h": number };
  clouds?: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
