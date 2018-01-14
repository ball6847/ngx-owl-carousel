"use strict";
var core_1 = require('@angular/core');
var OwlChild = (function () {
    function OwlChild(el) {
        this.el = el;
        this.owlClass = true;
        this.options = {};
        if (typeof $ === 'undefined' && typeof jQuery !== 'undefined') {
            $ = jQuery;
        }
    }
    OwlChild.prototype.ngOnInit = function () {
        if ((typeof window !== 'undefined') && $ && typeof $.fn.owlCarousel === 'function') {
            this.$owl = $(this.el.nativeElement);
        }
    };
    OwlChild.prototype.ngAfterViewInit = function () {
        this.initOwl();
    };
    OwlChild.prototype.initOwl = function () {
        var _this = this;
        if (this.$owl) {
            var options = {};
            Object.assign(options, this.options);
            if (this.currentSlideIndex) {
                options.startPosition = this.currentSlideIndex;
            }
            this.$owl.owlCarousel(options);
            this.$owl.on('changed.owl.carousel', function (event) {
                _this.currentSlideIndex = event.item.index;
            });
        }
    };
    OwlChild.prototype.trigger = function (action, options) {
        if (this.$owl) {
            this.$owl.trigger(action, options);
        }
    };
    OwlChild.prototype.ngOnDestroy = function () {
        this.destroyOwl();
        delete this.$owl;
    };
    OwlChild.prototype.destroyOwl = function () {
        if (this.$owl) {
            this.$owl.trigger('destroy.owl.carousel').removeClass('owl-loaded').find('.owl-stage:empty, .owl-item:empty').remove();
        }
    };
    OwlChild.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'owl-carousel-child',
                    template: '<ng-content></ng-content>'
                },] },
    ];
    /** @nocollapse */
    OwlChild.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    OwlChild.propDecorators = {
        'owlClass': [{ type: core_1.HostBinding, args: ['class.owl-carousel',] },],
        'options': [{ type: core_1.Input },],
    };
    return OwlChild;
}());
exports.OwlChild = OwlChild;
//# sourceMappingURL=owl-child.component.js.map