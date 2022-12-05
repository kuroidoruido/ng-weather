import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { ThreeStateButtonModule } from "./three-state-button.module";

describe("ThreeStateButtonDirective", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ThreeStateButtonModule],
      declarations: [MyThreeStateButtonComponent],
    });
  });
  it("should be in 'idle' state by default", () => {
    const fixture = TestBed.createComponent(MyThreeStateButtonComponent);
    fixture.detectChanges();
    const component: HTMLElement = fixture.nativeElement;
    const button: HTMLButtonElement = component.querySelector("button");
    expect(button.innerText).toEqual("Save");
    expect(button.disabled).toBeFalse();
  });
  it("should display correctly 'working' state", () => {
    const fixture = TestBed.createComponent(MyThreeStateButtonComponent);
    fixture.componentInstance.buttonState = "WORKING";
    fixture.detectChanges();
    const component: HTMLElement = fixture.nativeElement;
    const button: HTMLButtonElement = component.querySelector("button");
    expect(button.innerText).toEqual("Saving...");
    expect(button.disabled).toBeTrue();
  });
  it("should display correctly 'done' state", () => {
    const fixture = TestBed.createComponent(MyThreeStateButtonComponent);
    fixture.componentInstance.buttonState = "DONE";
    fixture.detectChanges();
    const component: HTMLElement = fixture.nativeElement;
    const button: HTMLButtonElement = component.querySelector("button");
    expect(button.innerText).toEqual("Saved");
    expect(button.disabled).toBeTrue();
  });
  it("should reset 'done' state after 3s by default", (done) => {
    const fixture = TestBed.createComponent(MyThreeStateButtonComponent);
    fixture.componentInstance.buttonState = "DONE";
    fixture.componentInstance.resetAfter = undefined;
    fixture.detectChanges();
    const component: HTMLElement = fixture.nativeElement;
    const button: HTMLButtonElement = component.querySelector("button");
    expect(button.innerText).toEqual("Saved");
    expect(button.disabled).toBeTrue();
    setTimeout(() => {
      fixture.detectChanges();
      expect(button.innerText).toEqual("Save");
      expect(button.disabled).toBeFalse();
      done();
    }, 3_000);
  });
  it("should reset 'done' state after specified timeout", (done) => {
    const fixture = TestBed.createComponent(MyThreeStateButtonComponent);
    fixture.componentInstance.buttonState = "DONE";
    fixture.detectChanges();
    const component: HTMLElement = fixture.nativeElement;
    const button: HTMLButtonElement = component.querySelector("button");
    expect(button.innerText).toEqual("Saved");
    expect(button.disabled).toBeTrue();
    setTimeout(() => {
      fixture.detectChanges();
      expect(button.innerText).toEqual("Save");
      expect(button.disabled).toBeFalse();
      done();
    }, 501);
  });
});

/**
 * We create a basic component that use the ThreeStateButtonDirective to test it
 */
@Component({
  selector: "my-three-state-button",
  template: `
    <button
      appThreeStateButton
      [(state)]="buttonState"
      [resetAfter]="resetAfter"
    >
      <ng-template appThreeStateButtonIdle> Save </ng-template>
      <ng-template appThreeStateButtonWorking> Saving... </ng-template>
      <ng-template appThreeStateButtonDone> Saved </ng-template>
    </button>
  `,
})
class MyThreeStateButtonComponent {
  public buttonState = "IDLE";
  public resetAfter = 500;
}
