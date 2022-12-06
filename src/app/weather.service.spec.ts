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
      const locations = [{ zipcode: "00501", country: "us" }];
      const weatherService = TestBed.inject(WeatherService);
      const httpTestingController = TestBed.inject(HttpTestingController);
      weatherService.setLocations(locations);

      httpTestingController.expectNone(
        `${WeatherService.URL}/weather?zip=${locations[0].zipcode},${locations[0].country}&units=imperial&APPID=${WeatherService.APPID}`
      );
      httpTestingController.verify();
      // avoid jasmine warning
      expect(true).toBeTrue();
    });

    it("should make one request for one location", () => {
      const locations = [{ zipcode: "00501", country: "us" }];
      const weatherService = TestBed.inject(WeatherService);
      const httpTestingController = TestBed.inject(HttpTestingController);
      weatherService.setLocations(locations);

      weatherService.getCurrentConditions().subscribe((conditions) => {
        expect(conditions).toEqual([
          { location: locations[0], data: { name: "Holtsville" } as any },
        ]);
      });

      const req = httpTestingController.expectOne(
        `${WeatherService.URL}/weather?zip=${locations[0].zipcode},${locations[0].country}&units=imperial&APPID=${WeatherService.APPID}`
      );

      req.flush({ name: "Holtsville" });
      httpTestingController.verify();
    });

    it("should make one request by location", () => {
      const locations = [
        { zipcode: "00501", country: "us" },
        { zipcode: "2024", country: "au" },
      ];
      const weatherService = TestBed.inject(WeatherService);
      const httpTestingController = TestBed.inject(HttpTestingController);
      weatherService.setLocations(locations);

      weatherService.getCurrentConditions().subscribe((conditions) => {
        expect(conditions).toEqual([
          { location: locations[0], data: { name: "Holtsville" } as any },
          { location: locations[1], data: { name: "Waverley" } as any },
        ]);
      });

      const req1 = httpTestingController.expectOne(
        `${WeatherService.URL}/weather?zip=${locations[0].zipcode},${locations[0].country}&units=imperial&APPID=${WeatherService.APPID}`
      );
      req1.flush({ name: "Holtsville" });

      const req2 = httpTestingController.expectOne(
        `${WeatherService.URL}/weather?zip=${locations[1].zipcode},${locations[1].country}&units=imperial&APPID=${WeatherService.APPID}`
      );
      req2.flush({ name: "Waverley" });

      httpTestingController.verify();
    });

    it("should emit updated data every 30s until unsubscribe", () => {
      const testScheduler = createTestScheduler();
      const locations = [{ zipcode: "00501", country: "us" }];
      const HttpClientMock = {
        get: jasmine
          .createSpy("get")
          .and.returnValue(of({ name: "Holtsville" })),
      };
      const weatherService = TestBed.overrideProvider(HttpClient, {
        useValue: HttpClientMock,
      }).inject(WeatherService);
      weatherService.setLocations(locations);

      testScheduler.run(({ expectObservable }) => {
        const currentConditions$ = weatherService.getCurrentConditions(2_001);
        const sub = "     6s !";
        const expected = "a 2s a 2s a";
        expectObservable(currentConditions$, sub).toBe(expected, {
          a: [{ location: locations[0], data: { name: "Holtsville" } }],
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
