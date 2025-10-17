import { Card, Hero, Header } from "compositions";
import { Flex, FlexItem, Section } from "layout";
import { Image } from "primitives";
import { TextContentHeading, Text, TextHeading, TextList, TextListItem, Button, ButtonGroup, InputField, CheckboxField, TextareaField, Avatar, AvatarBlock } from "primitives";
import { placeholder } from "images";
import { TextContentTitle } from "primitives"
import { TestimonialCard } from "compositions"
    

export function Demo90() {
  return (
    <>
      <Header />
      <Hero variant="subtle">
        <ButtonGroup align="justify" />
      </Hero>

      <Hero variant="subtle">
    <TextContentTitle
        align="center"
        title="Title"
        subtitle="Subtitle"
        color="default"
    />
    <ButtonGroup align="justify">
        <Button
            onPress={() => {}}
            variant="neutral"
        >
            Button
        </Button>
        <Button
            onPress={() => {}}
            variant="primary"
        >
            Button
        </Button>
    </ButtonGroup>
</Hero>

<Section padding="1200">
    <Flex
        container
        gap="1200"
        direction="column"
        alignSecondary="stretch"
    >
        <TextContentHeading
            heading="Heading"
            subheading="Subheading"
            color="default"
        />
        <FlexItem>
            <Flex
                wrap
                type="third"
                gap="1200"
            >
                <TestimonialCard
                  heading="Text Heading"
                  src={placeholder}
                  name="Title"
                  username="Description"
                />
                <TestimonialCard
                  heading="Text Heading"
                  src={placeholder}
                  name="Title"
                  username="Description"
                />
                <TestimonialCard
                  heading="Text Heading"
                  src={placeholder}
                  name="Title"
                  username="Description"
                />
                <TestimonialCard
                  heading="Text Heading"
                  src={placeholder}
                  name="Title"
                  username="Description"
                />
                <TestimonialCard
                  heading="Text Heading"
                  src={placeholder}
                  name="Title"
                  username="Description"
                />
                <TestimonialCard
                  heading="Text Heading"
                  src={placeholder}
                  name="Title"
                  username="Description"
                />
            </Flex>
        </FlexItem>
    </Flex>
</Section>


    </>
  );
}

export default Demo90;


