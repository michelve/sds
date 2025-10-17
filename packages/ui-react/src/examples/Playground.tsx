// Paste your code here and it will render directly
import { Hero } from "compositions"
import { FormBox } from "compositions"
import { ButtonGroup } from "primitives"
import { Button } from "primitives"
import { TextareaField } from "primitives"
import { InputField } from "primitives"
import { TextContentTitle } from "primitives"


export function Playground() {
  return (
    <div>
      <Hero variant="subtle">
      <TextContentTitle
align="center"
title="Title"
subtitle="Subtitle"
color="default"
/>
    <FormBox onSubmit={() => {}}>
        <InputField
            label="Name"
            placeholder="Value"
        />
        <InputField
            label="Surname"
            placeholder="Value"
        />
        <InputField
            label="Email"
            placeholder="Value"
        />
        <TextareaField
            label="Message"
            placeholder="Value"
        />
        <ButtonGroup align="justify">
            <Button
                onPress={() => {}}
                variant="primary"
            >
                Submit
            </Button>
        </ButtonGroup>
    </FormBox>
</Hero>
    </div>
  );
}



