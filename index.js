"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var owl_carousel_component_1 = require('./src/owl-carousel.component');
var owl_child_component_1 = require('./src/owl-child.component');
__export(require('./src/owl-carousel.component'));
var OwlModule = (function () {
    function OwlModule() {
    }
    OwlModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        owl_carousel_component_1.OwlCarousel, owl_child_component_1.OwlChild
                    ],
                    exports: [
                        owl_carousel_component_1.OwlCarousel
                    ]
                },] },
    ];
    /** @nocollapse */
    OwlModule.ctorParameters = function () { return []; };
    return OwlModule;
}());
exports.OwlModule = OwlModule;
//# sourceMappingURL=index.js.map