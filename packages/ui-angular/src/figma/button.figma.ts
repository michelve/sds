import figma, { html } from "@figma/code-connect/html";

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
  "https://www.figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=4185-3778",
  {
    props: {
      ...sharedProps,
      variant: figma.enum("Variant", {
        Primary: "primary",
        Neutral: "neutral",
        Subtle: "subtle",
      }),
    },
    example: ({ label, iconEnd, iconStart, isDisabled, size, variant }) => 
      html`<sds-button 
        variant="${variant}"
        size="${size}"
        [disabled]="${isDisabled}"
        iconStart="${iconStart}"
        iconEnd="${iconEnd}"
      >
        ${label}
      </sds-button>`
  }
);

figma.connect(
  "https://www.figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=185-852",
  {
    props: {
      ...sharedProps,
      variant: figma.enum("Variant", {
        Subtle: "danger-subtle",
      }),
    },
    example: ({ label, iconEnd, iconStart, isDisabled, size, variant }) => 
      html`<sds-button 
        variant="${variant}"
        size="${size}"
        [disabled]="${isDisabled}"
        iconStart="${iconStart}"
        iconEnd="${iconEnd}"
      >
        ${label}
      </sds-button>`
  }
);

figma.connect(
  "https://www.figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=11-11508",
  {
    props: {
      icon: figma.instance("Icon"),
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
        Large: "large",
      }),
      isDisabled: figma.enum("State", {
        Disabled: true,
      }),
      variant: figma.enum("Variant", {
        Primary: "primary",
        Neutral: "neutral",
        Subtle: "subtle",
      }),
    },
    example: ({ icon, isDisabled, size, variant }) => 
      html`<sds-icon-button 
        variant="${variant}"
        size="${size}"
        [disabled]="${isDisabled}"
        aria-label="Icon button"
      >
        ${icon}
      </sds-icon-button>`
  }
);

figma.connect(
  "https://www.figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2072-9432",
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
    example: ({ children, align }) => 
      html`<sds-button-group align="${align}">
        ${children}
      </sds-button-group>`
  }
);

