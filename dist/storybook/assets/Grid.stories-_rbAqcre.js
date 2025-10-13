import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{G as t,j as n}from"./Grid-BI0M6ZtH.js";import"./index-D4H_InIO.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./useMediaQuery-BLMSMJgh.js";const v={component:t,title:"SDS Layout/Grid",parameters:{layout:"centered"}},e=a=>r.jsx("div",{style:{display:"grid",placeItems:"center",padding:"0.5rem 1rem",background:"var(--sds-color-background-brand-default)",color:"var(--sds-color-text-brand-on-brand)",height:"100%",minHeight:"40px"},children:a}),o={name:"Basic Grid",args:{columns:"repeat(3, 1fr)",rows:"auto",gap:"200"},argTypes:{gap:{control:{type:"select"},options:[void 0,"100","200","300","400","600","800"]},columns:{control:{type:"select"},options:["1","2","3","4","5","auto","none","repeat(3, 1fr)","repeat(5, 1fr)"]},rows:{control:{type:"select"},options:["1","2","3","auto","none","repeat(2, auto)"]}},render:a=>r.jsx(t,{...a,container:!0,style:{width:"100%",maxWidth:"800px"},children:[...Array(9)].map((C,m)=>r.jsx("div",{children:e(`Item ${m+1}`)},m))})},d={name:"Grid with GridItems",args:{columns:"repeat(5, 1fr)",rows:"auto auto auto",gap:"200"},render:a=>r.jsxs(t,{...a,container:!0,style:{width:"100%",maxWidth:"800px"},children:[r.jsx(n,{column:"1 / span 3",row:"1",children:e("Item 1 (spans 3 columns)")}),r.jsx(n,{column:"4 / span 2",row:"1",children:e("Item 2 (spans 2 columns)")}),r.jsx(n,{column:"1",row:"2 / span 2",children:e("Item 3 (spans 2 rows)")}),r.jsx(n,{column:"2 / span 2",row:"2",children:e("Item 4")}),r.jsx(n,{column:"2 / span 2",row:"3",children:e("Item 5")}),r.jsx(n,{column:"4",row:"2 / span 2",children:e("Item 6 (spans 2 rows)")}),r.jsx(n,{column:"5",row:"2 / span 2",children:e("Item 7 (spans 2 rows)")})]})},s={name:"Grid Areas",args:{gap:"200"},render:a=>r.jsxs(t,{...a,container:!0,style:{width:"100%",maxWidth:"800px",gridTemplateAreas:`
          "header header header header header"
          "sidebar main main main aside"
          "sidebar footer footer footer aside"
        `,gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",gridTemplateRows:"auto auto auto"},children:[r.jsx(n,{area:"header",children:e("Header")}),r.jsx(n,{area:"sidebar",children:e("Sidebar")}),r.jsx(n,{area:"main",children:e("Main Content")}),r.jsx(n,{area:"aside",children:e("Aside")}),r.jsx(n,{area:"footer",children:e("Footer")})]})},i={name:"Card Grid Layout",args:{columns:"repeat(5, 1fr)",rows:"auto",gap:"400"},render:a=>r.jsxs(t,{...a,container:!0,style:{width:"100%",maxWidth:"800px"},children:[r.jsx(n,{column:"1 / span 3",row:"1",children:e("Article 1")}),r.jsx(n,{column:"4 / span 2",row:"1",children:e("Article 2")}),r.jsx(n,{column:"1",row:"2 / span 2",children:e("Article 3")}),r.jsx(n,{column:"2 / span 2",row:"2",children:e("Article 4")}),r.jsx(n,{column:"2 / span 2",row:"3",children:e("Article 5")}),r.jsx(n,{column:"4",row:"2 / span 2",children:e("Article 6")}),r.jsx(n,{column:"5",row:"2 / span 2",children:e("Article 7")})]})};var c,l,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Basic Grid",
  args: {
    columns: "repeat(3, 1fr)",
    rows: "auto",
    gap: "200"
  },
  argTypes: {
    gap: {
      control: {
        type: "select"
      },
      options: [undefined, "100", "200", "300", "400", "600", "800"]
    },
    columns: {
      control: {
        type: "select"
      },
      options: ["1", "2", "3", "4", "5", "auto", "none", "repeat(3, 1fr)", "repeat(5, 1fr)"]
    },
    rows: {
      control: {
        type: "select"
      },
      options: ["1", "2", "3", "auto", "none", "repeat(2, auto)"]
    }
  },
  render: args => <Grid {...args} container style={{
    width: "100%",
    maxWidth: "800px"
  }}>
      {[...Array(9)].map((_, i) => <div key={i}>{renderChild(\`Item \${i + 1}\`)}</div>)}
    </Grid>
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,h,G;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Grid with GridItems",
  args: {
    columns: "repeat(5, 1fr)",
    rows: "auto auto auto",
    gap: "200"
  },
  render: args => <Grid {...args} container style={{
    width: "100%",
    maxWidth: "800px"
  }}>
      <GridItem column="1 / span 3" row="1">
        {renderChild("Item 1 (spans 3 columns)")}
      </GridItem>
      <GridItem column="4 / span 2" row="1">
        {renderChild("Item 2 (spans 2 columns)")}
      </GridItem>
      <GridItem column="1" row="2 / span 2">
        {renderChild("Item 3 (spans 2 rows)")}
      </GridItem>
      <GridItem column="2 / span 2" row="2">
        {renderChild("Item 4")}
      </GridItem>
      <GridItem column="2 / span 2" row="3">
        {renderChild("Item 5")}
      </GridItem>
      <GridItem column="4" row="2 / span 2">
        {renderChild("Item 6 (spans 2 rows)")}
      </GridItem>
      <GridItem column="5" row="2 / span 2">
        {renderChild("Item 7 (spans 2 rows)")}
      </GridItem>
    </Grid>
}`,...(G=(h=d.parameters)==null?void 0:h.docs)==null?void 0:G.source}}};var I,w,x;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Grid Areas",
  args: {
    gap: "200"
  },
  render: args => <Grid {...args} container style={{
    width: "100%",
    maxWidth: "800px",
    gridTemplateAreas: \`
          "header header header header header"
          "sidebar main main main aside"
          "sidebar footer footer footer aside"
        \`,
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "auto auto auto"
  }}>
      <GridItem area="header">
        {renderChild("Header")}
      </GridItem>
      <GridItem area="sidebar">
        {renderChild("Sidebar")}
      </GridItem>
      <GridItem area="main">
        {renderChild("Main Content")}
      </GridItem>
      <GridItem area="aside">
        {renderChild("Aside")}
      </GridItem>
      <GridItem area="footer">
        {renderChild("Footer")}
      </GridItem>
    </Grid>
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var g,f,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Card Grid Layout",
  args: {
    columns: "repeat(5, 1fr)",
    rows: "auto",
    gap: "400"
  },
  render: args => <Grid {...args} container style={{
    width: "100%",
    maxWidth: "800px"
  }}>
      <GridItem column="1 / span 3" row="1">
        {renderChild("Article 1")}
      </GridItem>
      <GridItem column="4 / span 2" row="1">
        {renderChild("Article 2")}
      </GridItem>
      <GridItem column="1" row="2 / span 2">
        {renderChild("Article 3")}
      </GridItem>
      <GridItem column="2 / span 2" row="2">
        {renderChild("Article 4")}
      </GridItem>
      <GridItem column="2 / span 2" row="3">
        {renderChild("Article 5")}
      </GridItem>
      <GridItem column="4" row="2 / span 2">
        {renderChild("Article 6")}
      </GridItem>
      <GridItem column="5" row="2 / span 2">
        {renderChild("Article 7")}
      </GridItem>
    </Grid>
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const B=["StoryBasicGrid","StoryGridWithItems","StoryGridAreas","StoryCardGrid"];export{o as StoryBasicGrid,i as StoryCardGrid,s as StoryGridAreas,d as StoryGridWithItems,B as __namedExportsOrder,v as default};
