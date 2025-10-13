import figma, {react} from '@figma/code-connect/react';
import { Button, ButtonDanger, ButtonGroup, Icon } from 'primitives';

// NOTE: Use string literals for URLs (required by the parser)

// Map Figma display names to SDS prop values – update display names to match the Figma properties exactly
const VariantMap = {
  Primary: 'primary',
  Neutral: 'neutral',
  Subtle: 'subtle',
} as const;

const SizeMap = {
  Small: 'small',
  Medium: 'medium',
} as const;

// Regular Button
figma.connect(
  'https://www.figma.com/design/QkCVMrKpIW8zdiI05xNLho/Simple-Design-System?node-id=4185-3778&m=dev',
  {
    props: {
      Variant: figma.enum('Variant', {
        Primary: 'primary',
        Neutral: 'neutral',
        Subtle: 'subtle',
      }),
      Size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
      }),
      Label: figma.string('Label'),
      // Optional link behavior (Button can render an anchor when href is set)
      Href: figma.string('Href'),
      // Optional aria-label if you support it
      AriaLabel: figma.string('Aria Label'),
      Disabled: figma.boolean('Disabled'),
    },
    example: props =>
      react`
        <Button
          variant=${props.Variant}
          size=${props.Size}
          ${props.Disabled ? 'isDisabled' : ''}
          ${props.Href ? `href="${props.Href}"` : ''}
          ${props.AriaLabel ? `aria-label="${props.AriaLabel}"` : ''}
        >
          ${props.Label}
        </Button>
      `,
  },
);

// Danger Button (destructive)
figma.connect(
  'https://www.figma.com/design/QkCVMrKpIW8zdiI05xNLho/Simple-Design-System?node-id=185-852&m=dev',
  {
    props: {
      Size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
      }),
      Label: figma.string('Label'),
      Href: figma.string('Href'),
      AriaLabel: figma.string('Aria Label'),
      Disabled: figma.boolean('Disabled'),
    },
    example: props =>
      react`
        <ButtonDanger
          size=${props.Size}
          ${props.Disabled ? 'isDisabled' : ''}
          ${props.Href ? `href="${props.Href}"` : ''}
          ${props.AriaLabel ? `aria-label="${props.AriaLabel}"` : ''}
        >
          ${props.Label}
        </ButtonDanger>
      `,
  },
);

// Button Group
figma.connect(
  'https://www.figma.com/design/QkCVMrKpIW8zdiI05xNLho/Simple-Design-System?node-id=2072-9432&m=dev',
  {
    props: {
      Align: figma.enum('Align', {
        Start: 'start',
        End: 'end',
        Center: 'center',
        Justify: 'justify',
        Stack: 'stack',
      }),
      PrimaryLabel: figma.string('Primary Label'),
      SecondaryLabel: figma.string('Secondary Label'),
      DisabledPrimary: figma.boolean('Primary Disabled'),
      DisabledSecondary: figma.boolean('Secondary Disabled'),
    },
    example: props =>
      react`
        <ButtonGroup align=${props.Align}>
          <Button variant="primary" ${props.DisabledPrimary ? 'isDisabled' : ''}>${props.PrimaryLabel}</Button>
          <Button variant="neutral" ${props.DisabledSecondary ? 'isDisabled' : ''}>${props.SecondaryLabel}</Button>
        </ButtonGroup>
      `,
  },
);

// Icon Button (Button with leading icon)
figma.connect(
  'https://www.figma.com/design/QkCVMrKpIW8zdiI05xNLho/Simple-Design-System?node-id=11-11508&m=dev',
  {
    props: {
      Variant: figma.enum('Variant', {
        Primary: 'primary',
        Neutral: 'neutral',
        Subtle: 'subtle',
      }),
      Size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
      }),
      Label: figma.string('Label'),
      IconName: figma.string('Icon Name'), // name of the icon component to render
      Disabled: figma.boolean('Disabled'),
      AriaLabel: figma.string('Aria Label'),
    },
    example: props =>
      react`
        <Button
          variant=${props.Variant}
          size=${props.Size}
          ${props.Disabled ? 'isDisabled' : ''}
          ${props.AriaLabel ? `aria-label="${props.AriaLabel}"` : ''}
        >
          ${props.IconName ? react`<Icon name="${props.IconName}" />` : ''}
          ${props.Label}
        </Button>
      `,
  },
);


