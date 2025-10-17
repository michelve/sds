import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'neutral' | 'subtle' | 'danger-primary' | 'danger-subtle';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'sds-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span *ngIf="iconStart" class="icon icon-start">{{ iconStart }}</span>
    <ng-content></ng-content>
    <span *ngIf="iconEnd" class="icon icon-end">{{ iconEnd }}</span>
  `,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() iconStart?: string;
  @Input() iconEnd?: string;

  @HostBinding('class') 
  get cssClasses(): string {
    return [
      'button',
      `button-size-${this.size}`,
      `button-variant-${this.variant}`,
      this.disabled ? 'button-disabled' : ''
    ].filter(Boolean).join(' ');
  }

  @HostBinding('attr.disabled')
  get isDisabled(): boolean | null {
    return this.disabled ? true : null;
  }

  @HostBinding('attr.type')
  get buttonType(): string {
    return this.type;
  }
}