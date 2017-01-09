"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
exports.NEVER_EAT_ALONE = {
    name: 'Never Eat Alone',
    routerLink: 'never-eat-alone',
    description: 'An android app designed to let University of Michigan students find friends to eat with at the dining halls'
};
var NeverEatAloneComponent = (function () {
    function NeverEatAloneComponent() {
    }
    NeverEatAloneComponent = __decorate([
        core_1.Component({
            template: '<h1>NEVER EAT ALONE</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], NeverEatAloneComponent);
    return NeverEatAloneComponent;
}());
exports.NeverEatAloneComponent = NeverEatAloneComponent;
//# sourceMappingURL=never-eat-alone.component.js.map