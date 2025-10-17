import * as i0 from "@angular/core";
export type ButtonVariant = 'primary' | 'neutral' | 'subtle' | 'danger-primary' | 'danger-subtle';
export type ButtonSize = 'small' | 'medium' | 'large';
export declare class ButtonComponent {
    variant: ButtonVariant;
    size: ButtonSize;
    disabled: boolean;
    type: 'button' | 'submit' | 'reset';
    iconStart?: string;
    iconEnd?: string;
    get cssClasses(): string;
    get isDisabled(): boolean | null;
    get buttonType(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "sds-button", never, { "variant": { "alias": "variant"; "required": false; }; "size": { "alias": "size"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "type": { "alias": "type"; "required": false; }; "iconStart": { "alias": "iconStart"; "required": false; }; "iconEnd": { "alias": "iconEnd"; "required": false; }; }, {}, never, ["*"], true, never>;
}
