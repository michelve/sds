<template>
  <button
    :class="buttonClasses"
    :disabled="isDisabled"
    @click="$emit('click', $event)"
  >
    <component
      v-if="iconStart"
      :is="iconStart"
      class="sds-button__icon sds-button__icon--start"
    />
    <span v-if="label" class="sds-button__label">{{ label }}</span>
    <component
      v-if="iconEnd"
      :is="iconEnd"
      class="sds-button__icon sds-button__icon--end"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface ButtonProps {
  label?: string;
  variant?: 'primary' | 'neutral' | 'subtle' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isDisabled?: boolean;
  iconStart?: any;
  iconEnd?: any;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'medium',
  isDisabled: false,
});

defineEmits<{
  click: [event: MouseEvent];
}>();

const buttonClasses = computed(() => [
  'sds-button',
  `sds-button--${props.variant}`,
  `sds-button--${props.size}`,
  {
    'sds-button--disabled': props.isDisabled,
    'sds-button--icon-only': !props.label && (props.iconStart || props.iconEnd),
  },
]);
</script>

<style scoped>
.sds-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--sds-size-spacing-2);
  padding: var(--sds-size-spacing-3) var(--sds-size-spacing-6);
  border: none;
  border-radius: var(--sds-size-border-radius-1);
  font-family: var(--sds-typography-font-family-sans);
  font-weight: var(--sds-typography-font-weight-medium);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.sds-button--primary {
  background-color: var(--sds-color-primary-500);
  color: var(--sds-color-neutral-50);
}

.sds-button--primary:hover {
  background-color: var(--sds-color-primary-600);
}

.sds-button--neutral {
  background-color: var(--sds-color-neutral-100);
  color: var(--sds-color-neutral-900);
  border: 1px solid var(--sds-color-neutral-300);
}

.sds-button--neutral:hover {
  background-color: var(--sds-color-neutral-200);
}

.sds-button--subtle {
  background-color: transparent;
  color: var(--sds-color-primary-600);
}

.sds-button--subtle:hover {
  background-color: var(--sds-color-primary-50);
}

.sds-button--danger {
  background-color: var(--sds-color-error-500);
  color: var(--sds-color-neutral-50);
}

.sds-button--danger:hover {
  background-color: var(--sds-color-error-600);
}

.sds-button--small {
  padding: var(--sds-size-spacing-2) var(--sds-size-spacing-4);
  font-size: var(--sds-typography-font-size-sm);
}

.sds-button--large {
  padding: var(--sds-size-spacing-4) var(--sds-size-spacing-8);
  font-size: var(--sds-typography-font-size-lg);
}

.sds-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.sds-button--icon-only {
  padding: var(--sds-size-spacing-3);
}

.sds-button__icon {
  width: 1em;
  height: 1em;
}
</style>