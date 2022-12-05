import { Component } from "@angular/core";
import { ThreeStateButtonState } from "app/ui/three-state-button/three-state-button.directive";
import { LocationService } from "../location.service";

@Component({
  selector: "app-zipcode-entry",
  templateUrl: "./zipcode-entry.component.html",
})
export class ZipcodeEntryComponent {
  buttonState: ThreeStateButtonState = "IDLE";

  constructor(private service: LocationService) {}

  addLocation(zipcode: string) {
    this.buttonState = "WORKING";
    this.service.addLocation(zipcode).subscribe({
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
