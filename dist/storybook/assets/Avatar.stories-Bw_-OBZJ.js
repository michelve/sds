import{j as a}from"./jsx-runtime-BO8uF4Og.js";import{p as e}from"./index-C62DzI8J.js";import{m as r,F as B,n as c,o as h,p as z}from"./Grid-BI0M6ZtH.js";import"./index-D4H_InIO.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./useMediaQuery-BLMSMJgh.js";const O={component:r,title:"SDS Primitives/Avatars",parameters:{layout:"centered"}},t={name:"Avatar",args:{"[image]":!0},render:s=>a.jsxs(B,{alignPrimary:"center",gap:"200",alignSecondary:"center",children:[a.jsx(r,{src:s["[image]"]?e:void 0,initials:"JA",size:"small"}),a.jsx(r,{src:s["[image]"]?e:void 0,initials:"JA"}),a.jsx(r,{src:s["[image]"]?e:void 0,initials:"JA",square:!0,size:"large"})]})},n={name:"Avatar Button",args:{},render:()=>a.jsxs(B,{alignPrimary:"center",gap:"200",alignSecondary:"center",children:[a.jsx(c,{square:!0,size:"small",src:e}),a.jsx(c,{square:!0,src:e}),a.jsx(c,{size:"large",src:e})]})},i={name:"Avatar Block",args:{},render:()=>a.jsx(h,{title:"Full Name",description:"@fullname420",children:a.jsx(c,{square:!0,size:"large",src:e})})},o={name:"Avatar Group",args:{spacing:"200",max:3},argTypes:{spacing:{options:["100","200","300","negative-100","negative-200","negative-300"],control:{type:"select"}}},render:s=>a.jsxs(z,{...s,children:[a.jsx(r,{initials:"JA"}),a.jsx(r,{src:e}),a.jsx(r,{initials:"LO"}),a.jsx(r,{src:e}),a.jsx(r,{initials:"WM"}),a.jsx(r,{src:e})]})};var l,p,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Avatar",
  args: {
    "[image]": true
  },
  render: props => <Flex alignPrimary="center" gap="200" alignSecondary="center">
      <Avatar src={props["[image]"] ? placeholder : undefined} initials="JA" size="small" />
      <Avatar src={props["[image]"] ? placeholder : undefined} initials="JA" />
      <Avatar src={props["[image]"] ? placeholder : undefined} initials="JA" square size="large" />
    </Flex>
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Avatar Button",
  args: {},
  render: () => <Flex alignPrimary="center" gap="200" alignSecondary="center">
      <AvatarButton square size="small" src={placeholder} />
      <AvatarButton square src={placeholder} />
      <AvatarButton size="large" src={placeholder} />
    </Flex>
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var v,A,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Avatar Block",
  args: {},
  render: () => <AvatarBlock title="Full Name" description="@fullname420">
      <AvatarButton square size="large" src={placeholder} />
    </AvatarBlock>
}`,...(x=(A=i.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var y,j,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Avatar Group",
  args: {
    spacing: "200",
    max: 3
  },
  argTypes: {
    spacing: {
      options: ["100", "200", "300", "negative-100", "negative-200", "negative-300"],
      control: {
        type: "select"
      }
    }
  },
  render: args => <AvatarGroup {...args}>
      <Avatar initials="JA" />
      <Avatar src={placeholder} />
      <Avatar initials="LO" />
      <Avatar src={placeholder} />
      <Avatar initials="WM" />
      <Avatar src={placeholder} />
    </AvatarGroup>
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const E=["StoryAvatar","StoryAvatarButton","StoryAvatarBlock","StoryAvatarGroup"];export{t as StoryAvatar,i as StoryAvatarBlock,n as StoryAvatarButton,o as StoryAvatarGroup,E as __namedExportsOrder,O as default};
