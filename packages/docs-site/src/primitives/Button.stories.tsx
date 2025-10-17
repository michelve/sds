import type { Meta, StoryObj } from "@storybook/react";
import figma from "@figma/code-connect";
import { IconActivity, IconArrowLeft } from "icons";
import { Button, ButtonDanger, ButtonGroup } from "primitives";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "SDS Primitives/Buttons",
  parameters: { layout: "centered" },
};
export default meta;

// Example function for Figma Code Connect
export function StoryButtonExample({ children, variant, size, disabled }: any) {
  return (
    <Button variant={variant} size={size} disabled={disabled}>
      {children}
    </Button>
  );
}

export const StoryButton: StoryObj<typeof Button> = {
  name: "Button",
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:426',
      examples: [StoryButtonExample],
      imports: ['import { Button } from "@sds/ui-react"'],
      props: {
        children: figma.string('Label'),
        variant: figma.enum('Variant', {
          Primary: 'primary',
          Neutral: 'neutral',
          Subtle: 'subtle',
        }),
        size: figma.enum('Size', {
          Small: 'small',
          Medium: 'medium',
          Large: 'large',
        }),
        disabled: figma.enum('State', {
          Disabled: true,
        }),
      }
    }
  },
  args: {
    children: "Hello world",
    variant: "primary",
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "neutral", "subtle"],
    },
  },
  render: ({ children, ...props }) => (
    <Button {...props}>
      <IconArrowLeft />
      {children}
      <IconActivity />
    </Button>
  ),
};

// Example function for Figma Code Connect - Button Danger
export function StoryButtonDangerExample({ children, variant, size, disabled }: any) {
  return (
    <ButtonDanger variant={variant} size={size} disabled={disabled}>
      {children}
    </ButtonDanger>
  );
}

export const StoryButtonDanger: StoryObj<typeof ButtonDanger> = {
  name: "Button Danger",
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=185-852',
      examples: [StoryButtonDangerExample],
      imports: ['import { ButtonDanger } from "@sds/ui-react"'],
      props: {
        children: figma.string('Label'),
        variant: figma.enum('Variant', {
          Subtle: 'danger-subtle',
        }),
        size: figma.enum('Size', {
          Small: 'small',
          Medium: 'medium',
          Large: 'large',
        }),
        disabled: figma.enum('State', {
          Disabled: true,
        }),
      }
    }
  },
  args: {
    children: "Hello world",
    variant: "danger-primary",
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
    },
    variant: {
      control: { type: "select" },
      options: ["danger-primary", "danger-subtle"],
    },
  },
  render: ({ children, ...props }) => (
    <ButtonDanger {...props}>
      <IconArrowLeft />
      {children}
      <IconActivity />
    </ButtonDanger>
  ),
};

// Example function for Figma Code Connect - Button Group
export function StoryButtonGroupExample({ children, align }: any) {
  return (
    <ButtonGroup align={align}>
      {children}
    </ButtonGroup>
  );
}

export const StoryButtonGroup: StoryObj<typeof ButtonGroup> = {
  name: "Button Group",
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2072-9432',
      examples: [StoryButtonGroupExample],
      imports: ['import { ButtonGroup } from "@sds/ui-react"'],
      props: {
        align: figma.enum('Align', {
          Center: 'center',
          End: 'end',
          Justify: 'justify',
          Stack: 'stack',
        }),
        children: figma.children(['Button']),
      }
    }
  },
  args: {
    align: "center",
  },
  argTypes: {
    align: {
      control: { type: "select" },
      options: ["center", "start", "end", "justify", "stack"],
    },
  },
  render: ({ ...props }) => (
    <ButtonGroup {...props} style={{ width: 300 }}>
      <Button variant="neutral">Cancel</Button>
      <Button variant="primary">Submit</Button>
    </ButtonGroup>
  ),
};
