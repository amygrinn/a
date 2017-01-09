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
exports.VR_CONSTELLATIONS = {
    name: 'VR Constellations for Google Cardboard',
    routerLink: 'vr-constellations',
    description: 'A project inspired by naked eye astronomy. Helps to train people to find constellations in the night sky based on where they live and what time it is. Made with Unity.'
};
var VRConstellationsComponent = (function () {
    function VRConstellationsComponent() {
    }
    VRConstellationsComponent = __decorate([
        core_1.Component({
            template: '<h1>VR CONSTELLATIONS</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], VRConstellationsComponent);
    return VRConstellationsComponent;
}());
exports.VRConstellationsComponent = VRConstellationsComponent;
//# sourceMappingURL=vr-constellations.component.js.map