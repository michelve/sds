import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{a0 as p,I as l,a1 as u}from"./Grid-BI0M6ZtH.js";import"./index-D4H_InIO.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./useMediaQuery-BLMSMJgh.js";const D={component:p,title:"SDS Primitives/Buttons",parameters:{layout:"centered"}},n={name:"Icon Button",args:{variant:"primary",size:"medium",isDisabled:!1},argTypes:{size:{control:{type:"select"},options:["small","medium"]},variant:{control:{type:"select"},options:["primary","neutral","subtle"]}},render:({...r})=>e.jsx(p,{...r,children:e.jsx(l,{})})},t={name:"Destructive Icon Button",args:{variant:"danger-primary",size:"medium",isDisabled:!1},argTypes:{size:{control:{type:"select"},options:["small","medium"]},variant:{control:{type:"select"},options:["danger-primary","danger-subtle"]}},render:({...r})=>e.jsx(u,{...r,children:e.jsx(l,{})})};var o,s,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Icon Button",
  args: {
    variant: "primary",
    size: "medium",
    isDisabled: false
  },
  argTypes: {
    size: {
      control: {
        type: "select"
      },
      options: ["small", "medium"]
    },
    variant: {
      control: {
        type: "select"
      },
      options: ["primary", "neutral", "subtle"]
    }
  },
  render: ({
    ...args
  }) => <IconButton {...args}>
      <IconActivity />
    </IconButton>
}`,...(a=(s=n.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Destructive Icon Button",
  args: {
    variant: "danger-primary",
    size: "medium",
    isDisabled: false
  },
  argTypes: {
    size: {
      control: {
        type: "select"
      },
      options: ["small", "medium"]
    },
    variant: {
      control: {
        type: "select"
      },
      options: ["danger-primary", "danger-subtle"]
    }
  },
  render: ({
    ...args
  }) => <DestructiveIconButton {...args}>
      <IconActivity />
    </DestructiveIconButton>
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const b=["StoryIconButton","StoryDestructiveIconButton"];export{t as StoryDestructiveIconButton,n as StoryIconButton,b as __namedExportsOrder,D as default};
