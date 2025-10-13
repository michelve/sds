import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{s as p,C as n,t as b}from"./Grid-BI0M6ZtH.js";import"./index-D4H_InIO.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./useMediaQuery-BLMSMJgh.js";const{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,I={component:p,title:"SDS Primitives/Inputs",parameters:{layout:"centered"}},r={name:"Checkbox Field",args:{isSelected:!0,isIndeterminate:!1,isDisabled:!1},render:s=>{const[{isSelected:a},u]=m();return e.jsx(n,{isDisabled:s.isDisabled,isSelected:a,isIndeterminate:s.isIndeterminate,onChange:()=>u({isSelected:!a}),label:"This is a checkbox",description:"This is a checkbox description"})}},o={name:"Checkbox Group",args:{},render:s=>e.jsxs(b,{label:"Hello",description:"I am a description",...s,onChange:console.log,children:[e.jsx(n,{value:"one",children:"Value one"}),e.jsx(n,{value:"two",children:"Value two"}),e.jsx(n,{value:"three",children:"Value three"})]})};var i,t,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Checkbox Field",
  args: {
    isSelected: true,
    isIndeterminate: false,
    isDisabled: false
  },
  render: args => {
    const [{
      isSelected
    }, updateArgs] = useArgs();
    return <CheckboxField isDisabled={args.isDisabled} isSelected={isSelected} isIndeterminate={args.isIndeterminate} onChange={() => updateArgs({
      isSelected: !isSelected
    })} label="This is a checkbox" description="This is a checkbox description" />;
  }
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var l,d,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Checkbox Group",
  args: {},
  render: args => {
    return <CheckboxGroup label="Hello" description="I am a description" {...args} onChange={console.log}>
        <CheckboxField value="one">Value one</CheckboxField>
        <CheckboxField value="two">Value two</CheckboxField>
        <CheckboxField value="three">Value three</CheckboxField>
      </CheckboxGroup>;
  }
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const _=["StoryCheckboxField","StoryCheckboxGruop"];export{r as StoryCheckboxField,o as StoryCheckboxGruop,_ as __namedExportsOrder,I as default};
