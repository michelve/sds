import figma from "@figma/code-connect";
import { Icon } from "primitives";

figma.connect(Icon, "<FIGMA_ICONS_BASE>", {
  props: {
    size: figma.enum("Size", {
      "14": "14",
      "16": "16",
      "20": "20",
      "24": "24",
      "32": "32",
      "40": "40",
      "48": "48"
    }),
    children: figma.children("*"),
  },
  example: (props) => (
    <Icon size={props.size}>
      {props.children}
    </Icon>
  ),
});

