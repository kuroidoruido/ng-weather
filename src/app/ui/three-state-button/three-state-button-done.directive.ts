import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";
import { BaseThreeStateButtonState } from "./base-three-state-button.directive";

@Directive({ selector: "[appThreeStateButtonDone]" })
export class ThreeStateButtonDoneDirective extends BaseThreeStateButtonState {
  constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef) {
    super(templateRef, viewContainer);
  }
}
