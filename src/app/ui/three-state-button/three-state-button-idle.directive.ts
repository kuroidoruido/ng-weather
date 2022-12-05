import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";
import { BaseThreeStateButtonState } from "./base-three-state-button.directive";

@Directive({ selector: "[appThreeStateButtonIdle]" })
export class ThreeStateButtonIdleDirective extends BaseThreeStateButtonState {
  constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef) {
    super(templateRef, viewContainer);
  }
}
