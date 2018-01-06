webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n    padding: 0;\n}\nli {\n    display: inline-block;\n    width: 40px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<audio #audioOption>\n    <source src='../assets/sound/boom.wav' type=\"audio/wav\">\n</audio>\n<div class=\"map\">\n    <div class=\"scroll\">\n        <p class=\"blurb\" *ngIf=\"!channel\">This is a game that needs to be played with Amazon's Alexa.</p>\n        <p class=\"blurb\" *ngIf=\"channel && !alexaBoard && !userBoard\">Your game is active, to see the board, ask Alexa</p>\n        <div *ngIf=\"channel\" class=\"boards\">\n            <ng-container *ngIf=\"alexaBoard\">\n                <div class=\"alexa-board board\">\n                    <h1>Alexa</h1>\n                    <ul *ngFor=\"let row of alexaBoard; let rowIdx = index\">\n                        <li *ngFor=\"let column of row; let colIdx = index\">\n                            <img *ngIf=\"column === 'X'\" class=\"miss\" src=\"../assets/images/miss.png\"/>\n                            <app-sprite *ngIf=\"column === 'B'\" src=\"./assets/images/fire.png\"\n                                        spriteName=\"alexa-{{rowIdx}}-{{colIdx}}\" spriteHeight=\"40\" spriteWidth=\"82\"\n                                        frames=\"8\"></app-sprite>\n                            {{tempBoard[rowIdx][colIdx].toUpperCase()}}\n                        </li>\n                    </ul>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"userBoard\">\n                <div class=\"user-board board\">\n                    <h1>Your Fleet</h1>\n                    <ul *ngFor=\"let row of userBoard; let rowIdx = index\">\n                        <li *ngFor=\"let column of row; let colIdx = index\">\n                            <img *ngIf=\"column === 'X'\" class=\"miss\" src=\"../assets/images/miss.png\"/>\n                            <app-sprite *ngIf=\"column === 'B'\" src=\"./assets/images/fire.png\"\n                                        spriteName=\"user-{{rowIdx}}-{{colIdx}}\" spriteHeight=\"40\" spriteWidth=\"82\"\n                                        frames=\"8\"></app-sprite>\n                            {{tempBoard[rowIdx][colIdx].toUpperCase()}}\n                        </li>\n                    </ul>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pubnub_angular2__ = __webpack_require__("../../../../pubnub-angular2/lib/pubnub-angular4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pubnub_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pubnub_angular2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_pubnub) {
        var _this = this;
        this._pubnub = _pubnub;
        this.tempBoard = [
            ['a', 'b', 'c', 'd', 'e'],
            ['f', 'g', 'h', 'i', 'j'],
            ['k', 'l', 'm', 'n', 'o'],
            ['p', 'q', 'r', 's', 't'],
            ['u', 'v', 'w', 'x', 'y']
        ];
        /**
         * Work out if we have an id to work with
         */
        this.channel = this.getUrlParameter('id');
        if (this.channel) {
            /**
             * We have a channel so we should start sub with pubnub
             */
            this.pubnub = _pubnub;
            this.pubnub.init({
                publishKey: 'pub-c-86bc1976-2064-4f3d-a03c-faa9dcb59a07',
                subscribeKey: 'sub-c-5b5c9f7a-e3d9-11e7-ad36-deb77ae39928',
                uuid: 'pirateShipFE'
            });
            this.pubnub.subscribe({
                channels: [this.channel],
                triggerEvents: ['message']
            });
            this.pubnub.getMessage(this.channel, function (message) {
                console.log(JSON.parse(message.message));
                _this.audioPlayerRef.nativeElement.play();
                _this.userBoard = JSON.parse(message.message).data.userBoard;
                _this.alexaBoard = JSON.parse(message.message).data.alexaBoard;
            });
        }
    }
    /**
     * Grab a param from the URL
     * @param sParam
     * @returns {string}
     */
    AppComponent.prototype.getUrlParameter = function (sParam) {
        return decodeURIComponent(window.location.search.substring(1)).split('&')
            .map(function (v) {
            return v.split('=');
        })
            .filter(function (v) {
            return (v[0] === sParam) ? true : false;
        })
            .reduce(function (prev, curv, index, array) {
            return curv[1];
        }, undefined);
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('audioOption'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], AppComponent.prototype, "audioPlayerRef", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_pubnub_angular2__["PubNubAngular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_pubnub_angular2__["PubNubAngular"]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pubnub_angular2__ = __webpack_require__("../../../../pubnub-angular2/lib/pubnub-angular4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pubnub_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pubnub_angular2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_sprite_sprite_component__ = __webpack_require__("../../../../../src/app/components/sprite/sprite.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_sprite_sprite_component__["a" /* SpriteComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2_pubnub_angular2__["PubNubAngular"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/sprite/sprite.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpriteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpriteComponent = (function () {
    function SpriteComponent() {
        this.image = new Image();
    }
    SpriteComponent.prototype.ngAfterViewInit = function () {
        this.image.src = this.src;
        var canvas = document.getElementById(this.spriteName);
        this.context = canvas.getContext('2d');
        var fairy = this.sprite({
            context: this.context,
            width: this.spriteWidth,
            height: this.spriteHeight,
            image: this.image,
            numberOfFrames: this.frames,
            ticksPerFrame: 1
        });
        this.animateSprite(fairy);
    };
    SpriteComponent.prototype.animateSprite = function (sprite) {
        var _this = this;
        sprite.update();
        sprite.render();
        setTimeout(function () {
            _this.animateSprite(sprite);
        }, 33);
    };
    SpriteComponent.prototype.sprite = function (options) {
        var that = {}, ticksPerFrame = options.ticksPerFrame || 0, numberOfFrames = options.numberOfFrames || 1;
        var tickCount = 0, frameIndex = 0;
        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;
        that.update = function () {
            tickCount += 1;
            if (tickCount > ticksPerFrame) {
                tickCount = 0;
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {
                    // Go to the next frame
                    frameIndex += 1;
                }
                else {
                    frameIndex = 0;
                }
            }
        };
        that.render = function () {
            // Clear the canvas
            that.context.clearRect(0, 0, that.width, that.height);
            // Draw the animation
            that.context.drawImage(that.image, frameIndex * that.width / numberOfFrames, 0, that.width / numberOfFrames, that.height, 0, 0, that.width / numberOfFrames, that.height);
        };
        return that;
    };
    return SpriteComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], SpriteComponent.prototype, "frames", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], SpriteComponent.prototype, "spriteHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], SpriteComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], SpriteComponent.prototype, "src", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], SpriteComponent.prototype, "spriteName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], SpriteComponent.prototype, "spriteWidth", void 0);
SpriteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-sprite',
        template: "\n        <canvas class=\"sprite\" id=\"{{spriteName}}\" width=\"10px\" height=\"40px\"></canvas>\n    "
    }),
    __metadata("design:paramtypes", [])
], SpriteComponent);

//# sourceMappingURL=sprite.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map