"use strict";
var core_1 = require('@angular/core');
var OwlCarousel = (function () {
    function OwlCarousel(differs) {
        this.differs = differs;
        this.carouselClasses = '';
        this.options = {};
    }
    Object.defineProperty(OwlCarousel.prototype, "items", {
        set: function (coll) {
            this._items = coll;
            if (coll && !this.differ) {
                this.differ = this.differs.find(coll).create(null);
            }
        },
        enumerable: true,
        configurable: true
    });
    OwlCarousel.prototype.ngDoCheck = function () {
        if (this.differ) {
            var changes = this.differ.diff(this._items);
            if (changes) {
                var changed_1 = false;
                var changedFn = function () {
                    changed_1 = true;
                };
                changes.forEachAddedItem(changedFn);
                changes.forEachMovedItem(changedFn);
                changes.forEachRemovedItem(changedFn);
                if (changed_1) {
                    this.reInit();
                }
            }
        }
    };
    OwlCarousel.prototype.reInit = function () {
        var _this = this;
        if (this.$owlChild.$owl) {
            this.$owlChild.$owl.css('display', 'none');
        }
        setTimeout(function () {
            _this.$owlChild.destroyOwl();
            if (_this.$owlChild.$owl) {
                _this.$owlChild.$owl.css('display', 'block');
            }
            _this.$owlChild.initOwl();
        }, 0);
    };
    OwlCarousel.prototype.refresh = function () {
        this.trigger('refresh.owl.carousel');
    };
    OwlCarousel.prototype.next = function (options) {
        this.trigger('next.owl.carousel', options);
    };
    OwlCarousel.prototype.previous = function (options) {
        this.trigger('prev.owl.carousel', options);
    };
    OwlCarousel.prototype.to = function (options) {
        this.trigger('to.owl.carousel', options);
    };
    OwlCarousel.prototype.trigger = function (action, options) {
        this.$owlChild.trigger(action, options);
    };
    OwlCarousel.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'owl-carousel',
                    template: '<owl-carousel-child #owl [ngClass]="carouselClasses" [options]="options" >' +
                        '<ng-content></ng-content></owl-carousel-child>',
                },] },
    ];
    /** @nocollapse */
    OwlCarousel.ctorParameters = function () { return [
        { type: core_1.IterableDiffers, },
    ]; };
    OwlCarousel.propDecorators = {
        '$owlChild': [{ type: core_1.ViewChild, args: ['owl',] },],
        'carouselClasses': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
    };
    return OwlCarousel;
}());
exports.OwlCarousel = OwlCarousel;
//# sourceMappingURL=owl-carousel.component.js.map