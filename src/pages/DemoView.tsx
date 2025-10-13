import { Hero, FormBox } from "compositions";
import { ButtonGroup, Button, TextareaField, InputField, TextContentTitle } from "primitives";

export function DemoView() {
  return (
    <>
      
      <Hero variant="subtle">
        <TextContentTitle
          align="center"
          title="Demo View"
          subtitle="Test your components here"
        />
        <FormBox onSubmit={() => {}}>
          <InputField
            label="Name"
            placeholder="Enter your name"
          />
          <InputField
            label="Surname"
            placeholder="Enter your surname"
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
          />
          <TextareaField
            label="Message"
            placeholder="Enter your message"
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
    </>
  );
}