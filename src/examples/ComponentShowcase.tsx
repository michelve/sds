import { useId } from "react";
import { Hero } from "compositions";
import { Flex, Grid, Section } from "layout";
import {
  Accordion,
  AccordionItem,
  Avatar,
  AvatarGroup,
  Button,
  ButtonDanger,
  CheckboxField,
  InputField,
  Label,
  Link,
  ListBox,
  ListBoxItem,
  Logo,
  MenuButton,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuShortcut,
  Navigation,
  NavigationButton,
  NavigationPill,
  Notification,
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  RadioField,
  RadioGroup,
  Search,
  SelectField,
  SelectItem,
  SliderField,
  SwitchField,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHead,
  TableRow,
  Tag,
  TagToggle,
  TagToggleGroup,
  TagToggleList,
  Text,
  TextHeading,
  TextSmall,
  TextStrong,
  TextareaField,
  Tooltip,
} from "primitives";
import {
  IconHome,
  IconSettings,
  IconUser,
  IconAlertCircle,
  IconCheckCircle,
  IconMenu,
} from "icons";

const ShowcaseSection = ({
  title,
  children,
  columns = 1,
}: {
  title: string;
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
}) => (
  <Section style={{ marginBottom: "var(--size-800)" }}>
    <TextHeading style={{ marginBottom: "var(--size-500)" }}>
      {title}
    </TextHeading>
    {columns === 1 ? (
      <Flex direction="column" gap="600">
        {children}
      </Flex>
    ) : (
      <Grid
        gap="600"
        style={{
          gridTemplateColumns: `repeat(auto-fit, minmax(${columns === 2 ? '350px' : '280px'}, 1fr))`
        }}
      >
        {children}
      </Grid>
    )}
  </Section>
);

const VariantCard = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div style={{
    padding: "var(--size-400)",
    border: "1px solid var(--color-stroke-default)",
    borderRadius: "var(--radius-300)",
    backgroundColor: "var(--color-background-default)"
  }}>
    <TextSmall style={{ marginBottom: "var(--size-300)", color: "var(--color-text-subtle)" }}>
      {label}
    </TextSmall>
    <Flex gap="300" direction="column" style={{ alignItems: "flex-start" }}>
      {children}
    </Flex>
  </div>
);

export function ComponentShowcase() {
  const tagId1 = useId();
  const tagId2 = useId();
  const tagId3 = useId();
  const tabId1 = useId();
  const tabId2 = useId();
  const tabId3 = useId();

  return (
    <>
      <Hero variant="brand">
        <Logo />
        <Flex direction="column" gap="400" style={{ textAlign: "center", alignItems: "center", maxWidth: "800px" }}>
          <TextHeading>Simple Design System</TextHeading>
          <Text>
            A comprehensive showcase of all components with their variants.
            Every component is rendered using its actual implementation without style overrides,
            demonstrating the full capabilities of the design system.
          </Text>
        </Flex>
      </Hero>

      <div style={{ padding: "var(--size-800) var(--size-600)", maxWidth: "1600px", margin: "0 auto" }}>

      {/* Buttons */}
      <ShowcaseSection title="Buttons" columns={3}>
        <VariantCard label="Primary Buttons">
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="medium">Medium</Button>
        </VariantCard>

        <VariantCard label="Neutral Buttons">
          <Button variant="neutral" size="small">Small</Button>
          <Button variant="neutral" size="medium">Medium</Button>
        </VariantCard>

        <VariantCard label="Subtle Buttons">
          <Button variant="subtle" size="small">Small</Button>
          <Button variant="subtle" size="medium">Medium</Button>
        </VariantCard>

        <VariantCard label="Danger Buttons">
          <ButtonDanger size="small">Small</ButtonDanger>
          <ButtonDanger size="medium">Medium</ButtonDanger>
          <ButtonDanger variant="danger-subtle" size="medium">Subtle</ButtonDanger>
        </VariantCard>

        <VariantCard label="Disabled State">
          <Button variant="primary" size="medium" isDisabled>
            Disabled Primary
          </Button>
          <Button variant="neutral" size="medium" isDisabled>
            Disabled Neutral
          </Button>
        </VariantCard>
      </ShowcaseSection>

      {/* Form Inputs */}
      <ShowcaseSection title="Form Inputs" columns={2}>
        <VariantCard label="Input Field">
          <InputField label="Default Input" placeholder="Enter text..." />
          <InputField
            label="With Description"
            description="Helpful description"
            placeholder="Enter text..."
          />
          <InputField label="Disabled" placeholder="Disabled" isDisabled />
        </VariantCard>

        <VariantCard label="Textarea">
          <TextareaField label="Textarea" placeholder="Enter long text..." />
          <TextareaField
            label="With Description"
            description="Detailed information"
            placeholder="Enter long text..."
          />
        </VariantCard>

        <VariantCard label="Select">
          <SelectField label="Select" placeholder="Choose...">
            <SelectItem>Option 1</SelectItem>
            <SelectItem>Option 2</SelectItem>
            <SelectItem>Option 3</SelectItem>
          </SelectField>
        </VariantCard>

        <VariantCard label="Search">
          <Search placeholder="Search..." />
        </VariantCard>
      </ShowcaseSection>

      {/* Selection Controls */}
      <ShowcaseSection title="Selection Controls" columns={2}>
        <VariantCard label="Checkbox">
          <CheckboxField label="Default Checkbox" />
          <CheckboxField label="With Description" description="Additional info" />
          <CheckboxField label="Disabled" isDisabled />
        </VariantCard>

        <VariantCard label="Radio">
          <RadioGroup>
            <RadioField value="1" label="Option 1" />
            <RadioField value="2" label="Option 2" />
            <RadioField value="3" label="Disabled" isDisabled />
          </RadioGroup>
        </VariantCard>

        <VariantCard label="Switch">
          <SwitchField label="Toggle Feature" />
          <SwitchField label="With Description" description="Turn this on/off" />
          <SwitchField label="Disabled" isDisabled />
        </VariantCard>

        <VariantCard label="Slider">
          <SliderField label="Volume" showOutput />
          <SliderField
            label="Brightness"
            description="Adjust brightness"
            showOutput
          />
        </VariantCard>
      </ShowcaseSection>

      {/* Tags */}
      <ShowcaseSection title="Tags" columns={2}>
        <VariantCard label="Primary Tags">
          <Flex gap="200" style={{ flexWrap: "wrap" }}>
            <Tag scheme="brand" variant="primary">Brand</Tag>
            <Tag scheme="positive" variant="primary">Positive</Tag>
            <Tag scheme="warning" variant="primary">Warning</Tag>
            <Tag scheme="danger" variant="primary">Danger</Tag>
            <Tag scheme="neutral" variant="primary">Neutral</Tag>
          </Flex>
        </VariantCard>

        <VariantCard label="Secondary Tags">
          <Flex gap="200" style={{ flexWrap: "wrap" }}>
            <Tag scheme="brand" variant="secondary">Brand</Tag>
            <Tag scheme="positive" variant="secondary">Positive</Tag>
            <Tag scheme="warning" variant="secondary">Warning</Tag>
            <Tag scheme="danger" variant="secondary">Danger</Tag>
            <Tag scheme="neutral" variant="secondary">Neutral</Tag>
          </Flex>
        </VariantCard>

        <VariantCard label="Removable Tags">
          <Flex gap="200" style={{ flexWrap: "wrap" }}>
            <Tag scheme="brand" variant="primary" onRemove={() => {}}>Removable</Tag>
            <Tag scheme="positive" variant="primary" onRemove={() => {}}>Removable</Tag>
          </Flex>
        </VariantCard>

        <VariantCard label="Tag Toggles">
          <TagToggleGroup>
            <Label>Filter:</Label>
            <TagToggleList>
              <TagToggle id={tagId1}>All</TagToggle>
              <TagToggle id={tagId2}>Active</TagToggle>
              <TagToggle id={tagId3}>Completed</TagToggle>
            </TagToggleList>
          </TagToggleGroup>
        </VariantCard>
      </ShowcaseSection>

      {/* Navigation */}
      <ShowcaseSection title="Navigation" columns={2}>
        <VariantCard label="Navigation Pills - Row">
          <Navigation direction="row">
            <NavigationPill isSelected>Home</NavigationPill>
            <NavigationPill>Products</NavigationPill>
            <NavigationPill>About</NavigationPill>
          </Navigation>
        </VariantCard>

        <VariantCard label="Navigation Pills - Column">
          <Navigation direction="column">
            <NavigationPill isSelected>Dashboard</NavigationPill>
            <NavigationPill>Settings</NavigationPill>
            <NavigationPill>Profile</NavigationPill>
          </Navigation>
        </VariantCard>

        <VariantCard label="Navigation Buttons">
          <Navigation direction="column">
            <NavigationButton icon={<IconHome />} isSelected>Home</NavigationButton>
            <NavigationButton icon={<IconSettings />}>Settings</NavigationButton>
            <NavigationButton icon={<IconUser />}>Profile</NavigationButton>
          </Navigation>
        </VariantCard>

        <VariantCard label="Tabs">
          <Tabs>
            <TabList>
              <Tab id={tabId1}>Tab 1</Tab>
              <Tab id={tabId2}>Tab 2</Tab>
              <Tab id={tabId3}>Tab 3</Tab>
            </TabList>
            <TabPanel id={tabId1}>Content for Tab 1</TabPanel>
            <TabPanel id={tabId2}>Content for Tab 2</TabPanel>
            <TabPanel id={tabId3}>Content for Tab 3</TabPanel>
          </Tabs>
        </VariantCard>
      </ShowcaseSection>

      {/* Pagination */}
      <ShowcaseSection title="Pagination">
        <VariantCard label="Pagination">
          <Pagination>
            <PaginationPrevious href="#previous" />
            <PaginationList>
              <PaginationPage href="#1" current>1</PaginationPage>
              <PaginationPage href="#2">2</PaginationPage>
              <PaginationPage href="#3">3</PaginationPage>
              <PaginationPage href="#4">4</PaginationPage>
              <PaginationPage href="#5">5</PaginationPage>
            </PaginationList>
            <PaginationNext href="#next" />
          </Pagination>
        </VariantCard>
      </ShowcaseSection>

      {/* Notifications */}
      <ShowcaseSection title="Notifications" columns={2}>
        <VariantCard label="Message Notification">
          <Notification variant="message" icon={<IconCheckCircle />}>
            <TextStrong>Success!</TextStrong>
            <Text>Your changes have been saved.</Text>
          </Notification>
        </VariantCard>

        <VariantCard label="Alert Notification">
          <Notification variant="alert" icon={<IconAlertCircle />} isDismissible>
            <TextStrong>Warning</TextStrong>
            <Text>Please review your settings.</Text>
          </Notification>
        </VariantCard>
      </ShowcaseSection>

      {/* Avatars */}
      <ShowcaseSection title="Avatars" columns={2}>
        <VariantCard label="Avatar Sizes">
          <Flex gap="300">
            <Avatar size="small" src="https://i.pravatar.cc/150?img=1" alt="User" />
            <Avatar size="medium" src="https://i.pravatar.cc/150?img=2" alt="User" />
            <Avatar size="large" src="https://i.pravatar.cc/150?img=3" alt="User" />
          </Flex>
        </VariantCard>

        <VariantCard label="Avatar Group">
          <AvatarGroup max={3}>
            <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
            <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
            <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
            <Avatar src="https://i.pravatar.cc/150?img=4" alt="User 4" />
            <Avatar src="https://i.pravatar.cc/150?img=5" alt="User 5" />
          </AvatarGroup>
        </VariantCard>
      </ShowcaseSection>

      {/* Accordion */}
      <ShowcaseSection title="Accordion">
        <VariantCard label="Accordion">
          <Accordion>
            <AccordionItem title="What is SDS?">
              Simple Design System is a comprehensive design system for building modern web applications.
            </AccordionItem>
            <AccordionItem title="How do I get started?">
              Check out the documentation and component examples to learn more.
            </AccordionItem>
            <AccordionItem title="Can I customize it?">
              Yes! SDS is built with customization in mind using CSS variables.
            </AccordionItem>
          </Accordion>
        </VariantCard>
      </ShowcaseSection>

      {/* Table */}
      <ShowcaseSection title="Table">
        <VariantCard label="Default Table">
          <Table>
            <TableHead>
              <TableColumn isRowHeader>Name</TableColumn>
              <TableColumn>Role</TableColumn>
              <TableColumn>Status</TableColumn>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>Developer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>Designer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </VariantCard>

        <VariantCard label="Striped & Dense Table">
          <Table striped dense grid>
            <TableHead>
              <TableColumn isRowHeader>Product</TableColumn>
              <TableColumn>Price</TableColumn>
              <TableColumn>Stock</TableColumn>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Widget A</TableCell>
                <TableCell>$29.99</TableCell>
                <TableCell>In Stock</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Widget B</TableCell>
                <TableCell>$49.99</TableCell>
                <TableCell>Low Stock</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </VariantCard>
      </ShowcaseSection>

      {/* Typography */}
      <ShowcaseSection title="Typography">
        <VariantCard label="Text Hierarchy">
          <Flex direction="column" gap="400">
            <div>
              <TextSmall style={{ color: "var(--color-text-subtle)", marginBottom: "var(--size-100)" }}>
                Heading
              </TextSmall>
              <TextHeading>Heading Text</TextHeading>
            </div>
            <div>
              <TextSmall style={{ color: "var(--color-text-subtle)", marginBottom: "var(--size-100)" }}>
                Body
              </TextSmall>
              <Text>Regular body text for content and descriptions.</Text>
            </div>
            <div>
              <TextSmall style={{ color: "var(--color-text-subtle)", marginBottom: "var(--size-100)" }}>
                Strong
              </TextSmall>
              <TextStrong>Strong emphasized text</TextStrong>
            </div>
            <div>
              <TextSmall style={{ color: "var(--color-text-subtle)", marginBottom: "var(--size-100)" }}>
                Small
              </TextSmall>
              <TextSmall>Small text for captions and footnotes</TextSmall>
            </div>
            <div>
              <TextSmall style={{ color: "var(--color-text-subtle)", marginBottom: "var(--size-100)" }}>
                Link
              </TextSmall>
              <Link href="#">Text Link with underline</Link>
            </div>
          </Flex>
        </VariantCard>
      </ShowcaseSection>

      {/* Other Elements */}
      <ShowcaseSection title="Other Elements" columns={3}>
        <VariantCard label="Tooltip">
          <Tooltip>Hover over me for a tooltip</Tooltip>
        </VariantCard>

        <VariantCard label="Menu">
          <MenuButton label="Open Menu" icon={<IconMenu />} placement="bottom left">
            <MenuItem>
              <MenuLabel>New File</MenuLabel>
              <MenuShortcut>⌘N</MenuShortcut>
            </MenuItem>
            <MenuItem>
              <MenuLabel>Open</MenuLabel>
              <MenuShortcut>⌘O</MenuShortcut>
            </MenuItem>
            <MenuSeparator />
            <MenuItem>
              <MenuLabel>Save</MenuLabel>
              <MenuShortcut>⌘S</MenuShortcut>
            </MenuItem>
          </MenuButton>
        </VariantCard>

        <VariantCard label="ListBox">
          <ListBox>
            <ListBoxItem>Item 1</ListBoxItem>
            <ListBoxItem>Item 2</ListBoxItem>
            <ListBoxItem>Item 3</ListBoxItem>
            <ListBoxItem>Item 4</ListBoxItem>
          </ListBox>
        </VariantCard>

        <VariantCard label="Logo">
          <Logo />
        </VariantCard>
      </ShowcaseSection>
      </div>
    </>
  );
}

