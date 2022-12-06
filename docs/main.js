"use strict";
(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 3088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
    constructor() {
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: "app-root",
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipcode-entry/zipcode-entry.component */ 7937);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.service */ 8056);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 8405);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather.service */ 7187);
/* harmony import */ var _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./current-conditions/current-conditions.component */ 5597);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ 6738);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ 4354);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _ui_three_state_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/three-state-button */ 1438);
/* harmony import */ var _ui_input_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/input-autocomplete */ 6298);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















let AppModule = class AppModule {
};
AppModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__.ZipcodeEntryComponent,
            _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__.ForecastsListComponent,
            _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__.CurrentConditionsComponent,
            _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__.MainPageComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
            _app_routing__WEBPACK_IMPORTED_MODULE_7__.routing,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__.ServiceWorkerModule.register("/ngsw-worker.js", {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production,
            }),
            _ui_three_state_button__WEBPACK_IMPORTED_MODULE_9__.ThreeStateButtonModule,
            _ui_input_autocomplete__WEBPACK_IMPORTED_MODULE_10__.InputAutocompleteComponent,
        ],
        providers: [_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService, _weather_service__WEBPACK_IMPORTED_MODULE_4__.WeatherService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 6738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routing": () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 8405);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);



const appRoutes = [
    {
        path: "",
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent,
    },
    {
        path: "forecast/:location",
        component: _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent,
    },
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, { relativeLinkResolution: "legacy" });


/***/ }),

/***/ 5597:
/*!********************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentConditionsComponent": () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 9139);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 7303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ 7187);
/* harmony import */ var app_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/location.service */ 8056);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let CurrentConditionsComponent = class CurrentConditionsComponent {
    constructor(weatherService, locationService, router) {
        this.weatherService = weatherService;
        this.locationService = locationService;
        this.router = router;
        this.currentConditions$ = this.weatherService.getCurrentConditions();
    }
    showForecast(location) {
        this.router.navigate([
            "/forecast",
            `${location.zipcode},${location.country}`,
        ]);
    }
    removeLocation(event, location) {
        event.stopPropagation();
        this.locationService.removeLocation(location);
    }
};
CurrentConditionsComponent.ctorParameters = () => [
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService },
    { type: app_location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
CurrentConditionsComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-current-conditions",
        template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CurrentConditionsComponent);



/***/ }),

/***/ 8405:
/*!************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForecastsListComponent": () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 4517);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 7309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ 7187);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ForecastsListComponent = class ForecastsListComponent {
    constructor(weatherService, route) {
        this.weatherService = weatherService;
        this.forecast$ = route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((params) => params.location.split(",")), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(([zipcode, country]) => ({ zipcode, country })), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)((location) => weatherService.getForecast(location)));
    }
};
ForecastsListComponent.ctorParameters = () => [
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
ForecastsListComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-forecasts-list",
        template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForecastsListComponent);



/***/ }),

/***/ 8056:
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCATIONS": () => (/* binding */ LOCATIONS),
/* harmony export */   "LocationService": () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _utils_fp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/fp */ 9681);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.service */ 7187);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const LOCATIONS = "locations";
let LocationService = class LocationService {
    constructor(weatherService) {
        this.weatherService = weatherService;
        this.locations = [];
        let locString = localStorage.getItem(LOCATIONS);
        if (locString) {
            this.locations = JSON.parse(locString);
        }
        this.weatherService.setLocations(this.locations);
    }
    addLocation(location) {
        if ((0,_utils_fp__WEBPACK_IMPORTED_MODULE_0__.isNotDefinedOrEmpty)(location.zipcode)) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => "Empty zipcode");
        }
        if ((0,_utils_fp__WEBPACK_IMPORTED_MODULE_0__.isNotDefinedOrEmpty)(location.country)) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => "Empty country");
        }
        this.locations.push(location);
        localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
        return this.weatherService.setLocations(this.locations);
    }
    removeLocation(location) {
        const oldLocations = this.locations;
        this.locations = this.locations.filter((loc) => loc.zipcode !== location.zipcode || loc.country !== location.country);
        if (this.locations.length !== oldLocations.length) {
            localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
            this.weatherService.setLocations(this.locations);
        }
    }
};
LocationService.ctorParameters = () => [
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_1__.WeatherService }
];
LocationService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], LocationService);



/***/ }),

/***/ 2627:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageComponent": () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 8132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {
};
MainPageComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: "app-main-page",
        template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], MainPageComponent);



/***/ }),

/***/ 6298:
/*!************************************************!*\
  !*** ./src/app/ui/input-autocomplete/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputAutocompleteComponent": () => (/* reexport safe */ _input_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__.InputAutocompleteComponent)
/* harmony export */ });
/* harmony import */ var _input_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-autocomplete.component */ 4873);



/***/ }),

/***/ 4873:
/*!***********************************************************************!*\
  !*** ./src/app/ui/input-autocomplete/input-autocomplete.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputAutocompleteComponent": () => (/* binding */ InputAutocompleteComponent)
/* harmony export */ });
/* harmony import */ var _input_autocomplete_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-autocomplete.component.html?ngResource */ 33);
/* harmony import */ var _input_autocomplete_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-autocomplete.component.css?ngResource */ 2605);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var app_utils_fp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/utils/fp */ 9681);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1203);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8663);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let InputAutocompleteComponent = class InputAutocompleteComponent {
    constructor() {
        this.uniqueId = Math.floor(Math.random() * 1000000);
        this.items$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        this.maxItemCountShown = 5;
        this.placeholder = "";
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this._filter = "";
        this._isExpanded = false;
        this.isExpanded$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(this.isExpanded);
        this.filter$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject("");
        // here we add some metadata to each item to avoid recompute them continously
        this.itemsWithMetadata$ = this.items$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)((items) => items.map((item) => ({
            ...item,
            _formattedLabel: item.label,
            _lowercaseLabel: item.label.toLocaleLowerCase(),
        }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.share)());
        this.filteredItems$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([
            this.itemsWithMetadata$,
            this.isExpanded$,
            this.filter$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)((filter) => filter.toLocaleLowerCase())),
        ]).pipe(
        // disable filtering while the dropdown is closed (avoid useless computation and rendering)
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(([, isExpanded]) => isExpanded), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(([items, , filter]) => {
            if ((0,app_utils_fp__WEBPACK_IMPORTED_MODULE_2__.isDefinedAndNotEmpty)(filter)) {
                return items
                    .filter((item) => item._lowercaseLabel.includes(filter))
                    .slice(0, this.maxItemCountShown)
                    .map(this.highlightFilterMatch(filter));
            }
            else {
                return items
                    .slice(0, this.maxItemCountShown)
                    .map(this.highlightFilterMatch(filter));
            }
        }));
    }
    set items(newItems) {
        this.items$.next(newItems);
    }
    get filter() {
        return this._filter;
    }
    set filter(newFilter) {
        this._filter = newFilter;
        this.filter$.next(newFilter);
        this.isExpanded = true;
    }
    get isExpanded() {
        return this._isExpanded;
    }
    set isExpanded(newIsExpanded) {
        this._isExpanded = newIsExpanded;
        this.isExpanded$.next(newIsExpanded);
    }
    selectItem(item) {
        this.filter = item.label;
        const originalItem = { ...item };
        delete originalItem._formattedLabel;
        delete originalItem._lowercaseLabel;
        this.selected.emit(originalItem);
        this.isExpanded = false;
    }
    highlightFilterMatch(filter) {
        if ((0,app_utils_fp__WEBPACK_IMPORTED_MODULE_2__.isNotDefinedOrEmpty)(filter)) {
            return (item) => item;
        }
        return (item) => ({
            ...item,
            _formattedLabel: item.label.replace(new RegExp(`(${filter})`, "gi"), "<strong>$1</strong>"),
        });
    }
};
InputAutocompleteComponent.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    maxItemCountShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
InputAutocompleteComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-input-autocomplete",
        template: _input_autocomplete_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule],
        standalone: true,
        styles: [_input_autocomplete_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InputAutocompleteComponent);



/***/ }),

/***/ 8877:
/*!****************************************************************************!*\
  !*** ./src/app/ui/three-state-button/base-three-state-button.directive.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseThreeStateButtonState": () => (/* binding */ BaseThreeStateButtonState)
/* harmony export */ });
class BaseThreeStateButtonState {
    constructor(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.hasView = true;
        this.hide();
    }
    show() {
        if (!this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        }
    }
    hide() {
        if (this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}


/***/ }),

/***/ 1438:
/*!************************************************!*\
  !*** ./src/app/ui/three-state-button/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThreeStateButtonModule": () => (/* reexport safe */ _three_state_button_module__WEBPACK_IMPORTED_MODULE_0__.ThreeStateButtonModule)
/* harmony export */ });
/* harmony import */ var _three_state_button_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./three-state-button.module */ 9784);



/***/ }),

/***/ 9360:
/*!****************************************************************************!*\
  !*** ./src/app/ui/three-state-button/three-state-button-done.directive.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThreeStateButtonDoneDirective": () => (/* binding */ ThreeStateButtonDoneDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _base_three_state_button_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-three-state-button.directive */ 8877);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ThreeStateButtonDoneDirective = class ThreeStateButtonDoneDirective extends _base_three_state_button_directive__WEBPACK_IMPORTED_MODULE_0__.BaseThreeStateButtonState {
    constructor(templateRef, viewContainer) {
        super(templateRef, viewContainer);
    }
};
ThreeStateButtonDoneDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef }
];
ThreeStateButtonDoneDirective = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: "[appThreeStateButtonDone]" })
], ThreeStateButtonDoneDirective);



/***/ }),

/***/ 9018:
/*!****************************************************************************!*\
  !*** ./src/app/ui/three-state-button/three-state-button-idle.directive.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThreeStateButtonIdleDirective": () => (/* binding */ ThreeStateButtonIdleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _base_three_state_button_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-three-state-button.directive */ 8877);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ThreeStateButtonIdleDirective = class ThreeStateButtonIdleDirective extends _base_three_state_button_directive__WEBPACK_IMPORTED_MODULE_0__.BaseThreeStateButtonState {
    constructor(templateRef, viewContainer) {
        super(templateRef, viewContainer);
    }
};
ThreeStateButtonIdleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef }
];
ThreeStateButtonIdleDirective = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: "[appThreeStateButtonIdle]" })
], ThreeStateButtonIdleDirective);



/***/ }),

/***/ 9066:
/*!*******************************************************************************!*\
  !*** ./src/app/ui/three-state-button/three-state-button-working.directive.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThreeStateButtonWorkingDirective": () => (/* binding */ ThreeStateButtonWorkingDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _base_three_state_button_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-three-state-button.directive */ 8877);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ThreeStateButtonWorkingDirective = class ThreeStateButtonWorkingDirective extends _base_three_state_button_directive__WEBPACK_IMPORTED_MODULE_0__.BaseThreeStateButtonState {
    constructor(templateRef, viewContainer) {
        super(templateRef, viewContainer);
    }
};
ThreeStateButtonWorkingDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef }
];
ThreeStateButtonWorkingDirective = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: "[appThreeStateButtonWorking]" })
], ThreeStateButtonWorkingDirective);



/***/ }),

/***/ 1932:
/*!***********************************************************************!*\
  !*** ./src/app/ui/three-state-button/three-state-button.directive.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThreeStateButtonDirective": () => (/* binding */ ThreeStateButtonDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var app_utils_fp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/utils/fp */ 9681);
/* harmony import */ var _three_state_button_done_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./three-state-button-done.directive */ 9360);
/* harmony import */ var _three_state_button_idle_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./three-state-button-idle.directive */ 9018);
/* harmony import */ var _three_state_button_working_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./three-state-button-working.directive */ 9066);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





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
let ThreeStateButtonDirective = class ThreeStateButtonDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        /**
         * Defay for resetting from "done" state to "idle" state in milliseconds
         */
        this.resetAfter = 3000;
        this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngAfterViewInit() {
        // we do this only on ngAfterViewInit because contentchild are only
        // available here for the first time, so we cannot initialize before
        this.show(this.state);
    }
    ngOnChanges(changes) {
        if ((0,app_utils_fp__WEBPACK_IMPORTED_MODULE_0__.isNotDefined)(this.idleContent) ||
            (0,app_utils_fp__WEBPACK_IMPORTED_MODULE_0__.isNotDefined)(this.workingContent) ||
            (0,app_utils_fp__WEBPACK_IMPORTED_MODULE_0__.isNotDefined)(this.doneContent)) {
            // we not want to react to state change while sub directive instances are available
            return;
        }
        if (changes.state && changes.state.currentValue) {
            this.show(changes.state.currentValue);
        }
    }
    show(state) {
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
};
ThreeStateButtonDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef }
];
ThreeStateButtonDirective.propDecorators = {
    resetAfter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    stateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    idleContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ContentChild, args: [_three_state_button_idle_directive__WEBPACK_IMPORTED_MODULE_2__.ThreeStateButtonIdleDirective,] }],
    workingContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ContentChild, args: [_three_state_button_working_directive__WEBPACK_IMPORTED_MODULE_3__.ThreeStateButtonWorkingDirective,] }],
    doneContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ContentChild, args: [_three_state_button_done_directive__WEBPACK_IMPORTED_MODULE_1__.ThreeStateButtonDoneDirective,] }]
};
ThreeStateButtonDirective = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive)({
        selector: "button[appThreeStateButton]",
    })
], ThreeStateButtonDirective);



/***/ }),

/***/ 9784:
/*!********************************************************************!*\
  !*** ./src/app/ui/three-state-button/three-state-button.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThreeStateButtonModule": () => (/* binding */ ThreeStateButtonModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _three_state_button_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./three-state-button.directive */ 1932);
/* harmony import */ var _three_state_button_idle_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./three-state-button-idle.directive */ 9018);
/* harmony import */ var _three_state_button_working_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./three-state-button-working.directive */ 9066);
/* harmony import */ var _three_state_button_done_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./three-state-button-done.directive */ 9360);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ThreeStateButtonModule = class ThreeStateButtonModule {
};
ThreeStateButtonModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _three_state_button_directive__WEBPACK_IMPORTED_MODULE_0__.ThreeStateButtonDirective,
            _three_state_button_idle_directive__WEBPACK_IMPORTED_MODULE_1__.ThreeStateButtonIdleDirective,
            _three_state_button_working_directive__WEBPACK_IMPORTED_MODULE_2__.ThreeStateButtonWorkingDirective,
            _three_state_button_done_directive__WEBPACK_IMPORTED_MODULE_3__.ThreeStateButtonDoneDirective,
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
        exports: [
            _three_state_button_directive__WEBPACK_IMPORTED_MODULE_0__.ThreeStateButtonDirective,
            _three_state_button_idle_directive__WEBPACK_IMPORTED_MODULE_1__.ThreeStateButtonIdleDirective,
            _three_state_button_working_directive__WEBPACK_IMPORTED_MODULE_2__.ThreeStateButtonWorkingDirective,
            _three_state_button_done_directive__WEBPACK_IMPORTED_MODULE_3__.ThreeStateButtonDoneDirective,
        ],
    })
], ThreeStateButtonModule);



/***/ }),

/***/ 9681:
/*!*****************************!*\
  !*** ./src/app/utils/fp.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDefined": () => (/* binding */ isDefined),
/* harmony export */   "isDefinedAndNotEmpty": () => (/* binding */ isDefinedAndNotEmpty),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isNotDefined": () => (/* binding */ isNotDefined),
/* harmony export */   "isNotDefinedOrEmpty": () => (/* binding */ isNotDefinedOrEmpty),
/* harmony export */   "isNotEmpty": () => (/* binding */ isNotEmpty)
/* harmony export */ });
function isDefined(x) {
    return x !== null && typeof x !== "undefined";
}
function isNotDefined(x) {
    return x === null || typeof x === "undefined";
}
function isEmpty(x) {
    return x.length === 0;
}
function isNotEmpty(x) {
    return x.length !== 0;
}
function isNotDefinedOrEmpty(x) {
    return isNotDefined(x) || isEmpty(x);
}
function isDefinedAndNotEmpty(x) {
    return isDefined(x) && isNotEmpty(x);
}


/***/ }),

/***/ 7187:
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherService": () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8663);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9230);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1203);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;



let WeatherService = WeatherService_1 = class WeatherService {
    constructor(http) {
        this.http = http;
        this.locations$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    }
    setLocations(locations) {
        this.locations$.next(locations);
        return this.getCurrentConditions().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.filter)((conditions) => conditions.length === locations.length), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.take)(1));
    }
    getCurrentCondition(location) {
        // Here we make a request to get the curretn conditions data from the API. Note the use of backticks and an expression to insert the zipcode
        return this.http
            .get(`${WeatherService_1.URL}/weather?zip=${location.zipcode},${location.country}&units=imperial&APPID=${WeatherService_1.APPID}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => ({ location, data: data })), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({ location, error: error })));
    }
    getCurrentConditions(autoRefreshDelayInMillis = 30000) {
        return this.locations$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)((locations) => locations.length > 0
            ? (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)(locations.map((loc) => this.getCurrentCondition(loc))).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.repeat)({ delay: autoRefreshDelayInMillis }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.share)())
            : (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([])));
    }
    getForecast(location) {
        // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
        return this.http.get(`${WeatherService_1.URL}/forecast/daily?zip=${location.zipcode},${location.country}&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`);
    }
    getWeatherIcon(id) {
        if (id >= 200 && id <= 232) {
            return WeatherService_1.ICON_URL + "art_storm.png";
        }
        else if (id >= 501 && id <= 511) {
            return WeatherService_1.ICON_URL + "art_rain.png";
        }
        else if (id === 500 || (id >= 520 && id <= 531)) {
            return WeatherService_1.ICON_URL + "art_light_rain.png";
        }
        else if (id >= 600 && id <= 622) {
            return WeatherService_1.ICON_URL + "art_snow.png";
        }
        else if (id >= 801 && id <= 804) {
            return WeatherService_1.ICON_URL + "art_clouds.png";
        }
        else if (id === 741 || id === 761) {
            return WeatherService_1.ICON_URL + "art_fog.png";
        }
        else {
            return WeatherService_1.ICON_URL + "art_clear.png";
        }
    }
};
WeatherService.URL = "http://api.openweathermap.org/data/2.5";
WeatherService.APPID = "5a4b2d457ecbef9eb2a71e480b947604";
WeatherService.ICON_URL = "https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/";
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient }
];
WeatherService = WeatherService_1 = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)()
], WeatherService);



/***/ }),

/***/ 6724:
/*!*************************************************!*\
  !*** ./src/app/zipcode-entry/countries.data.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_COUNTRIES": () => (/* binding */ ALL_COUNTRIES)
/* harmony export */ });
/* harmony import */ var country_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! country-data */ 5192);

const ALL_COUNTRIES = country_data__WEBPACK_IMPORTED_MODULE_0__.countries.all.map((country) => ({
    label: country.name,
    code: country.alpha2.toLocaleLowerCase(),
}));
ALL_COUNTRIES.sort((a, b) => a.label.localeCompare(b.label));


/***/ }),

/***/ 7937:
/*!**********************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZipcodeEntryComponent": () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 7606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _countries_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countries.data */ 6724);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../location.service */ 8056);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ZipcodeEntryComponent = class ZipcodeEntryComponent {
    constructor(service) {
        this.service = service;
        this.zipcode = "";
        this.buttonState = "IDLE";
        this.allCountries = _countries_data__WEBPACK_IMPORTED_MODULE_1__.ALL_COUNTRIES;
    }
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
};
ZipcodeEntryComponent.ctorParameters = () => [
    { type: _location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService }
];
ZipcodeEntryComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-zipcode-entry",
        template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], ZipcodeEntryComponent);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);


/***/ }),

/***/ 3088:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 7303:
/*!********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".close {\n  cursor: pointer;\n}\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbnQtY29uZGl0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJjdXJyZW50LWNvbmRpdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */";

/***/ }),

/***/ 7309:
/*!************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".icon {\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  right: 20px;\n  top: -2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmVjYXN0cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztBQUNYIiwiZmlsZSI6ImZvcmVjYXN0cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogLTJweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 2605:
/*!***********************************************************************************!*\
  !*** ./src/app/ui/input-autocomplete/input-autocomplete.component.css?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n    display: block;\n    width: 100%;\n}\n.dropdown {\n    width: 100%;\n}\n.dropdown .dropdown-menu {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiaW5wdXQtYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZHJvcGRvd24ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 9139:
/*!*********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <div\n    *ngFor=\"let location of currentConditions$ | async\"\n    class=\"well flex\"\n    (click)=\"showForecast(location.location)\"\n  >\n    <ng-template [ngIf]=\"location.data\" [ngIfElse]=\"errorTemplate\">\n      <div>\n        <h3>{{ location.data.name }} ({{ location.location.zipcode }})</h3>\n        <h4>Current conditions: {{ location.data.weather[0].main }}</h4>\n        <h4>Temperatures today:</h4>\n        <p>\n          Current {{ location.data.main.temp | number : \".0-0\" }} - Max\n          {{ location.data.main.temp_max | number : \".0-0\" }} - Min\n          {{ location.data.main.temp_min | number : \".0-0\" }}\n        </p>\n        <p>\n          <a\n            [routerLink]=\"[\n              '/forecast',\n              location.location.zipcode + ',' + location.location.country\n            ]\"\n            >Show 5-day forecast for {{ location.data.name }}</a\n          >\n        </p>\n      </div>\n      <div>\n        <span class=\"close\" (click)=\"removeLocation($event, location.location)\"\n          >&times;</span\n        >\n        <img\n          [src]=\"weatherService.getWeatherIcon(location.data.weather[0].id)\"\n        />\n      </div>\n    </ng-template>\n    <ng-template #errorTemplate>\n      <div>\n        <p>\n          We cannot get weather for zipcode {{ location.location.zipcode }}...\n          Can you check this is a valid zipcode?\n        </p>\n      </div>\n      <div>\n        <span class=\"close\" (click)=\"removeLocation($event, location.location)\"\n          >&times;</span\n        >\n      </div>\n    </ng-template>\n  </div>\n</div>\n";

/***/ }),

/***/ 4517:
/*!*************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<div *ngIf=\"forecast$ | async as forecast\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">5-day forecast for {{ forecast?.city.name }}</h3>\n    </div>\n    <ul class=\"list-group\">\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\n        {{ dailyForecast.dt * 1000 | date : \"EEEE, MMM d\" }}:\n        {{ dailyForecast.weather[0].main }}\n        - Min: {{ dailyForecast.temp.min | number : \".0-0\" }} - Max:\n        {{ dailyForecast.temp.max | number : \".0-0\" }}\n\n        <img\n          [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\"\n          class=\"icon\"\n        />\n      </li>\n    </ul>\n  </div>\n</div>\n<button class=\"btn btn-success\" [routerLink]=\"'/'\">< Back to main page</button>\n";

/***/ }),

/***/ 8132:
/*!***************************************************************!*\
  !*** ./src/app/main-page/main-page.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid\">\n\n  <app-zipcode-entry> </app-zipcode-entry>\n  <app-current-conditions></app-current-conditions>\n\n</div>\n";

/***/ }),

/***/ 33:
/*!************************************************************************************!*\
  !*** ./src/app/ui/input-autocomplete/input-autocomplete.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"dropdown\">\n  <input\n    type=\"text\"\n    [id]=\"'dropdownMenu' + uniqueId\"\n    class=\"dropdown-toggle form-control\"\n    [placeholder]=\"placeholder\"\n    data-toggle=\"dropdown\"\n    aria-haspopup=\"true\"\n    [attr.aria-expanded]=\"isExpanded\"\n    (click)=\"isExpanded = !isExpanded\"\n    [value]=\"filter\"\n    (keyup)=\"filter = $event.target.value\"\n  />\n  <ul\n    class=\"dropdown-menu\"\n    [class.show]=\"isExpanded\"\n    [attr.aria-labelledby]=\"'dropdownMenu' + uniqueId\"\n  >\n    <ng-container *ngIf=\"filteredItems$ | async as filteredItems\">\n      <li *ngFor=\"let item of filteredItems\">\n        <a\n          href=\"#\"\n          [innerHTML]=\"item._formattedLabel\"\n          (click)=\"selectItem(item)\"\n        ></a>\n      </li>\n    </ng-container>\n  </ul>\n</div>\n";

/***/ }),

/***/ 7606:
/*!***********************************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"well\">\n  <h2>Enter a zipcode:</h2>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-xs-12\">\n        <input\n          type=\"text\"\n          placeholder=\"Zipcode\"\n          class=\"form-control\"\n          (change)=\"zipcode = $event.target.value\"\n        />\n      </div>\n      <div class=\"col-md-6 col-xs-12\">\n        <app-input-autocomplete\n          [items]=\"allCountries\"\n          [maxItemCountShown]=\"6\"\n          placeholder=\"Enter country name\"\n          (selected)=\"country = $event\"\n        ></app-input-autocomplete>\n      </div>\n    </div>\n  </div>\n  <br />\n  <button\n    appThreeStateButton\n    class=\"btn\"\n    [(state)]=\"buttonState\"\n    [resetAfter]=\"500\"\n    (click)=\"addLocation()\"\n    [ngClass]=\"{\n      'btn-primary': buttonState === 'IDLE',\n      'btn-info': buttonState === 'WORKING',\n      'btn-success': buttonState === 'DONE'\n    }\"\n  >\n    <ng-template appThreeStateButtonIdle> Add location </ng-template>\n    <ng-template appThreeStateButtonWorking> Adding... </ng-template>\n    <ng-template appThreeStateButtonDone>\n      <span class=\"glyphicon glyphicon-saved\" aria-hidden=\"true\"></span>\n      DONE\n    </ng-template>\n  </button>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map