import { Renderer2, ElementRef } from '@angular/core';
import { NgRestoCartService } from '../services/ng-restocart.service';
export declare class AmountCartDirective {
    private cartService;
    private renderer;
    private el;
    cart: object;
    amount: string;
    constructor(cartService: NgRestoCartService, renderer: Renderer2, el: ElementRef);
}
