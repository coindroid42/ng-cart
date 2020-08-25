"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng_restocart_service_1 = require("../services/ng-restocart.service");
var SetDishCommentDirective = /** @class */ (function () {
    function SetDishCommentDirective(cartService) {
        this.cartService = cartService;
        this.success = new core_1.EventEmitter();
        this.error = new core_1.EventEmitter();
    }
    /**
     * @return {?}
     */
    SetDishCommentDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.setComment();
    };
    /**
     * @return {?}
     */
    SetDishCommentDirective.prototype.setComment = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.cartService.setDishComment(this.dish.id, this.comment).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.success.emit(true); }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.error.emit(err); }));
    };
    SetDishCommentDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[setDishComment]'
                },] },
    ];
    /** @nocollapse */
    SetDishCommentDirective.ctorParameters = function () { return [
        { type: ng_restocart_service_1.NgRestoCartService }
    ]; };
    SetDishCommentDirective.propDecorators = {
        comment: [{ type: core_1.Input }],
        dish: [{ type: core_1.Input }],
        success: [{ type: core_1.Output }],
        error: [{ type: core_1.Output }],
        onClick: [{ type: core_1.HostListener, args: ['click',] }]
    };
    return SetDishCommentDirective;
}());
exports.SetDishCommentDirective = SetDishCommentDirective;
if (false) {
    /** @type {?} */
    SetDishCommentDirective.prototype.comment;
    /** @type {?} */
    SetDishCommentDirective.prototype.dish;
    /** @type {?} */
    SetDishCommentDirective.prototype.success;
    /** @type {?} */
    SetDishCommentDirective.prototype.error;
    /**
     * @type {?}
     * @private
     */
    SetDishCommentDirective.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWRpc2gtY29tbWVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ad2VicmVzdG8vbmctY2FydC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3NldC1kaXNoLWNvbW1lbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNDQUFxRjtBQUNyRix5RUFBc0U7QUFFdEU7SUFjRSxpQ0FBb0IsV0FBOEI7UUFBOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBUHhDLFlBQU8sR0FBRyxJQUFJLG1CQUFZLEVBQVcsQ0FBQztRQUN0QyxVQUFLLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7SUFNUyxDQUFDOzs7O0lBSmhDLHlDQUFPOzs7SUFBOUI7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUlELDRDQUFVOzs7SUFBVjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFDbEUsVUFBQSxHQUFHLElBQUUsT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUI7Ozs7UUFDNUIsVUFBQSxHQUFHLElBQUUsT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBcEIsQ0FBb0IsRUFDMUIsQ0FBQTtJQUdILENBQUM7O2dCQXZCRixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCOzs7O2dCQUpRLHlDQUFrQjs7OzBCQU14QixZQUFLO3VCQUNMLFlBQUs7MEJBRUwsYUFBTTt3QkFDTixhQUFNOzBCQUVOLG1CQUFZLFNBQUMsT0FBTzs7SUFldkIsOEJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXRCWSwwREFBdUI7OztJQUNsQywwQ0FBcUI7O0lBQ3JCLHVDQUFrQjs7SUFFbEIsMENBQWdEOztJQUNoRCx3Q0FBNkM7Ozs7O0lBTWpDLDhDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nUmVzdG9DYXJ0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL25nLXJlc3RvY2FydC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NldERpc2hDb21tZW50XSdcbn0pXG5leHBvcnQgY2xhc3MgU2V0RGlzaENvbW1lbnREaXJlY3RpdmUge1xuICBASW5wdXQoKSBjb21tZW50OmFueTtcbiAgQElucHV0KCkgZGlzaDphbnk7XG5cbiAgQE91dHB1dCgpIHN1Y2Nlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25DbGljaygpIHtcbiAgICB0aGlzLnNldENvbW1lbnQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FydFNlcnZpY2U6TmdSZXN0b0NhcnRTZXJ2aWNlKSB7IH1cblxuICBzZXRDb21tZW50KCl7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5zZXREaXNoQ29tbWVudCh0aGlzLmRpc2guaWQsdGhpcy5jb21tZW50KS5zdWJzY3JpYmUoXG4gICAgICByZXM9PnRoaXMuc3VjY2Vzcy5lbWl0KHRydWUpLFxuICAgICAgZXJyPT50aGlzLmVycm9yLmVtaXQoZXJyKVxuICAgIClcbiAgICBcblxuICB9XG5cbn1cbiJdfQ==