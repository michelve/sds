import { Meta, StoryObj } from "@storybook/react";
import { Flex, FlexItem, Section } from "layout";
import {
  Logo,
  Text,
  TextHeading,
  TextLink,
  TextLinkList,
  TextListItem,
} from "primitives";

const meta: Meta<typeof HTMLIFrameElement> = {
  title: "SDS/Hello",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryHello: StoryObj<{}> = {
  name: "Hello",
  render: () => (
    <Section>
      <Flex container type="third" alignPrimary="center">
        <FlexItem size="major">
          <Flex direction="column" gap="300">
            
            <TextHeading>Simple Design System</TextHeading>
            <Text>
              Simple Design System (SDS) is a base design system that shows how
              Variables, Styles, Components, and Code Connect can be used
              alongside a React and CSS codebase.
            </Text>
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  ),
};
