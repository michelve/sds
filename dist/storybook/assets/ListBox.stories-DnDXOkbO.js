import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{p as c}from"./index-C62DzI8J.js";import{a5 as a,a6 as e,a7 as n,a8 as m}from"./Grid-BI0M6ZtH.js";import"./index-D4H_InIO.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./useMediaQuery-BLMSMJgh.js";const I={component:a,title:"SDS Primitives/ListBox",parameters:{layout:"centered"}},o={name:"List Box",args:{layout:"stack",orientation:"vertical"},argTypes:{layout:{options:["stack","grid"],control:{type:"select"}},orientation:{options:["vertical","horizontal"],control:{type:"select"}}},render:l=>t.jsxs(a,{...l,children:[t.jsx(e,{children:"Aardvark"}),t.jsx(e,{children:"Cat"}),t.jsx(e,{children:"Dog"}),t.jsx(e,{children:"Kangaroo"}),t.jsx(e,{children:"Koala"}),t.jsx(e,{children:"Penguin"}),t.jsx(e,{children:"Snake"}),t.jsx(e,{textValue:"Turtle",children:t.jsx(n,{children:"Turtle"})}),t.jsxs(e,{textValue:"Admin",children:[t.jsx("img",{slot:"image",src:c}),t.jsx(n,{children:"Admin"}),t.jsx(m,{children:"Full access"})]})]})};var s,r,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "List Box",
  args: {
    layout: "stack",
    orientation: "vertical"
  },
  argTypes: {
    layout: {
      options: ["stack", "grid"],
      control: {
        type: "select"
      }
    },
    orientation: {
      options: ["vertical", "horizontal"],
      control: {
        type: "select"
      }
    }
  },
  render: args => {
    return <ListBox {...args}>
        <ListBoxItem>Aardvark</ListBoxItem>
        <ListBoxItem>Cat</ListBoxItem>
        <ListBoxItem>Dog</ListBoxItem>
        <ListBoxItem>Kangaroo</ListBoxItem>
        <ListBoxItem>Koala</ListBoxItem>
        <ListBoxItem>Penguin</ListBoxItem>
        <ListBoxItem>Snake</ListBoxItem>
        <ListBoxItem textValue="Turtle">
          <Label>Turtle</Label>
        </ListBoxItem>
        <ListBoxItem textValue="Admin">
          <img slot="image" src={placeholder} />
          <Label>Admin</Label>
          <Description>Full access</Description>
        </ListBoxItem>
      </ListBox>;
  }
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const h=["StoryListBox"];export{o as StoryListBox,h as __namedExportsOrder,I as default};
