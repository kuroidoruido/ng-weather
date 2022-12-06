import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InputAutocompleteComponent } from "./input-autocomplete.component";

describe("InputAutocompleteComponent", () => {
  let component: InputAutocompleteComponent<FakeItem>;
  let fixture: ComponentFixture<InputAutocompleteComponent<FakeItem>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAutocompleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent<InputAutocompleteComponent<FakeItem>>(
      InputAutocompleteComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should display just an input by default", () => {
    const componentElement: HTMLElement = fixture.nativeElement;
    const input = componentElement.querySelector("input");
    const menu: HTMLDivElement =
      componentElement.querySelector(".dropdown-menu");
    expect(input).toBeVisible();
    expect(menu).toBeHidden();
  });

  it("should set specified input placeholder", () => {
    component.placeholder = "Enter fake";
    fixture.detectChanges();
    const componentElement: HTMLElement = fixture.nativeElement;
    const input = componentElement.querySelector("input");
    expect(input.placeholder).toEqual("Enter fake");
  });

  it("should display the menu when active the input", () => {
    const componentElement: HTMLElement = fixture.nativeElement;
    const input = componentElement.querySelector("input");
    input.click();
    fixture.detectChanges();
    const menu: HTMLDivElement =
      componentElement.querySelector(".dropdown-menu");
    expect(input).toBeVisible();
    expect(menu).toBeVisible();
  });

  it("should display the first 5 item of the list by default", () => {
    component.items = FAKE_ITEMS;
    const componentElement: HTMLElement = fixture.nativeElement;
    const input = componentElement.querySelector("input");
    input.click();
    fixture.detectChanges();
    const menu: HTMLDivElement =
      componentElement.querySelector(".dropdown-menu");
    expect(input).toBeVisible();
    expect(menu).toBeVisible();
    const menuItems = Array.from(menu.querySelectorAll("li"));
    expect(menuItems).toHaveSize(5);
  });

  it("should display items with original order", () => {
    component.items = FAKE_ITEMS;
    const componentElement: HTMLElement = fixture.nativeElement;
    const input = componentElement.querySelector("input");
    input.click();
    fixture.detectChanges();
    const menu: HTMLDivElement =
      componentElement.querySelector(".dropdown-menu");
    expect(input).toBeVisible();
    expect(menu).toBeVisible();
    const menuItems = Array.from(menu.querySelectorAll("li"));
    expect(menuItems).toHaveSize(5);
    expect(menuItems[0].innerText).toEqual("one");
    expect(menuItems[1].innerText).toEqual("three");
    expect(menuItems[2].innerText).toEqual("two");
    expect(menuItems[3].innerText).toEqual("four");
    expect(menuItems[4].innerText).toEqual("five");
  });

  it("should display the specified item count", () => {
    component.items = FAKE_ITEMS;
    component.maxItemCountShown = 3;
    const componentElement: HTMLElement = fixture.nativeElement;
    const input = componentElement.querySelector("input");
    input.click();
    fixture.detectChanges();
    const menu: HTMLDivElement =
      componentElement.querySelector(".dropdown-menu");
    expect(input).toBeVisible();
    expect(menu).toBeVisible();
    const menuItems = Array.from(menu.querySelectorAll("li"));
    expect(menuItems).toHaveSize(3);
  });

  it("should filter dropdown list on every filter update", () => {
    component.items = FAKE_ITEMS;
    const componentElement: HTMLElement = fixture.nativeElement;
    const input = componentElement.querySelector("input");
    input.click();
    fixture.detectChanges();
    const menu: HTMLDivElement =
      componentElement.querySelector(".dropdown-menu");
    expect(input).toBeVisible();
    expect(menu).toBeVisible();
    const menuItems = Array.from(menu.querySelectorAll("li")).map(
      (li) => li.innerText
    );
    expect(menuItems).toEqual(["one", "three", "two", "four", "five"]);
    component.filter = "f";
    fixture.detectChanges();
    const menuItemsF = Array.from(menu.querySelectorAll("li")).map(
      (li) => li.innerText
    );
    expect(menuItemsF).toEqual(["four", "five"]);
    component.filter = "fi";
    fixture.detectChanges();
    const menuItemsFi = Array.from(menu.querySelectorAll("li")).map(
      (li) => li.innerText
    );
    expect(menuItemsFi).toEqual(["five"]);
  });

  it("should filtered items shoud have an highlight with the filter", () => {
    component.items = FAKE_ITEMS;
    const componentElement: HTMLElement = fixture.nativeElement;
    const input = componentElement.querySelector("input");
    input.click();
    fixture.detectChanges();
    const menu: HTMLDivElement =
      componentElement.querySelector(".dropdown-menu");
    expect(input).toBeVisible();
    expect(menu).toBeVisible();
    component.filter = "fi";
    fixture.detectChanges();
    const menuItem = menu.querySelector("li").querySelector("a");
    expect(menuItem.innerHTML).toEqual("<strong>fi</strong>ve");
  });

  it("should filter with case insensitive filter", () => {
    component.items = FAKE_ITEMS;
    const componentElement: HTMLElement = fixture.nativeElement;
    const input = componentElement.querySelector("input");
    input.click();
    fixture.detectChanges();
    const menu: HTMLDivElement =
      componentElement.querySelector(".dropdown-menu");
    expect(input).toBeVisible();
    expect(menu).toBeVisible();
    component.filter = "FI";
    fixture.detectChanges();
    const menuItem = menu.querySelector("li").querySelector("a");
    expect(menuItem.innerHTML).toEqual("<strong>fi</strong>ve");
  });

  it("should filter with case insensitive items", () => {
    component.items = FAKE_ITEMS;
    const componentElement: HTMLElement = fixture.nativeElement;
    const input = componentElement.querySelector("input");
    input.click();
    fixture.detectChanges();
    const menu: HTMLDivElement =
      componentElement.querySelector(".dropdown-menu");
    expect(input).toBeVisible();
    expect(menu).toBeVisible();
    component.filter = "ten";
    fixture.detectChanges();
    const menuItem = menu.querySelector("li").querySelector("a");
    expect(menuItem.innerHTML).toEqual("<strong>TEN</strong>");
  });
});

type FakeItem = { label: string; extra: string };

const FAKE_ITEMS: FakeItem[] = [
  { label: "one", extra: "one" },
  { label: "three", extra: "three" },
  { label: "two", extra: "two" },
  { label: "four", extra: "four" },
  { label: "five", extra: "five" },
  { label: "six", extra: "six" },
  { label: "seven", extra: "seven" },
  { label: "eight", extra: "eight" },
  { label: "nine", extra: "nine" },
  { label: "TEN", extra: "ten" },
];

const customMatchers = {
  toBeVisible: function () {
    return {
      compare: function (actual) {
        return { pass: actual.offsetHeight > 0 };
      },
    };
  },
  toBeHidden: function () {
    return {
      compare: function (actual) {
        return { pass: actual.offsetHeight === 0 };
      },
    };
  },
};
declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeVisible(): boolean;
      toBeHidden(): boolean;
    }
  }
}

beforeAll(() => {
  jasmine.addMatchers(customMatchers);
});
