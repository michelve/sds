import figma from "@figma/code-connect";
import { Logo } from "primitives";

figma.connect(Logo, "<FIGMA_LOGO_LOGO>", {
  props: {
    size: figma.enum("size", {
      sm: "sm",
    }),
  },
  example: ({ size }) => <Logo size={size} />,
});

