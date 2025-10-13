import{j as a}from"./jsx-runtime-BO8uF4Og.js";import{am as g,an as o,ao as P,ap as n,aq as s,ar as p}from"./Grid-BI0M6ZtH.js";import"./index-D4H_InIO.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./useMediaQuery-BLMSMJgh.js";const j={component:g,title:"SDS Primitives/Pagination",parameters:{layout:"centered"}},e={name:"Pagination",args:{},render:()=>a.jsxs(g,{children:[a.jsx(o,{}),a.jsxs(P,{children:[a.jsx(n,{href:"?page=1",children:"1"}),a.jsx(n,{href:"?page=2",children:"2"}),a.jsx(n,{href:"?page=3",current:!0,children:"3"}),a.jsx(n,{href:"?page=4",children:"4"}),a.jsx(s,{}),a.jsx(n,{href:"?page=65",children:"65"}),a.jsx(n,{href:"?page=66",children:"66"})]}),a.jsx(p,{href:"?page=4"})]})};var i,r,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Pagination",
  args: {},
  render: () => <Pagination>
      <PaginationPrevious />
      <PaginationList>
        <PaginationPage href="?page=1">1</PaginationPage>
        <PaginationPage href="?page=2">2</PaginationPage>
        <PaginationPage href="?page=3" current>
          3
        </PaginationPage>
        <PaginationPage href="?page=4">4</PaginationPage>
        <PaginationGap />
        <PaginationPage href="?page=65">65</PaginationPage>
        <PaginationPage href="?page=66">66</PaginationPage>
      </PaginationList>
      <PaginationNext href="?page=4" />
    </Pagination>
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const l=["StoryPagination"];export{e as StoryPagination,l as __namedExportsOrder,j as default};
