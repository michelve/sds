import figma from "@figma/code-connect";
import { Button, ButtonDanger, ButtonGroup } from "primitives";

const sharedProps = {
  label: figma.string("Label"),
  iconStart: figma.boolean("Has Icon Start", {
    true: figma.instance("Icon Start"),
    false: undefined,
  }),
  iconEnd: figma.boolean("Has Icon End", {
    true: figma.instance("Icon End"),
    false: undefined,
  }),
  size: figma.enum("Size", {
    Small: "small",
  }),
  isDisabled: figma.enum("State", {
    Disabled: true,
  }),
};

figma.connect(Button, "<FIGMA_BUTTONS_BUTTON>", {
  description: "Primary action button for forms, navigation, and user interactions",
  props: {
    ...sharedProps,
    variant: figma.enum("Variant", {
      Primary: "primary",
      Neutral: "neutral",
      Subtle: "subtle",
    }),
  },
  example: ({ label, iconEnd, iconStart, ...props }) => (
    <Button onPress={() => {}} {...props}>
      {iconStart}
      {label}
      {iconEnd}
    </Button>
  ),
});
figma.connect(Button, "<FIGMA_BUTTONS_BUTTON_DANGER>", {
  description: "Destructive action button for delete, remove, or irreversible actions",
  props: {
    ...sharedProps,
    variant: figma.enum("Variant", {
      Subtle: "danger-subtle",
    }),
  },
  example: ({ label, iconEnd, iconStart, ...props }) => (
    <ButtonDanger onPress={() => {}} {...props}>
      {iconStart}
      {label}
      {iconEnd}
    </ButtonDanger>
  ),
});

figma.connect(ButtonGroup, "<FIGMA_BUTTONS_BUTTON_GROUP>", {
  description: "Container for grouping related buttons with consistent spacing",
  props: {
    align: figma.enum("Align", {
      Center: "center",
      End: "end",
      Justify: "justify",
      Stack: "stack",
    }),
    children: figma.children(["Button"]),
  },
  example: ({ children, ...props }) => (
    <ButtonGroup {...props}>{children}</ButtonGroup>
  ),
});
