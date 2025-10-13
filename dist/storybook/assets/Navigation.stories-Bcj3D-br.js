import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{af as l,ag as r,ah as o,ai as s}from"./Grid-BI0M6ZtH.js";import{r as N}from"./index-D4H_InIO.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./useMediaQuery-BLMSMJgh.js";const C={component:l,title:"SDS Primitives/Navigation",parameters:{layout:"centered"}},a={name:"Navigation Button",render:i=>{const[n,t]=N.useState(1);return e.jsxs(l,{...i,children:[e.jsx(r,{icon:e.jsx(o,{size:"24"}),direction:i.direction==="column"?"row":"column",isSelected:n===1,onPress:()=>t(1),children:"Item 1"}),e.jsx(r,{icon:e.jsx(o,{size:"24"}),direction:i.direction==="column"?"row":"column",isSelected:n===2,onPress:()=>t(2),children:"Item 2"}),e.jsx(r,{icon:e.jsx(o,{size:"24"}),direction:i.direction==="column"?"row":"column",isSelected:n===3,onPress:()=>t(3),children:"Item 3"}),e.jsx(r,{icon:e.jsx(o,{size:"24"}),direction:i.direction==="column"?"row":"column",isSelected:n===4,onPress:()=>t(4),children:"Item 4"}),e.jsx(r,{icon:e.jsx(o,{size:"24"}),direction:i.direction==="column"?"row":"column",isSelected:n===5,onPress:()=>t(5),children:"Item 5"})]})}},c={name:"Navigation Pill",render:i=>{const[n,t]=N.useState(1);return e.jsxs(l,{...i,children:[e.jsx(s,{isSelected:n===1,onPress:()=>t(1),children:"Item 1"}),e.jsx(s,{isSelected:n===2,onPress:()=>t(2),children:"Item 2"}),e.jsx(s,{isSelected:n===3,onPress:()=>t(3),children:"Item 3"}),e.jsx(s,{isSelected:n===4,onPress:()=>t(4),children:"Item 4"}),e.jsx(s,{isSelected:n===5,onPress:()=>t(5),children:"Item 5"})]})}};var u,m,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Navigation Button",
  render: args => {
    const [current, setCurrent] = useState(1);
    return <Navigation {...args}>
        <NavigationButton icon={<IconStar size="24" />} direction={args.direction === "column" ? "row" : "column"} isSelected={current === 1} onPress={() => setCurrent(1)}>
          Item 1
        </NavigationButton>
        <NavigationButton icon={<IconStar size="24" />} direction={args.direction === "column" ? "row" : "column"} isSelected={current === 2} onPress={() => setCurrent(2)}>
          Item 2
        </NavigationButton>
        <NavigationButton icon={<IconStar size="24" />} direction={args.direction === "column" ? "row" : "column"} isSelected={current === 3} onPress={() => setCurrent(3)}>
          Item 3
        </NavigationButton>
        <NavigationButton icon={<IconStar size="24" />} direction={args.direction === "column" ? "row" : "column"} isSelected={current === 4} onPress={() => setCurrent(4)}>
          Item 4
        </NavigationButton>
        <NavigationButton icon={<IconStar size="24" />} direction={args.direction === "column" ? "row" : "column"} isSelected={current === 5} onPress={() => setCurrent(5)}>
          Item 5
        </NavigationButton>
      </Navigation>;
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,S,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Navigation Pill",
  render: args => {
    const [current, setCurrent] = useState(1);
    return <Navigation {...args}>
        <NavigationPill isSelected={current === 1} onPress={() => setCurrent(1)}>
          Item 1
        </NavigationPill>
        <NavigationPill isSelected={current === 2} onPress={() => setCurrent(2)}>
          Item 2
        </NavigationPill>
        <NavigationPill isSelected={current === 3} onPress={() => setCurrent(3)}>
          Item 3
        </NavigationPill>
        <NavigationPill isSelected={current === 4} onPress={() => setCurrent(4)}>
          Item 4
        </NavigationPill>
        <NavigationPill isSelected={current === 5} onPress={() => setCurrent(5)}>
          Item 5
        </NavigationPill>
      </Navigation>;
  }
}`,...(v=(S=c.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const h=["StoryNavigationButton","StoryNavigationPill"];export{a as StoryNavigationButton,c as StoryNavigationPill,h as __namedExportsOrder,C as default};
