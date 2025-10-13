import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{p as r}from"./index-C62DzI8J.js";import{d as c,a2 as x,a3 as i}from"./Grid-BI0M6ZtH.js";import"./index-D4H_InIO.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./useMediaQuery-BLMSMJgh.js";const z={component:c,title:"SDS Primitives/Image",parameters:{layout:"centered"}},a={name:"Image",args:{size:"medium"},render:m=>e.jsx("div",{style:{height:"calc(100vh - 2rem)",display:"grid",placeItems:"center",width:"100%"},children:e.jsx(c,{src:r,...m})})},s={name:"Image srcSet",render:m=>e.jsx(c,{src:r,srcSet:`${r} 500w, ${r} 1001w`,sizes:"(max-width: 700px) 500w, 1000w",...m})},t={name:"Picture",args:{},argTypes:{},render:()=>e.jsxs(x,{children:[e.jsx(i,{media:"(max-width: 499px)",srcSet:r}),e.jsx(i,{media:"(min-width: 500px)",srcSet:r}),e.jsx(c,{src:r,alt:"Magical thing"})]})};var o,n,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Image",
  args: {
    size: "medium"
  },
  render: args => <div style={{
    height: "calc(100vh - 2rem)",
    display: "grid",
    placeItems: "center",
    width: "100%"
  }}>
      <Image src={placeholder} {...args} />
    </div>
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var p,l,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:'{\n  name: "Image srcSet",\n  render: args => <Image src={placeholder} srcSet={`${placeholder} 500w, ${placeholder} 1001w`} sizes="(max-width: 700px) 500w, 1000w" {...args} />\n}',...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,h,S;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Picture",
  args: {},
  argTypes: {},
  render: () => <Picture>
      <PictureSource media="(max-width: 499px)" srcSet={placeholder} />
      <PictureSource media="(min-width: 500px)" srcSet={placeholder} />
      <Image src={placeholder} alt="Magical thing" />
    </Picture>
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const $=["StoryImage","StoryImageSrcSet","StoryPicture"];export{a as StoryImage,s as StoryImageSrcSet,t as StoryPicture,$ as __namedExportsOrder,z as default};
