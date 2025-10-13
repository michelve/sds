import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{D as c,u as w,v as R,w as u,x as p,y as g,i as C,B as D,c as s,z as S,E as P,H as v,J as k,K as d,M as b,N as M,O as o}from"./Grid-BI0M6ZtH.js";import{r as I}from"./index-D4H_InIO.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./useMediaQuery-BLMSMJgh.js";const $={component:c,title:"SDS Primitives/Dialog",parameters:{layout:"centered"}},a={name:"Dialog",render:l=>e.jsx(w,{...l,variant:"primary",icon:e.jsx(S,{}),label:"Open Dialog",children:({close:n})=>e.jsxs(e.Fragment,{children:[e.jsx(R,{onPress:n}),e.jsx(u,{children:"Open Dialog"}),e.jsx(p,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),e.jsx(g,{children:e.jsx(C,{label:"Amount",name:"amount",placeholder:"$0.00"})}),e.jsxs(D,{children:[e.jsx(s,{onPress:n,children:"Refund"}),e.jsx(s,{variant:"subtle",onPress:n,children:"Cancel"})]})]})})},r={name:"Dialog Controlled",render:()=>{const[l,n]=I.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onPress:()=>n(!l),children:"Open Dialog"}),e.jsx(P,{isDismissable:!0,isOpen:l,onOpenChange:i=>n(i),children:e.jsxs(c,{children:[e.jsx(u,{children:"Open Dialog"}),e.jsx(p,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),e.jsx(g,{children:e.jsx(C,{label:"Amount",name:"amount",placeholder:"$0.00"})}),e.jsxs(D,{children:[e.jsx(s,{onPress:()=>n(!1),children:"Refund"}),e.jsx(s,{variant:"subtle",onPress:()=>n(!1),children:"Cancel"})]})]})})]})}},t={name:"Dialog Body Bleed",render:()=>{const[l,n]=I.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onPress:()=>n(!l),children:"Open Dialog"}),e.jsx(P,{isDismissable:!0,isOpen:l,onOpenChange:i=>n(i),children:e.jsxs(c,{children:[e.jsx(u,{children:"Open Dialog"}),e.jsx(p,{children:"The refund will be reflected in the customer’s bank account 2 to 3 business days after processing."}),e.jsx(g,{bleed:!0,children:e.jsxs(v,{bleed:!0,children:[e.jsx(k,{children:e.jsxs(d,{children:[e.jsx(b,{isRowHeader:!0,children:"Name"}),e.jsx(b,{children:"Number"})]})}),e.jsxs(M,{children:[e.jsxs(d,{children:[e.jsx(o,{children:"Jake"}),e.jsx(o,{children:"7"})]}),e.jsxs(d,{children:[e.jsx(o,{children:"Kale"}),e.jsx(o,{children:"8"})]})]})]})}),e.jsxs(D,{children:[e.jsx(s,{onPress:()=>n(!1),children:"Refund"}),e.jsx(s,{variant:"subtle",onPress:()=>n(!1),children:"Cancel"})]})]})})]})}};var m,h,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Dialog",
  render: args => <DialogButton {...args} variant="primary" icon={<IconMenu />} label="Open Dialog">
      {({
      close
    }) => <>
          <DialogClose onPress={close} />
          <DialogTitle>Open Dialog</DialogTitle>
          <DialogDescription>
            The refund will be reflected in the customer’s bank account 2 to 3
            business days after processing.
          </DialogDescription>
          <DialogBody>
            <InputField label="Amount" name="amount" placeholder="$0.00" />
          </DialogBody>
          <ButtonGroup>
            <Button onPress={close}>Refund</Button>
            <Button variant="subtle" onPress={close}>
              Cancel
            </Button>
          </ButtonGroup>
        </>}
    </DialogButton>
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,B,O;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Dialog Controlled",
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onPress={() => setIsOpen(!isOpen)}>Open Dialog</Button>
        <DialogModal isDismissable isOpen={isOpen} onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}>
          <Dialog>
            <DialogTitle>Open Dialog</DialogTitle>
            <DialogDescription>
              The refund will be reflected in the customer’s bank account 2 to 3
              business days after processing.
            </DialogDescription>
            <DialogBody>
              <InputField label="Amount" name="amount" placeholder="$0.00" />
            </DialogBody>
            <ButtonGroup>
              <Button onPress={() => setIsOpen(false)}>Refund</Button>
              <Button variant="subtle" onPress={() => setIsOpen(false)}>
                Cancel
              </Button>
            </ButtonGroup>
          </Dialog>
        </DialogModal>
      </>;
  }
}`,...(O=(B=r.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var T,f,y;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Dialog Body Bleed",
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onPress={() => setIsOpen(!isOpen)}>Open Dialog</Button>
        <DialogModal isDismissable isOpen={isOpen} onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}>
          <Dialog>
            <DialogTitle>Open Dialog</DialogTitle>
            <DialogDescription>
              The refund will be reflected in the customer’s bank account 2 to 3
              business days after processing.
            </DialogDescription>
            <DialogBody bleed={true}>
              <Table bleed={true}>
                <TableHead>
                  <TableRow>
                    <TableColumn isRowHeader>Name</TableColumn>
                    <TableColumn>Number</TableColumn>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Jake</TableCell>
                    <TableCell>7</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Kale</TableCell>
                    <TableCell>8</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </DialogBody>
            <ButtonGroup>
              <Button onPress={() => setIsOpen(false)}>Refund</Button>
              <Button variant="subtle" onPress={() => setIsOpen(false)}>
                Cancel
              </Button>
            </ButtonGroup>
          </Dialog>
        </DialogModal>
      </>;
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const J=["StoryDialog","StoryDialogControlled","StoryDialogBodyBleed"];export{a as StoryDialog,t as StoryDialogBodyBleed,r as StoryDialogControlled,J as __namedExportsOrder,$ as default};
