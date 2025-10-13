import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{av as o,aw as m}from"./Grid-BI0M6ZtH.js";import"./index-D4H_InIO.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./useMediaQuery-BLMSMJgh.js";const g={component:o,title:"SDS Primitives/Inputs",parameters:{layout:"centered"}},e={name:"Switch Field",args:{isDisabled:!1},render:i=>t.jsx(o,{...i,label:"Enable",description:"Allow others to embed your event details on their own site."})},r={name:"Switch Group",args:{},render:i=>t.jsxs(m,{...i,children:[t.jsx(o,{label:"Enable",description:"Allow others to embed your event details on their own site."}),t.jsx(o,{label:"Dont you love it",description:"Something magical"})]})};var s,a,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Switch Field",
  args: {
    isDisabled: false
  },
  render: args => <SwitchField {...args} label="Enable" description="Allow others to embed your event details on their own site." />
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Switch Group",
  args: {},
  render: args => {
    return <SwitchGroup {...args}>
        <SwitchField label="Enable" description="Allow others to embed your event details on their own site." />
        <SwitchField label="Dont you love it" description="Something magical" />
      </SwitchGroup>;
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const y=["StorySwitchField","StorySwitchGroup"];export{e as StorySwitchField,r as StorySwitchGroup,y as __namedExportsOrder,g as default};
