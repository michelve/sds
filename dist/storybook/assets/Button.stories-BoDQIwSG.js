import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{c as a,q as B,I as h,r as x,B as v}from"./Grid-BI0M6ZtH.js";import"./index-D4H_InIO.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./useMediaQuery-BLMSMJgh.js";const I={component:a,title:"SDS Primitives/Buttons",parameters:{layout:"centered"}},t={name:"Button",args:{children:"Hello world",variant:"primary"},argTypes:{children:{control:{type:"text"}},size:{control:{type:"select"}},variant:{control:{type:"select"},options:["primary","neutral","subtle"]}},render:({children:r,...s})=>n.jsxs(a,{...s,children:[n.jsx(B,{}),r,n.jsx(h,{})]})},e={name:"Button Danger",args:{children:"Hello world",variant:"danger-primary"},argTypes:{children:{control:{type:"text"}},size:{control:{type:"select"}},variant:{control:{type:"select"},options:["danger-primary","danger-subtle"]}},render:({children:r,...s})=>n.jsxs(x,{...s,children:[n.jsx(B,{}),r,n.jsx(h,{})]})},o={name:"Button Group",args:{align:"center"},argTypes:{align:{control:{type:"select"},options:["center","start","end","justify","stack"]}},render:({...r})=>n.jsxs(v,{...r,style:{width:300},children:[n.jsx(a,{variant:"neutral",children:"Cancel"}),n.jsx(a,{variant:"primary",children:"Submit"})]})};var c,i,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Button",
  args: {
    children: "Hello world",
    variant: "primary"
  },
  argTypes: {
    children: {
      control: {
        type: "text"
      }
    },
    size: {
      control: {
        type: "select"
      }
    },
    variant: {
      control: {
        type: "select"
      },
      options: ["primary", "neutral", "subtle"]
    }
  },
  render: ({
    children,
    ...props
  }) => <Button {...props}>
      <IconArrowLeft />
      {children}
      <IconActivity />
    </Button>
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Button Danger",
  args: {
    children: "Hello world",
    variant: "danger-primary"
  },
  argTypes: {
    children: {
      control: {
        type: "text"
      }
    },
    size: {
      control: {
        type: "select"
      }
    },
    variant: {
      control: {
        type: "select"
      },
      options: ["danger-primary", "danger-subtle"]
    }
  },
  render: ({
    children,
    ...props
  }) => <ButtonDanger {...props}>
      <IconArrowLeft />
      {children}
      <IconActivity />
    </ButtonDanger>
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,y,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Button Group",
  args: {
    align: "center"
  },
  argTypes: {
    align: {
      control: {
        type: "select"
      },
      options: ["center", "start", "end", "justify", "stack"]
    }
  },
  render: ({
    ...props
  }) => <ButtonGroup {...props} style={{
    width: 300
  }}>
      <Button variant="neutral">Cancel</Button>
      <Button variant="primary">Submit</Button>
    </ButtonGroup>
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const b=["StoryButton","StoryButtonDanger","StoryButtonGroup"];export{t as StoryButton,e as StoryButtonDanger,o as StoryButtonGroup,b as __namedExportsOrder,I as default};
