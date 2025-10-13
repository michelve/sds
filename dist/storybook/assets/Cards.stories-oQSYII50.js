import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{C as L,P as g,a as t,R as s,S as o,T as u}from"./Panels-CT2ZK9XF.js";import{T as J,b as $,B as H,c as N,I as V,d as n,F as i,e as _,f as D,g as G,h as E}from"./Grid-BI0M6ZtH.js";import{p as r}from"./index-C62DzI8J.js";import"./index-D4H_InIO.js";import"./useMediaQuery-BLMSMJgh.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";const ee={component:L,title:"SDS Compositions/Cards",parameters:{layout:"centered"}},c={name:"Card",args:{direction:"vertical",variant:"default","[asset]":"none","[interaction]":!1},argTypes:{direction:{control:{type:"select"},options:["vertical","horizontal"]},variant:{control:{type:"select"},options:["default","padded","stroke"]},"[asset]":{control:{type:"select"},options:["none","icon","image"]}},render:({"[asset]":a,"[interaction]":R,...q})=>e.jsxs(L,{...q,asset:a==="icon"?e.jsx(V,{size:"32"}):a==="image"?e.jsx(n,{alt:"A nice image",aspectRatio:"1-1",size:"small",src:r}):void 0,interactionProps:R?{"aria-label":"Visit something nice about this card",href:"https://google.com"}:void 0,children:[e.jsx(J,{children:"This is a card"}),e.jsx($,{children:"Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list."}),e.jsx(H,{align:"start",children:e.jsx(N,{variant:"neutral",children:"Hello there!"})})]})},d={name:"Pricing Card",render:()=>e.jsxs(i,{container:!0,wrap:!0,gap:"400",type:"third",alignPrimary:"center",direction:"row",children:[[1,2,3].map(a=>e.jsx(g,{variant:a===2?"brand":void 0,heading:"Wow Tier",action:"Buy this",price:(5*(5-a)).toString(),priceCurrency:"$",size:"large",sku:`sku-${a}`,interval:"month",onAction:()=>{},actionVariant:a===2?"neutral":void 0,list:["List item 1","List item 2","List item 3"]},a)),[1,2,3].map(a=>e.jsx(g,{variant:a===2?"brand":void 0,heading:"Wow Tier",action:"Buy this",price:(5*(5-a)).toString(),priceCurrency:"$",size:"small",sku:`sku-${a}`,interval:"year",onAction:()=>{},actionVariant:a===2?"neutral":void 0,list:["List item 1","List item 2","List item 3"]},a))]})},l={name:"Product Info Card",render:()=>e.jsxs(i,{container:!0,wrap:!0,type:"quarter",gap:"400",direction:"row",children:[e.jsx(t,{asset:e.jsx(n,{alt:"Accessibility!",src:r}),heading:"Product",price:"5",rating:4.7,description:"Wow do we have a cool thing for you. What an amazing thing."}),e.jsx(t,{asset:e.jsx(n,{alt:"Accessibility!",src:r}),heading:"Product",price:"5",rating:4.7,description:"Wow do we have a cool thing for you. What an amazing thing."}),e.jsx(t,{asset:e.jsx(n,{alt:"Accessibility!",src:r}),heading:"Product",price:"5",rating:4.7,description:"Wow do we have a cool thing for you. What an amazing thing."}),e.jsx(t,{asset:e.jsx(n,{alt:"Accessibility!",src:r}),heading:"Product",price:"5",rating:4.7,description:"Wow do we have a cool thing for you. What an amazing thing."})]})},m={name:"Review Card",render:()=>e.jsxs(i,{container:!0,wrap:!0,type:"quarter",alignPrimary:"stretch",gap:"400",direction:"row",children:[e.jsx(s,{stars:4,title:"This rocks",body:"Cannot believe how amazing this experience was",name:"Charlie Brown",date:"June 2024",src:r}),e.jsx(s,{stars:5,title:"This rocks",body:"Cannot believe how amazing this experience was",name:"Charlie Brown",date:"June 2024",src:r}),e.jsx(s,{stars:5,title:"This rocks",body:"Cannot believe how amazing this experience was",name:"Charlie Brown",date:"June 2024",src:r}),e.jsx(s,{stars:4,title:"This rocks",body:"Cannot believe how amazing this experience was",name:"Charlie Brown",date:"June 2024",src:r})]})},p={name:"Stats Card",render:()=>e.jsxs(i,{container:!0,wrap:!0,type:"quarter",alignPrimary:"stretch",gap:"400",direction:"row",children:[e.jsx(o,{icon:e.jsx(_,{size:"40"}),stat:"400",description:"SDS Hours"}),e.jsx(o,{icon:e.jsx(D,{size:"40"}),stat:"15.3k",description:"Lines of TypeScript"}),e.jsx(o,{icon:e.jsx(G,{size:"40"}),stat:"8M",description:"Smiles"}),e.jsx(o,{icon:e.jsx(E,{size:"40"}),stat:"120.4k",description:"Directions"})]})},h={name:"Testimonial Card",render:()=>e.jsxs(i,{container:!0,wrap:!0,type:"third",alignPrimary:"stretch",gap:"400",direction:"row",children:[e.jsx(u,{heading:"“Something splendid”",src:r,username:"fullname421",name:"Full Name"}),e.jsx(u,{heading:"“Something splendid”",src:r,username:"fullname421",name:"Full Name"}),e.jsx(u,{heading:"“Something splendid”",src:r,username:"fullname421",name:"Full Name"})]})};var y,C,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Card",
  args: {
    direction: "vertical",
    variant: "default",
    "[asset]": "none",
    "[interaction]": false
  },
  argTypes: {
    direction: {
      control: {
        type: "select"
      },
      options: ["vertical", "horizontal"]
    },
    variant: {
      control: {
        type: "select"
      },
      options: ["default", "padded", "stroke"]
    },
    "[asset]": {
      control: {
        type: "select"
      },
      options: ["none", "icon", "image"]
    }
  },
  render: ({
    "[asset]": _asset,
    "[interaction]": _interaction,
    ...args
  }) => <Card {...args} asset={_asset === "icon" ? <IconActivity size="32" /> : _asset === "image" ? <Image alt="A nice image" aspectRatio="1-1" size="small" src={placeholder} /> : undefined} interactionProps={_interaction ? {
    "aria-label": "Visit something nice about this card",
    href: "https://google.com"
  } : undefined}>
      <TextHeading>This is a card</TextHeading>
      <Text>
        Answer the frequently asked question in a simple sentence, a longish
        paragraph, or even in a list.
      </Text>
      <ButtonGroup align="start">
        <Button variant="neutral">Hello there!</Button>
      </ButtonGroup>
    </Card>
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var x,v,S;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:'{\n  name: "Pricing Card",\n  render: () => <Flex container wrap gap="400" type="third" alignPrimary="center" direction="row">\n      {[1, 2, 3].map(i => <PricingCard key={i} variant={i === 2 ? "brand" : undefined} heading="Wow Tier" action="Buy this" price={(5 * (5 - i)).toString()} priceCurrency="$" size="large" sku={`sku-${i}`} interval="month" onAction={() => {}} actionVariant={i === 2 ? "neutral" : undefined} list={["List item 1", "List item 2", "List item 3"]} />)}\n      {[1, 2, 3].map(i => <PricingCard key={i} variant={i === 2 ? "brand" : undefined} heading="Wow Tier" action="Buy this" price={(5 * (5 - i)).toString()} priceCurrency="$" size="small" sku={`sku-${i}`} interval="year" onAction={() => {}} actionVariant={i === 2 ? "neutral" : undefined} list={["List item 1", "List item 2", "List item 3"]} />)}\n    </Flex>\n}',...(S=(v=d.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var f,j,P;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Product Info Card",
  render: () => <Flex container wrap type="quarter" gap="400" direction="row">
      <ProductInfoCard asset={<Image alt="Accessibility!" src={placeholder} />} heading="Product" price="5" rating={4.7} description="Wow do we have a cool thing for you. What an amazing thing." />
      <ProductInfoCard asset={<Image alt="Accessibility!" src={placeholder} />} heading="Product" price="5" rating={4.7} description="Wow do we have a cool thing for you. What an amazing thing." />
      <ProductInfoCard asset={<Image alt="Accessibility!" src={placeholder} />} heading="Product" price="5" rating={4.7} description="Wow do we have a cool thing for you. What an amazing thing." />
      <ProductInfoCard asset={<Image alt="Accessibility!" src={placeholder} />} heading="Product" price="5" rating={4.7} description="Wow do we have a cool thing for you. What an amazing thing." />
    </Flex>
}`,...(P=(j=l.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var z,T,b;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Review Card",
  render: () => <Flex container wrap type="quarter" alignPrimary="stretch" gap="400" direction="row">
      <ReviewCard stars={4} title="This rocks" body="Cannot believe how amazing this experience was" name="Charlie Brown" date="June 2024" src={placeholder} />
      <ReviewCard stars={5} title="This rocks" body="Cannot believe how amazing this experience was" name="Charlie Brown" date="June 2024" src={placeholder} />
      <ReviewCard stars={5} title="This rocks" body="Cannot believe how amazing this experience was" name="Charlie Brown" date="June 2024" src={placeholder} />
      <ReviewCard stars={4} title="This rocks" body="Cannot believe how amazing this experience was" name="Charlie Brown" date="June 2024" src={placeholder} />
    </Flex>
}`,...(b=(T=m.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var k,I,W;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Stats Card",
  render: () => <Flex container wrap type="quarter" alignPrimary="stretch" gap="400" direction="row">
      <StatsCard icon={<IconClock size="40" />} stat="400" description="SDS Hours" />
      <StatsCard icon={<IconCode size="40" />} stat="15.3k" description="Lines of TypeScript" />
      <StatsCard icon={<IconSmile size="40" />} stat="8M" description="Smiles" />
      <StatsCard icon={<IconCompass size="40" />} stat="120.4k" description="Directions" />
    </Flex>
}`,...(W=(I=p.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var B,A,F;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Testimonial Card",
  render: () => <Flex container wrap type="third" alignPrimary="stretch" gap="400" direction="row">
      <TestimonialCard heading="“Something splendid”" src={placeholder} username="fullname421" name="Full Name" />
      <TestimonialCard heading="“Something splendid”" src={placeholder} username="fullname421" name="Full Name" />
      <TestimonialCard heading="“Something splendid”" src={placeholder} username="fullname421" name="Full Name" />
    </Flex>
}`,...(F=(A=h.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const ae=["StoryCard","StoryPricingCard","StoryProductInfoCard","StoryReviewCard","StoryStatsCard","StoryTestimonialCard"];export{c as StoryCard,d as StoryPricingCard,l as StoryProductInfoCard,m as StoryReviewCard,p as StoryStatsCard,h as StoryTestimonialCard,ae as __namedExportsOrder,ee as default};
