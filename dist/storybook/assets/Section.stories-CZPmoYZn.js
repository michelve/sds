import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{p as c}from"./index-C62DzI8J.js";import{S as n,F as t,k as s}from"./Grid-BI0M6ZtH.js";import"./index-D4H_InIO.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./useMediaQuery-BLMSMJgh.js";const u={component:n,title:"SDS Layout/Section",parameters:{layout:"centered"}},r={name:"Section",args:{padding:"1600",variant:"subtle"},argTypes:{padding:{control:{type:"select"},options:["800","1600","4000"]},variant:{control:{type:"select"},options:["subtle","brand","stroke","secondary"]}},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(n,{...a,children:e.jsx(t,{container:!0,alignPrimary:"center",gap:"600",children:"Hello there"})}),e.jsx(n,{...a,children:e.jsx(t,{container:!0,alignPrimary:"center",gap:"600",children:"Hello there"})}),e.jsx(n,{...a,children:e.jsx(t,{container:!0,alignPrimary:"center",gap:"600",children:"Hello there"})}),e.jsx(n,{variant:"image",src:c,padding:"4000",children:e.jsx(t,{container:!0,alignPrimary:"center",gap:"600",children:e.jsx(s,{align:"center",title:"Title",subtitle:"Subtitle"})})})]})};var i,o,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Section",
  args: {
    padding: "1600",
    variant: "subtle"
  },
  argTypes: {
    padding: {
      control: {
        type: "select"
      },
      options: ["800", "1600", "4000"]
    },
    variant: {
      control: {
        type: "select"
      },
      options: ["subtle", "brand", "stroke", "secondary"]
    }
  },
  render: args => <>
      <Section {...args}>
        <Flex container alignPrimary="center" gap="600">
          Hello there
        </Flex>
      </Section>
      <Section {...args}>
        <Flex container alignPrimary="center" gap="600">
          Hello there
        </Flex>
      </Section>
      <Section {...args}>
        <Flex container alignPrimary="center" gap="600">
          Hello there
        </Flex>
      </Section>
      <Section variant="image" src={placeholder} padding="4000">
        <Flex container alignPrimary="center" gap="600">
          <TextContentTitle align="center" title="Title" subtitle="Subtitle" />
        </Flex>
      </Section>
    </>
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const h=["StorySection"];export{r as StorySection,h as __namedExportsOrder,u as default};
