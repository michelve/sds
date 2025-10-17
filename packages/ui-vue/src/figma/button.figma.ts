import figma, { html } from "@figma/code-connect/html";

const sharedProps = {
  label: figma.string("Label"),
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
    example: (props) => html`
      <Button
        :label="${props.label}"
        variant="${props.variant}"
        size="${props.size}"
        :is-disabled="${props.isDisabled}"
      />
    `,
  }
);

figma.connect(
  "<FIGMA_BUTTONS_BUTTON_DANGER>",
  {
    props: {
      ...sharedProps,
      variant: figma.enum("Variant", {
        Danger: "danger",
      }),
    },
    example: (props) => html`
      <Button
        :label="${props.label}"
        variant="${props.variant}"
        size="${props.size}"
        :is-disabled="${props.isDisabled}"
      />
    `,
  }
);

figma.connect(
  "<FIGMA_BUTTONS_ICON_BUTTON>",
  {
    props: {
      size: figma.enum("Size", {
        Small: "small",
      }),
      isDisabled: figma.enum("State", {
        Disabled: true,
      }),
      variant: figma.enum("Variant", {
        Primary: "primary",
        Neutral: "neutral",
        Subtle: "subtle",
        Danger: "danger",
      }),
    },
    example: (props) => html`
      <Button
        variant="${props.variant}"
        size="${props.size}"
        :is-disabled="${props.isDisabled}"
        icon-start="icon"
      />
    `,
  }
);

figma.connect(
  "<FIGMA_BUTTONS_BUTTON_GROUP>",
  {
    props: {
      buttons: figma.children("*"),
    },
    example: (props) => html`
      <div class="button-group">
        ${props.buttons}
      </div>
    `,
  }
);