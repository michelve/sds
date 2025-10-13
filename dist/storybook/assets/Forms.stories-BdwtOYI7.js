import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{F as a}from"./Panels-CT2ZK9XF.js";import{i as e,C as m,B as l,c as p}from"./Grid-BI0M6ZtH.js";import"./index-D4H_InIO.js";import"./useMediaQuery-BLMSMJgh.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";const g={component:a,title:"SDS Compositions/Forms",parameters:{layout:"centered"}},o={args:{singleLine:!1},name:"Forms",render:i=>r.jsxs(a,{...i,onSubmit:()=>{},children:[r.jsx(e,{label:"Email"}),r.jsx(e,{label:"Password"}),r.jsx(m,{label:"Label",description:"Description"}),r.jsx(l,{align:"justify",children:r.jsx(p,{onPress:()=>{},variant:"primary",children:"Register"})})]})};var s,n,t;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    singleLine: false
  },
  name: "Forms",
  render: args => <FormBox {...args} onSubmit={() => {}}>
      <InputField label="Email" />
      <InputField label="Password" />
      <CheckboxField label="Label" description="Description" />
      <ButtonGroup align="justify">
        <Button onPress={() => {}} variant="primary">
          Register
        </Button>
      </ButtonGroup>
    </FormBox>
}`,...(t=(n=o.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const j=["StoryFormBox"];export{o as StoryFormBox,j as __namedExportsOrder,g as default};
