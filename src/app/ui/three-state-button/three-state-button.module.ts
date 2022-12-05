import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ThreeStateButtonDirective } from "./three-state-button.directive";
import { ThreeStateButtonIdleDirective } from "./three-state-button-idle.directive";
import { ThreeStateButtonWorkingDirective } from "./three-state-button-working.directive";
import { ThreeStateButtonDoneDirective } from "./three-state-button-done.directive";

@NgModule({
  declarations: [
    ThreeStateButtonDirective,
    ThreeStateButtonIdleDirective,
    ThreeStateButtonWorkingDirective,
    ThreeStateButtonDoneDirective,
  ],
  imports: [CommonModule],
  exports: [
    ThreeStateButtonDirective,
    ThreeStateButtonIdleDirective,
    ThreeStateButtonWorkingDirective,
    ThreeStateButtonDoneDirective,
  ],
})
export class ThreeStateButtonModule {}
