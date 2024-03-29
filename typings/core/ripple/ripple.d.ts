import { ElementRef, NgZone, OnChanges, SimpleChanges, OnDestroy, InjectionToken } from '@angular/core';
import { RippleConfig } from './ripple-renderer';
import { ViewportRuler } from '../overlay/position/viewport-ruler';
import { RippleRef } from './ripple-ref';
/** InjectionToken that can be used to specify the global ripple options. */
export declare const MD_RIPPLE_GLOBAL_OPTIONS: InjectionToken<any>;
export declare type RippleGlobalOptions = {
    disabled?: boolean;
    baseSpeedFactor?: number;
};
export declare class MdRipple implements OnChanges, OnDestroy {
    /**
     * The element that triggers the ripple when click events are received. Defaults to the
     * directive's host element.
     */
    trigger: HTMLElement | HTMLElement;
    /**
     * Whether the ripple always originates from the center of the host element's bounds, rather
     * than originating from the location of the click event.
     */
    centered: boolean;
    /**
     * Whether click events will not trigger the ripple. It can still be triggered by manually
     * calling createRipple()
     */
    disabled: boolean;
    /**
     * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
     * will be the distance from the center of the ripple to the furthest corner of the host element's
     * bounding rectangle.
     */
    radius: number;
    /**
     * If set, the normal duration of ripple animations is divided by this value. For example,
     * setting it to 0.5 will cause the animations to take twice as long.
     * A changed speedFactor will not modify the fade-out duration of the ripples.
     */
    speedFactor: number;
    /** Custom color for ripples. */
    color: string;
    /** Whether foreground ripples should be visible outside the component's bounds. */
    unbounded: boolean;
    /** Renderer for the ripple DOM manipulations. */
    private _rippleRenderer;
    /** Options that are set globally for all ripples. */
    private _globalOptions;
    constructor(elementRef: ElementRef, ngZone: NgZone, ruler: ViewportRuler, globalOptions: any);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /** Launches a manual ripple at the specified position. */
    launch(pageX: number, pageY: number, config?: RippleConfig): RippleRef;
    /** Fades out all currently showing ripple elements. */
    fadeOutAll(): void;
    /** Ripple configuration from the directive's input values. */
    readonly rippleConfig: RippleConfig;
}
