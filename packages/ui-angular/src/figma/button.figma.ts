import figma from "@figma/code-connect";

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

figma.connect(
  "<FIGMA_BUTTONS_BUTTON>",
  {
    props: {
      ...sharedProps,
      variant: figma.enum("Variant", {
        Primary: "primary",
        Neutral: "neutral",
        Subtle: "subtle",
      }),
    },
    example: ({ label, iconEnd, iconStart, isDisabled, size, variant }) => `
      <sds-button 
        variant="${variant}"
        size="${size}"
        ${isDisabled ? '[disabled]="true"' : ''}
        ${iconStart ? `iconStart="${iconStart}"` : ''}
        ${iconEnd ? `iconEnd="${iconEnd}"` : ''}
      >
        ${label}
      </sds-button>`
  }
);

figma.connect(
  "<FIGMA_BUTTONS_BUTTON_DANGER>",
  {
    props: {
      ...sharedProps,
      variant: figma.enum("Variant", {
        Subtle: "danger-subtle",
      }),
    },
    example: ({ label, iconEnd, iconStart, isDisabled, size, variant }) => `
      <sds-button 
        variant="${variant}"
        size="${size}"
        ${isDisabled ? '[disabled]="true"' : ''}
        ${iconStart ? `iconStart="${iconStart}"` : ''}
        ${iconEnd ? `iconEnd="${iconEnd}"` : ''}
      >
        ${label}
      </sds-button>`
  }
);

figma.connect(
  "<FIGMA_BUTTONS_BUTTON_GROUP>",
  {
    props: {
      align: figma.enum("Align", {
        Center: "center",
        End: "end",
        Justify: "justify",
        Stack: "stack",
      }),
      children: figma.children(["Button"]),
    },
    example: ({ children, align }) => `
      <sds-button-group align="${align}">
        ${children}
      </sds-button-group>`
  }
);