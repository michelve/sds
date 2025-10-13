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
      State: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Disabled: 'disabled',
      }),
      Size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
      }),
      Label: figma.string('Label'),
      HasIconStart: figma.boolean('Has Icon Start'),
      HasIconEnd: figma.boolean('Has Icon End'),
      IconStart: figma.string('Icon Start'),
      IconEnd: figma.string('Icon End'),
    },
    example: props =>
      react`
        <Button
          variant=${props.Variant}
          size=${props.Size}
          ${props.State === 'disabled' ? 'isDisabled' : ''}
          data-state=${props.State}
        >
          ${props.HasIconStart ? react`<Icon />` : ''}
          ${props.IconStart ? react`<Icon />` : ''}
          ${props.Label}
          ${props.HasIconEnd ? react`<Icon />` : ''}
          ${props.IconEnd ? react`<Icon />` : ''}
        </Button>
      `,
  },
);

// Danger Button (destructive)
figma.connect(
  'https://www.figma.com/design/QkCVMrKpIW8zdiI05xNLho/Simple-Design-System?node-id=185-852&m=dev',
  {
    props: {
      Variant: figma.enum('Variant', {
        Primary: 'danger-primary',
        Subtle: 'danger-subtle',
      }),
      Size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
      }),
      State: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Disabled: 'disabled',
      }),
      Label: figma.string('Label'),
      HasIconStart: figma.boolean('Has Icon Start'),
      HasIconEnd: figma.boolean('Has Icon End'),
      IconStart: figma.string('Icon Start'),
      IconEnd: figma.string('Icon End'),
    },
    example: props =>
      react`
        <ButtonDanger
          variant=${props.Variant}
          size=${props.Size}
          ${props.State === 'disabled' ? 'isDisabled' : ''}
          data-state=${props.State}
        >
          ${props.HasIconStart ? react`<Icon />` : ''}
          ${props.IconStart ? react`<Icon />` : ''}
          ${props.Label}
          ${props.HasIconEnd ? react`<Icon />` : ''}
          ${props.IconEnd ? react`<Icon />` : ''}
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
        Justify: 'justify',
        Start: 'start',
        End: 'end',
        Center: 'center',
      }),
      ButtonStart: figma.boolean('Button Start'),
      ButtonEnd: figma.boolean('Button End'),
    },
    example: props =>
      react`
        <ButtonGroup align=${props.Align}>
          ${props.ButtonStart ? react`<Button variant="primary">Start</Button>` : ''}
          ${props.ButtonEnd ? react`<Button variant="neutral">End</Button>` : ''}
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
      State: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Disabled: 'disabled',
      }),
      Icon: figma.string('Icon'),
    },
    example: props =>
      react`
        <Button
          variant=${props.Variant}
          size=${props.Size}
          ${props.State === 'disabled' ? 'isDisabled' : ''}
          data-state=${props.State}
        >
          ${props.Icon ? react`<Icon />` : ''}
        </Button>
      `,
  },
);


