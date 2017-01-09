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
var router_1 = require('@angular/router');
var project_info_1 = require('./project-info');
var ProjectMiniComponent = (function () {
    function ProjectMiniComponent(router) {
        this.router = router;
    }
    ProjectMiniComponent.prototype.gotoDetail = function () {
        this.router.navigate(['projects/' + this.project.routerLink]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', project_info_1.Project)
    ], ProjectMiniComponent.prototype, "project", void 0);
    ProjectMiniComponent = __decorate([
        core_1.Component({
            selector: 'my-project-mini',
            template: "\n    <p>mini project</p>\n    <h3>{{project.name}}</h3>\n    <h4>{{project.description}}</h4>\n    <button (click)=\"gotoDetail()\">Details</button>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ProjectMiniComponent);
    return ProjectMiniComponent;
}());
exports.ProjectMiniComponent = ProjectMiniComponent;
//# sourceMappingURL=project-mini.component.js.map