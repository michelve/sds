import { Meta, StoryObj } from "@storybook/react";
import { FormBox, FormWithTitle } from "compositions";
import { Button, ButtonGroup, CheckboxField, InputField } from "primitives";

const meta: Meta<typeof FormBox> = {
  component: FormBox,
  title: "SDS Compositions/Forms",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryFormBox: StoryObj<typeof FormBox> = {
  args: {
    singleLine: false,
  },

  name: "Forms",

  render: (args) => (
    <FormBox {...args} onSubmit={() => {}}>
      <InputField label="Email" />
      <InputField label="Password" />
      <CheckboxField label="Label" description="Description" />
      <ButtonGroup align="justify">
        <Button onPress={() => {}} variant="primary">
          Register
        </Button>
      </ButtonGroup>
    </FormBox>
  ),
};

export const StoryFormWithTitle: StoryObj<typeof FormWithTitle> = {
  name: "Form With Title",
  render: () => (
    <div style={{ maxWidth: 800 }}>
      <FormWithTitle
        title="Title"
        subtitle="Subtitle"
        onSubmit={() => {}}
      >
        <InputField label="Email" />
        <InputField label="Password" />
        <CheckboxField label="Label" description="Description" />
        <ButtonGroup align="justify">
          <Button onPress={() => {}} variant="primary">
            Register
          </Button>
        </ButtonGroup>
      </FormWithTitle>
    </div>
  ),
};
