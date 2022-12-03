import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestScheduler } from "rxjs/testing";
import { of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { addMatchers, cold, hot, initTestScheduler } from "jasmine-marbles";

import { WeatherService } from "./weather.service";

describe(WeatherService.name, () => {
  describe(WeatherService.prototype.getCurrentConditions.name, () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [WeatherService],
      });
      addMatchers();
      initTestScheduler();
    });

    it("should make no request while no one subscribe to getCurrentConditions()", () => {
      const zipcode = "00501";
      const weatherService = TestBed.inject(WeatherService);
      const httpTestingController = TestBed.inject(HttpTestingController);
      weatherService.setLocations([zipcode]);

      httpTestingController.expectNone(
        `${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`
      );
      httpTestingController.verify();
      // avoid jasmine warning
      expect(true).toBeTrue();
    });

    it("should make one request for one location", () => {
      const zipcodes = ["00501"];
      const weatherService = TestBed.inject(WeatherService);
      const httpTestingController = TestBed.inject(HttpTestingController);
      weatherService.setLocations(zipcodes);

      weatherService.getCurrentConditions().subscribe((conditions) => {
        expect(conditions).toEqual([
          { zip: zipcodes[0], data: { name: "Holtsville" } as any },
        ]);
      });

      const req = httpTestingController.expectOne(
        `${WeatherService.URL}/weather?zip=${zipcodes[0]},us&units=imperial&APPID=${WeatherService.APPID}`
      );

      req.flush({ name: "Holtsville" });
      httpTestingController.verify();
    });

    it("should make one request by location", () => {
      const zipcodes = ["00501", "94112"];
      const weatherService = TestBed.inject(WeatherService);
      const httpTestingController = TestBed.inject(HttpTestingController);
      weatherService.setLocations(zipcodes);

      weatherService.getCurrentConditions().subscribe((conditions) => {
        expect(conditions).toEqual([
          { zip: zipcodes[0], data: { name: "Holtsville" } as any },
          { zip: zipcodes[1], data: { name: "San Francisco" } as any },
        ]);
      });

      const req1 = httpTestingController.expectOne(
        `${WeatherService.URL}/weather?zip=${zipcodes[0]},us&units=imperial&APPID=${WeatherService.APPID}`
      );
      req1.flush({ name: "Holtsville" });

      const req2 = httpTestingController.expectOne(
        `${WeatherService.URL}/weather?zip=${zipcodes[1]},us&units=imperial&APPID=${WeatherService.APPID}`
      );
      req2.flush({ name: "San Francisco" });

      httpTestingController.verify();
    });

    it("should emit updated data every 30s until unsubscribe", () => {
      const testScheduler = createTestScheduler();
      const zipcodes = ["00501"];
      const HttpClientMock = {
        get: jasmine
          .createSpy("get")
          .and.returnValue(of({ name: "Holtsville" })),
      };
      const weatherService = TestBed.overrideProvider(HttpClient, {
        useValue: HttpClientMock,
      }).inject(WeatherService);
      weatherService.setLocations(zipcodes);

      testScheduler.run(({ expectObservable }) => {
        const currentConditions$ = weatherService.getCurrentConditions(2_001);
        const sub = "     6s !";
        const expected = "a 2s a 2s a";
        expectObservable(currentConditions$, sub).toBe(expected, {
          a: [{ zip: zipcodes[0], data: { name: "Holtsville" } }],
        });
        setTimeout(() => {
          expect(HttpClientMock.get).toHaveBeenCalledTimes(3);
        }, 7_000);
      });
    });
  });
});

function createTestScheduler() {
  return new TestScheduler((actual: any, expected: any) => {
    expect(actual).toEqual(expected);
  });
}
