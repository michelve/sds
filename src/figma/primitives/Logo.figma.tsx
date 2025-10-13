import figma from "@figma/code-connect";
import { Logo } from "primitives";

figma.connect(Logo, "<FIGMA_LOGO_LOGO>", {
  props: {},
  example: (props) => (
    <Logo>
      {/* Logo SVG content is built-in */}
    </Logo>
  ),
});

