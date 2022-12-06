import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { isDefinedAndNotEmpty, isNotDefinedOrEmpty } from "app/utils/fp";
import {
  BehaviorSubject,
  combineLatest,
  filter,
  map,
  Observable,
  share,
} from "rxjs";

@Component({
  selector: "app-input-autocomplete",
  templateUrl: "./input-autocomplete.component.html",
  styleUrls: ["./input-autocomplete.component.css"],
  imports: [CommonModule],
  standalone: true,
})
export class InputAutocompleteComponent<T extends { label: string }> {
  uniqueId = Math.floor(Math.random() * 1_000_000);
  private items$ = new BehaviorSubject<T[]>([]);

  @Input()
  set items(newItems: T[]) {
    this.items$.next(newItems);
  }

  @Input()
  maxItemCountShown: number = 5;

  @Input()
  placeholder: string = "";

  @Output()
  selected = new EventEmitter<T>();

  private _filter: string = "";

  get filter() {
    return this._filter;
  }

  set filter(newFilter: string) {
    this._filter = newFilter;
    this.filter$.next(newFilter);
    this.isExpanded = true;
  }

  private _isExpanded = false;
  get isExpanded() {
    return this._isExpanded;
  }
  set isExpanded(newIsExpanded: boolean) {
    this._isExpanded = newIsExpanded;
    this.isExpanded$.next(newIsExpanded);
  }
  private isExpanded$ = new BehaviorSubject(this.isExpanded);

  private filter$ = new BehaviorSubject<string>("");

  // here we add some metadata to each item to avoid recompute them continously
  private itemsWithMetadata$: Observable<WithMetadata<T>[]> = this.items$.pipe(
    map((items) =>
      items.map(
        (item): WithMetadata<T> => ({
          ...item,
          _formattedLabel: item.label,
          _lowercaseLabel: item.label.toLocaleLowerCase(),
        })
      )
    ),
    share()
  );
  filteredItems$: Observable<WithMetadata<T>[]> = combineLatest([
    this.itemsWithMetadata$,
    this.isExpanded$,
    this.filter$.pipe(map((filter) => filter.toLocaleLowerCase())),
  ]).pipe(
    // disable filtering while the dropdown is closed (avoid useless computation and rendering)
    filter(([, isExpanded]) => isExpanded),
    map(([items, , filter]) => {
      if (isDefinedAndNotEmpty(filter)) {
        return items
          .filter((item) => item._lowercaseLabel.includes(filter))
          .slice(0, this.maxItemCountShown)
          .map(this.highlightFilterMatch(filter));
      } else {
        return items
          .slice(0, this.maxItemCountShown)
          .map(this.highlightFilterMatch(filter));
      }
    })
  );

  selectItem(item: WithMetadata<T>) {
    this.filter = item.label;
    const originalItem = { ...item };
    delete originalItem._formattedLabel;
    delete originalItem._lowercaseLabel;
    this.selected.emit(originalItem);
    this.isExpanded = false;
  }

  private highlightFilterMatch(
    filter: string
  ): (item: WithMetadata<T>) => WithMetadata<T> {
    if (isNotDefinedOrEmpty(filter)) {
      return (item) => item;
    }
    return (item) => ({
      ...item,
      _formattedLabel: item.label.replace(
        new RegExp(`(${filter})`, "gi"),
        "<strong>$1</strong>"
      ),
    });
  }
}

type WithMetadata<T> = T & { _formattedLabel: string; _lowercaseLabel: string };
