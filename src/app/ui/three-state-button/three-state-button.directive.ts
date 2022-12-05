import {
  AfterViewInit,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { isNotDefined } from "app/utils/fp";
import { ThreeStateButtonDoneDirective } from "./three-state-button-done.directive";
import { ThreeStateButtonIdleDirective } from "./three-state-button-idle.directive";
import { ThreeStateButtonWorkingDirective } from "./three-state-button-working.directive";

export type ThreeStateButtonState = "IDLE" | "WORKING" | "DONE";

/**
 * This directive allow you to create a button with 3 differents states.
 *
 * Basic example:
 * <button
 *     appThreeStateButton
 *     [(state)]="buttonState"
 *     [resetAfter]="resetAfter"
 *   >
 *     <ng-template appThreeStateButtonIdle> Save </ng-template>
 *     <ng-template appThreeStateButtonWorking> Saving... </ng-template>
 *     <ng-template appThreeStateButtonDone> Saved </ng-template>
 *   </button>
 *
 * On "WORKING" and "DONE" state, the button will automatically be disabled.
 *
 * You can place anything you want inside the different `ng-template`s.
 *
 * You can omit the resetAfter input, in this case the reset will occur after 3s.
 *
 * To change the visible state, you just have to change the value of the state input (here via changing buttonState).
 */
@Directive({
  selector: "button[appThreeStateButton]",
})
export class ThreeStateButtonDirective implements AfterViewInit, OnChanges {
  /**
   * Defay for resetting from "done" state to "idle" state in milliseconds
   */
  @Input()
  resetAfter: number = 3_000;

  /**
   * Possible values: "IDLE" | "WORKING" | "DONE"
   */
  @Input()
  state: ThreeStateButtonState;

  @Output()
  stateChange = new EventEmitter<ThreeStateButtonState>();

  @ContentChild(ThreeStateButtonIdleDirective)
  idleContent: ThreeStateButtonIdleDirective;

  @ContentChild(ThreeStateButtonWorkingDirective)
  workingContent: ThreeStateButtonWorkingDirective;

  @ContentChild(ThreeStateButtonDoneDirective)
  doneContent: ThreeStateButtonDoneDirective;

  constructor(private elementRef: ElementRef<HTMLButtonElement>) {}

  ngAfterViewInit(): void {
    // we do this only on ngAfterViewInit because contentchild are only
    // available here for the first time, so we cannot initialize before
    this.show(this.state);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      isNotDefined(this.idleContent) ||
      isNotDefined(this.workingContent) ||
      isNotDefined(this.doneContent)
    ) {
      // we not want to react to state change while sub directive instances are available
      return;
    }
    if (changes.state && changes.state.currentValue) {
      this.show(changes.state.currentValue);
    }
  }

  private show(state: ThreeStateButtonState) {
    switch (state) {
      case "IDLE": {
        this.elementRef.nativeElement.disabled = false;
        this.idleContent.show();
        this.workingContent.hide();
        this.doneContent.hide();
        break;
      }
      case "WORKING": {
        this.elementRef.nativeElement.disabled = true;
        this.idleContent.hide();
        this.workingContent.show();
        this.doneContent.hide();
        break;
      }
      case "DONE": {
        this.elementRef.nativeElement.disabled = true;
        this.idleContent.hide();
        this.workingContent.hide();
        this.doneContent.show();
        setTimeout(() => this.stateChange.emit("IDLE"), this.resetAfter);
        break;
      }
    }
  }
}
