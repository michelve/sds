import * as i0 from '@angular/core';
import { HostBinding, Input, Component } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class ButtonComponent {
    variant = 'primary';
    size = 'medium';
    disabled = false;
    type = 'button';
    iconStart;
    iconEnd;
    get cssClasses() {
        return [
            'button',
            `button-size-${this.size}`,
            `button-variant-${this.variant}`,
            this.disabled ? 'button-disabled' : ''
        ].filter(Boolean).join(' ');
    }
    get isDisabled() {
        return this.disabled ? true : null;
    }
    get buttonType() {
        return this.type;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ButtonComponent, isStandalone: true, selector: "sds-button", inputs: { variant: "variant", size: "size", disabled: "disabled", type: "type", iconStart: "iconStart", iconEnd: "iconEnd" }, host: { properties: { "class": "this.cssClasses", "attr.disabled": "this.isDisabled", "attr.type": "this.buttonType" } }, ngImport: i0, template: `
    <span *ngIf="iconStart" class="icon icon-start">{{ iconStart }}</span>
    <ng-content></ng-content>
    <span *ngIf="iconEnd" class="icon icon-end">{{ iconEnd }}</span>
  `, isInline: true, styles: [".button{--border-radius: var(--sds-size-radius-200);align-items:center;box-shadow:inset 0 0 0 var(--sds-size-stroke-border) var(--button-border-color);border-radius:var(--border-radius);background:var(--button-background-color);color:var(--button-color);cursor:pointer;display:inline-flex;font:var(--button-font);gap:var(--sds-size-space-200);justify-content:center;line-height:1;padding:var(--button-padding-y) var(--button-padding-x);position:relative;white-space:nowrap;border:none;text-decoration:none;outline:none;transition:all .2s ease}.button>.icon{--icon-color: var(--button-color)}.button-size-small{--button-font: var(--sds-font-body-small);--button-padding-x: var(--sds-size-space-200);--button-padding-y: var(--sds-size-space-200)}.button-size-small>.icon{--icon-diameter: var(--sds-typography-scale-02)}.button-size-medium{--button-font: var(--sds-font-body-base);--button-padding-x: var(--sds-size-space-300);--button-padding-y: var(--sds-size-space-300)}.button-size-medium>.icon{--icon-diameter: var(--sds-typography-scale-03)}.button-size-large{--button-font: var(--sds-font-body-large);--button-padding-x: var(--sds-size-space-400);--button-padding-y: var(--sds-size-space-400)}.button-size-large>.icon{--icon-diameter: var(--sds-typography-scale-04)}.button-variant-primary{--button-background-color: var(--sds-color-background-action-primary-default);--button-color: var(--sds-color-text-action-primary-default);--button-border-color: var(--sds-color-background-action-primary-default)}.button-variant-primary:hover{--button-background-color: var(--sds-color-background-action-primary-hover);--button-border-color: var(--sds-color-background-action-primary-hover)}.button-variant-primary:active{--button-background-color: var(--sds-color-background-action-primary-active);--button-border-color: var(--sds-color-background-action-primary-active)}.button-variant-neutral{--button-background-color: var(--sds-color-background-action-neutral-default);--button-color: var(--sds-color-text-action-neutral-default);--button-border-color: var(--sds-color-border-action-neutral-default)}.button-variant-neutral:hover{--button-background-color: var(--sds-color-background-action-neutral-hover);--button-border-color: var(--sds-color-border-action-neutral-hover)}.button-variant-neutral:active{--button-background-color: var(--sds-color-background-action-neutral-active);--button-border-color: var(--sds-color-border-action-neutral-active)}.button-variant-subtle{--button-background-color: var(--sds-color-background-action-subtle-default);--button-color: var(--sds-color-text-action-subtle-default);--button-border-color: var(--sds-color-border-action-subtle-default)}.button-variant-subtle:hover{--button-background-color: var(--sds-color-background-action-subtle-hover);--button-border-color: var(--sds-color-border-action-subtle-hover)}.button-variant-subtle:active{--button-background-color: var(--sds-color-background-action-subtle-active);--button-border-color: var(--sds-color-border-action-subtle-active)}.button-disabled{opacity:.5;cursor:not-allowed;pointer-events:none}.button:focus-visible{outline:2px solid var(--sds-color-border-focus);outline-offset:2px}.button-variant-danger-primary{--button-background-color: var(--sds-color-background-danger-default);--button-border-color: var(--sds-color-border-danger-secondary);--button-color: var(--sds-color-text-danger-on-danger)}.button-variant-danger-primary:hover{--button-background-color: var(--sds-color-background-danger-hover);--button-border-color: var(--sds-color-border-danger-default)}.button-variant-danger-subtle{--button-background-color: transparent;--button-border-color: transparent;--button-color: var(--sds-color-text-danger-default)}.button-variant-danger-subtle:hover{--button-background-color: var(--sds-color-background-danger-tertiary-hover)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sds-button', standalone: true, imports: [CommonModule], template: `
    <span *ngIf="iconStart" class="icon icon-start">{{ iconStart }}</span>
    <ng-content></ng-content>
    <span *ngIf="iconEnd" class="icon icon-end">{{ iconEnd }}</span>
  `, styles: [".button{--border-radius: var(--sds-size-radius-200);align-items:center;box-shadow:inset 0 0 0 var(--sds-size-stroke-border) var(--button-border-color);border-radius:var(--border-radius);background:var(--button-background-color);color:var(--button-color);cursor:pointer;display:inline-flex;font:var(--button-font);gap:var(--sds-size-space-200);justify-content:center;line-height:1;padding:var(--button-padding-y) var(--button-padding-x);position:relative;white-space:nowrap;border:none;text-decoration:none;outline:none;transition:all .2s ease}.button>.icon{--icon-color: var(--button-color)}.button-size-small{--button-font: var(--sds-font-body-small);--button-padding-x: var(--sds-size-space-200);--button-padding-y: var(--sds-size-space-200)}.button-size-small>.icon{--icon-diameter: var(--sds-typography-scale-02)}.button-size-medium{--button-font: var(--sds-font-body-base);--button-padding-x: var(--sds-size-space-300);--button-padding-y: var(--sds-size-space-300)}.button-size-medium>.icon{--icon-diameter: var(--sds-typography-scale-03)}.button-size-large{--button-font: var(--sds-font-body-large);--button-padding-x: var(--sds-size-space-400);--button-padding-y: var(--sds-size-space-400)}.button-size-large>.icon{--icon-diameter: var(--sds-typography-scale-04)}.button-variant-primary{--button-background-color: var(--sds-color-background-action-primary-default);--button-color: var(--sds-color-text-action-primary-default);--button-border-color: var(--sds-color-background-action-primary-default)}.button-variant-primary:hover{--button-background-color: var(--sds-color-background-action-primary-hover);--button-border-color: var(--sds-color-background-action-primary-hover)}.button-variant-primary:active{--button-background-color: var(--sds-color-background-action-primary-active);--button-border-color: var(--sds-color-background-action-primary-active)}.button-variant-neutral{--button-background-color: var(--sds-color-background-action-neutral-default);--button-color: var(--sds-color-text-action-neutral-default);--button-border-color: var(--sds-color-border-action-neutral-default)}.button-variant-neutral:hover{--button-background-color: var(--sds-color-background-action-neutral-hover);--button-border-color: var(--sds-color-border-action-neutral-hover)}.button-variant-neutral:active{--button-background-color: var(--sds-color-background-action-neutral-active);--button-border-color: var(--sds-color-border-action-neutral-active)}.button-variant-subtle{--button-background-color: var(--sds-color-background-action-subtle-default);--button-color: var(--sds-color-text-action-subtle-default);--button-border-color: var(--sds-color-border-action-subtle-default)}.button-variant-subtle:hover{--button-background-color: var(--sds-color-background-action-subtle-hover);--button-border-color: var(--sds-color-border-action-subtle-hover)}.button-variant-subtle:active{--button-background-color: var(--sds-color-background-action-subtle-active);--button-border-color: var(--sds-color-border-action-subtle-active)}.button-disabled{opacity:.5;cursor:not-allowed;pointer-events:none}.button:focus-visible{outline:2px solid var(--sds-color-border-focus);outline-offset:2px}.button-variant-danger-primary{--button-background-color: var(--sds-color-background-danger-default);--button-border-color: var(--sds-color-border-danger-secondary);--button-color: var(--sds-color-text-danger-on-danger)}.button-variant-danger-primary:hover{--button-background-color: var(--sds-color-background-danger-hover);--button-border-color: var(--sds-color-border-danger-default)}.button-variant-danger-subtle{--button-background-color: transparent;--button-border-color: transparent;--button-color: var(--sds-color-text-danger-default)}.button-variant-danger-subtle:hover{--button-background-color: var(--sds-color-background-danger-tertiary-hover)}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], size: [{
                type: Input
            }], disabled: [{
                type: Input
            }], type: [{
                type: Input
            }], iconStart: [{
                type: Input
            }], iconEnd: [{
                type: Input
            }], cssClasses: [{
                type: HostBinding,
                args: ['class']
            }], isDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], buttonType: [{
                type: HostBinding,
                args: ['attr.type']
            }] } });

/*
 * Public API Surface of @sds/ui-angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent };
//# sourceMappingURL=sds-ui-angular.mjs.map
