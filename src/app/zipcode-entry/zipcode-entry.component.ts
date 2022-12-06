import { Component } from "@angular/core";
import { ALL_COUNTRIES, Country } from "./countries.data";
import { ThreeStateButtonState } from "app/ui/three-state-button/three-state-button.directive";
import { LocationService } from "../location.service";

@Component({
  selector: "app-zipcode-entry",
  templateUrl: "./zipcode-entry.component.html",
})
export class ZipcodeEntryComponent {
  zipcode: string = "";
  country: Country;
  buttonState: ThreeStateButtonState = "IDLE";

  allCountries = ALL_COUNTRIES;

  constructor(private service: LocationService) {}

  addLocation() {
    this.buttonState = "WORKING";
    this.service
      .addLocation({ zipcode: this.zipcode, country: this.country.code })
      .subscribe({
        error: (error) => {
          console.error(error);
          this.buttonState = "DONE";
        },
        complete: () => {
          this.buttonState = "DONE";
        },
      });
  }
}
