"use strict";
var jet_vr_component_1 = require('./jet-vr.component');
var never_eat_alone_component_1 = require('./never-eat-alone.component');
var trapped_note_component_1 = require('./trapped-note.component');
var triangulum_component_1 = require('./triangulum.component');
var vr_constellations_component_1 = require('./vr-constellations.component');
exports.PROJECT_ROUTES = [
    { path: jet_vr_component_1.JET_VR.routerLink, component: jet_vr_component_1.JetVRComponent },
    { path: never_eat_alone_component_1.NEVER_EAT_ALONE.routerLink, component: never_eat_alone_component_1.NeverEatAloneComponent },
    { path: trapped_note_component_1.TRAPPED_NOTE.routerLink, component: trapped_note_component_1.TrappedNoteComponent },
    { path: triangulum_component_1.TRIANGULUM.routerLink, component: triangulum_component_1.TriangulumComponent },
    { path: vr_constellations_component_1.VR_CONSTELLATIONS.routerLink, component: vr_constellations_component_1.VRConstellationsComponent }
];
exports.PROJECTS = [
    jet_vr_component_1.JET_VR,
    never_eat_alone_component_1.NEVER_EAT_ALONE,
    trapped_note_component_1.TRAPPED_NOTE,
    triangulum_component_1.TRIANGULUM,
    vr_constellations_component_1.VR_CONSTELLATIONS
];
var Project = (function () {
    function Project() {
    }
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=project-info.js.map