# Contact Form Design & Development Prompt

## Task

Create and validate a responsive Contact Form design in Figma using our design system and shadcn UI components.

---

## Design Requirements (Figma + TalktoFigma MCP)

1. Create a new **Contact Form** frame.
2. Place the form inside a **Card** container (use our card component from design system).  
   - Card has **16px padding** and **16px margin**.
3. Inside the Card, add an **Auto Layout** vertical form.  
   - Gap between fields: **10px**.
   - All fields should stretch to container width (fill container).
4. Add the following labeled inputs (rows, not columns):  
   - **Name** (Text input)  
   - **Address** (Text input, full width)  
   - **Tel** (Phone input with validation)  
   - **Your Message** (Multiline textarea)  
5. Add a **Send Form** button (primary variant from our shadcn library).
6. Below the form, include **Contact Information** (address, phone, email) styled with body text.
7. Apply our **defined design tokens** (colors, typography, spacing, variables) and connect to Figma components (Inputs, Buttons, Cards).
8. Ensure **responsive auto-layout** so the form adapts at mobile, tablet, and desktop breakpoints.
9. Export a **screenshot of the final form** and save as `form.png`.

---

## Code Requirements (React + shadcn UI)

1. Use shadcn imported components (`Card`, `Input`, `Textarea`, `Button`, `Form`, etc.).
2. Add **form validation** (name required, tel = phone pattern, message required).
3. Implement **error handling** (inline error messages under fields).
4. Show a **success message** (toast or alert) after submission.
5. Include static **contact information** section under the form.
6. Ensure the form is fully **responsive** (mobile-first, flex/auto layout).
7. Use the same component hierarchy and names as in Figma design to maintain sync.

---

## Validation Step (Playwright MCP)

1. Compare the rendered React component against the `form.png` screenshot from Figma.
2. Ensure layout, spacing, and responsiveness match our design system specs.

## Resources:

Frame and file link: https://www.figma.com/design/qh39N0zcMJfRKKkjPnBXKJ/shadcn-ds?node-id=109-963

file ID: qh39N0zcMJfRKKkjPnBXKJ
node ID: 109-963

## TalktoFigma MCP)

Note: make sure to connect to the correct channel first