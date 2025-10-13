import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{P as n,Q as x,R as b,b as h,U as S,i as F,V as f,W as a,X as g,Y as y,t as j,C as r,Z as v,_ as o,B as R,c as w,$ as T}from"./Grid-BI0M6ZtH.js";import{r as I}from"./index-D4H_InIO.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./useMediaQuery-BLMSMJgh.js";const B={component:n,title:"SDS Primitives/Inputs",parameters:{layout:"centered"}},t={name:"Fieldset",args:{disabled:!1},render:c=>{const[s,p]=I.useState("");return e.jsxs(x,{onSubmit:i=>{i.preventDefault();const m=T(i.currentTarget);p(JSON.stringify(m,null,2))},children:[e.jsxs(n,{disabled:c.disabled,children:[e.jsx(b,{children:"Shipping details"}),e.jsx(h,{children:"Without this your odds of getting your order are low."}),e.jsxs(S,{children:[e.jsx(F,{isRequired:!0,name:"address",defaultValue:"123 Example Ln.",label:"Street address",description:"Hello there"}),e.jsxs(f,{isRequired:!0,name:"country",defaultSelectedKey:"us",label:"Country",description:"I am a select description",children:[e.jsx(a,{id:"ca",children:"Canada"}),e.jsx(a,{id:"mx",children:"Mexico"}),e.jsx(a,{id:"us",children:"United States"})]}),e.jsx(g,{name:"range",label:"Slide here",description:"i love this for us",defaultValue:[0,40],showOutput:!0}),e.jsx(y,{isRequired:!0,defaultValue:"Watch out",name:"notes",label:"Delivery notes",isResizable:!1,description:"If you have a tiger, we'd like to know about it."}),e.jsxs(j,{name:"checkboxes",children:[e.jsx(r,{value:"one",label:"One"}),e.jsx(r,{value:"two",label:"Two"})]}),e.jsxs(v,{name:"radios",children:[e.jsx(o,{value:"one",label:"One"}),e.jsx(o,{value:"two",label:"Two"})]}),e.jsx(r,{isRequired:!0,name:"agree",label:"Do you agreee?",description:"We hope you do"})]}),e.jsx(R,{children:e.jsx(w,{type:"submit",children:"Submit"})})]}),s&&e.jsx("pre",{children:s})]})}};var l,d,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Fieldset",
  args: {
    disabled: false
  },
  render: args => {
    const [output, setOutput] = useState("");
    return <Form onSubmit={e => {
      e.preventDefault();
      const data = formEventTargetToFormData(e.currentTarget);
      setOutput(JSON.stringify(data, null, 2));
    }}>
        <Fieldset disabled={args.disabled}>
          <Legend>Shipping details</Legend>
          <Text>Without this your odds of getting your order are low.</Text>
          <FieldGroup>
            <InputField isRequired name="address" defaultValue="123 Example Ln." label="Street address" description="Hello there" />
            <SelectField isRequired name="country" defaultSelectedKey="us" label="Country" description="I am a select description">
              <SelectItem id="ca">Canada</SelectItem>
              <SelectItem id="mx">Mexico</SelectItem>
              <SelectItem id="us">United States</SelectItem>
            </SelectField>
            <SliderField name="range" label="Slide here" description="i love this for us" defaultValue={[0, 40]} showOutput />
            <TextareaField isRequired defaultValue="Watch out" name="notes" label="Delivery notes" isResizable={false} description="If you have a tiger, we'd like to know about it." />
            <CheckboxGroup name="checkboxes">
              <CheckboxField value="one" label="One" />
              <CheckboxField value="two" label="Two" />
            </CheckboxGroup>
            <RadioGroup name="radios">
              <RadioField value="one" label="One" />
              <RadioField value="two" label="Two" />
            </RadioGroup>
            <CheckboxField isRequired name="agree" label="Do you agreee?" description="We hope you do" />
          </FieldGroup>
          <ButtonGroup>
            <Button type="submit">Submit</Button>
          </ButtonGroup>
        </Fieldset>
        {output && <pre>{output}</pre>}
      </Form>;
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const E=["StoryFieldset"];export{t as StoryFieldset,E as __namedExportsOrder,B as default};
