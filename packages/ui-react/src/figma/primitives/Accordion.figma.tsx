import figma from "@figma/code-connect";
import { Accordion, AccordionItem } from "primitives";

figma.connect(Accordion, "https://www.figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=7753-4779", {
  props: {
    children: figma.children("Accordion Item"),
  },
  example: ({ children }) => <Accordion>{children}</Accordion>,
});

figma.connect(AccordionItem, "https://www.figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=7753-4634", {
  props: {
    dataSelected: figma.enum("State", {
      Open: "true",
    }),
    title: figma.string("Title"),
    children: figma.string("Content"),
  },
  example: ({ dataSelected, ...props }) => <AccordionItem {...props} />,
});

