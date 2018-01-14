import { OnDestroy, ElementRef, OnInit } from '@angular/core';
export declare class OwlChild implements OnInit, OnDestroy {
    private el;
    owlClass: boolean;
    $owl: any;
    options: any;
    private currentSlideIndex;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    initOwl(): void;
    trigger(action: string, options?: any[]): void;
    ngOnDestroy(): void;
    destroyOwl(): void;
}
