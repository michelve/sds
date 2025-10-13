import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{aB as a,F as i,aD as o,aE as y,a7 as j,aF as f,aG as t,aH as S,aI as B}from"./Grid-BI0M6ZtH.js";import"./index-D4H_InIO.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./useMediaQuery-BLMSMJgh.js";const G={component:a,title:"SDS Primitives/Tags",parameters:{layout:"centered"}},g={name:"Tag",args:{"[removable]":!1,variant:"primary"},render:({"[removable]":n,...r})=>e.jsxs(i,{wrap:!0,alignPrimary:"center",gap:"300",children:[e.jsx(a,{scheme:"brand",onRemove:n?()=>{}:void 0,...r,children:"Default"}),e.jsx(a,{scheme:"danger",onRemove:n?()=>{}:void 0,...r,children:"Danger"}),e.jsx(a,{scheme:"positive",onRemove:n?()=>{}:void 0,...r,children:"Positive"}),e.jsx(a,{scheme:"warning",onRemove:n?()=>{}:void 0,...r,children:"Warning"}),e.jsx(a,{scheme:"neutral",onRemove:n?()=>{}:void 0,...r,children:"Neutral"})]})},s={name:"Tag Button",args:{variant:"primary"},render:n=>e.jsxs(i,{wrap:!0,alignPrimary:"center",gap:"300",children:[e.jsx(o,{scheme:"brand",...n,children:"Default"}),e.jsx(o,{scheme:"danger",...n,children:"Danger"}),e.jsx(o,{scheme:"positive",...n,children:"Positive"}),e.jsx(o,{scheme:"warning",...n,children:"Warning"}),e.jsx(o,{scheme:"neutral",...n,children:"Neutral"})]})},l={name:"Tag Toggle Group",args:{selectionMode:"single"},argTypes:{selectionMode:{options:["single","multiple","none"],control:{type:"select"}}},render:n=>e.jsx(i,{wrap:!0,alignPrimary:"center",children:e.jsxs(y,{defaultSelectedKeys:["default"],...n,children:[e.jsx(j,{children:"Hello there"}),e.jsxs(f,{children:[e.jsx(t,{id:"default",iconStart:e.jsx(S,{}),children:"Default"}),e.jsx(t,{iconStart:e.jsx(B,{}),children:"Hello"}),e.jsx(t,{children:"Love"}),e.jsx(t,{children:"This"}),e.jsx(t,{children:"Story"})]})]})})};var c,m,d;g.parameters={...g.parameters,docs:{...(c=g.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Tag",
  args: {
    "[removable]": false,
    variant: "primary"
  },
  render: ({
    "[removable]": isRemovable,
    ...args
  }) => <Flex wrap alignPrimary="center" gap="300">
      <Tag scheme="brand" onRemove={isRemovable ? () => {} : undefined} {...args}>
        Default
      </Tag>
      <Tag scheme="danger" onRemove={isRemovable ? () => {} : undefined} {...args}>
        Danger
      </Tag>
      <Tag scheme="positive" onRemove={isRemovable ? () => {} : undefined} {...args}>
        Positive
      </Tag>
      <Tag scheme="warning" onRemove={isRemovable ? () => {} : undefined} {...args}>
        Warning
      </Tag>
      <Tag scheme="neutral" onRemove={isRemovable ? () => {} : undefined} {...args}>
        Neutral
      </Tag>
    </Flex>
}`,...(d=(m=g.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var T,u,p;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Tag Button",
  args: {
    variant: "primary"
  },
  render: args => <Flex wrap alignPrimary="center" gap="300">
      <TagButton scheme="brand" {...args}>
        Default
      </TagButton>
      <TagButton scheme="danger" {...args}>
        Danger
      </TagButton>
      <TagButton scheme="positive" {...args}>
        Positive
      </TagButton>
      <TagButton scheme="warning" {...args}>
        Warning
      </TagButton>
      <TagButton scheme="neutral" {...args}>
        Neutral
      </TagButton>
    </Flex>
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,v,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Tag Toggle Group",
  args: {
    selectionMode: "single"
  },
  argTypes: {
    selectionMode: {
      options: ["single", "multiple", "none"],
      control: {
        type: "select"
      }
    }
  },
  render: args => <Flex wrap alignPrimary="center">
      <TagToggleGroup defaultSelectedKeys={["default"]} {...args}>
        <Label>Hello there</Label>
        <TagToggleList>
          <TagToggle id="default" iconStart={<IconCheck />}>
            Default
          </TagToggle>
          <TagToggle iconStart={<IconAirplay />}>Hello</TagToggle>
          <TagToggle>Love</TagToggle>
          <TagToggle>This</TagToggle>
          <TagToggle>Story</TagToggle>
        </TagToggleList>
      </TagToggleGroup>
    </Flex>
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const L=["StoryTag","StoryTagButton","StoryTagToggleGroup"];export{g as StoryTag,s as StoryTagButton,l as StoryTagToggleGroup,L as __namedExportsOrder,G as default};
