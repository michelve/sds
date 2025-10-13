import figma from "@figma/code-connect";
import { Link } from "primitives";

figma.connect(Link, "<FIGMA_TEXT_TEXT_LINK>", {
  props: {
    children: figma.string("Text"),
    href: figma.string("Text"),
  },
  example: (props) => (
    <Link href={props.href || "#"}>
      {props.children}
    </Link>
  ),
});

