we are about to work in our new figma plugin for inpector mode, and fima conenct.
path: scripts/tokens/fimga-plugin-codebase we have a manifest already.


notes:
we currently have a codebase that ahve primitves and compoents, and thse components are connected to figm ausign figma connect standards.

we have a scripts/tokens/tokens.json that ceates a theme.css file usign api or mnaual fetch we also have a figma config file at the root figma.config.json that contaisn all linked components.

and we have two plugins: scripts/tokens/figma-plugin-styles-json

scripts/tokens/figma-plugin-token-json -- this oen is used to generate the token json file and them the css from it

see hwo we have setup the project and get familiar.

goal:
the goal is to craeet the plugin and use it on dev mod einpector and when a designer or developer select on a componet or pattern, the plugin detect all componenst user, for exampel a usr clicks on a form instance.

and the plugin dtetc,
text styles, forms, inputs, buttons, radio etc - but knows the refercbe because we have figma connde connect in place, the ideas is to have an input where th euser can copy the ouput and ready to craete that page or compoent with all import and cooents  liek this:

requirements: comoatibel with bets figm aplugin standards use figma docs

`
import React from 'react';
import { FormBox } from 'compositions';
import { InputField } from 'primitives';
import { Button } from 'primitives';

const HeroForm = () => {
  return (
    <FormBox onSubmit={(data) => console.log('Form submitted:', data)}>
      <InputField 
        label="Name"
        placeholder="Enter name"
        required
      />
      <InputField 
        label="Email"
        placeholder="Enter email"
        required
      />
      <InputField 
        label="Company"
        placeholder="Enter company"
        required
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </FormBox>
  );
};

export default HeroForm;
`
notes: this is just an exampel but it needs to match our codebase and technology stack, an compoents need to be detected and generated with the correct imports and styles.

also the require styles usign variabel sform code connect, if yu have questiosn ask me and i will explain more.