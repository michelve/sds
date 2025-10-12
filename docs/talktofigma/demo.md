# TalkToFigma Demo & Examples

## 🚀 Getting Started Demo

### Essential First Steps

#### 1. Join the Communication Channel

**Always start with this command:**
```bash
@TalkToFigma join channel
```

**Expected Response:**
```
✅ Successfully joined Figma communication channel
🔗 Connection established to Figma desktop app
📡 WebSocket server running on port 3055
```

#### 2. Get Document Information

```bash
@TalkToFigma get current document information
```

**Example Response:**
```json
{
  "documentName": "Design System v2.0",
  "documentId": "abc123def456",
  "currentPage": "Components",
  "totalPages": 5,
  "hasSelection": true,
  "selectionCount": 1
}
```

#### 3. Work with Current Selection

```bash
@TalkToFigma get my current selection
```

**Example Response:**
```json
{
  "elementType": "COMPONENT",
  "name": "Button/Primary",
  "id": "123:456",
  "width": 120,
  "height": 40,
  "properties": {
    "background": "#3B82F6",
    "borderRadius": 8,
    "padding": "12px 24px"
  }
}
```

## 🎯 Real-World Workflow Examples

### Example 1: Design System Component Analysis

#### Figma Setup
1. Open your design system file in Figma Desktop
2. Navigate to the Components page
3. Select a button component

#### Step-by-Step Workflow

**Step 1: Establish Connection**
```bash
@TalkToFigma join channel
```

**Step 2: Get Document Context**
```bash
@TalkToFigma what page am I currently on?
```

**Step 3: Analyze Selected Component**
```bash
@TalkToFigma get my current Figma selection details
```

**Step 4: Generate Code from Selection**
```bash
Generate a React component based on my current Figma selection using TalkToFigma
```

**Expected Output:**
```json
{
  "colors": {
    "primary-600": "#2563eb",
    "primary-700": "#1d4ed8",
    "gray-200": "#e5e7eb",
    "gray-300": "#d1d5db"
  },
  "spacing": {
    "padding-x": "16px",
    "padding-y": "8px"
  },
  "typography": {
    "font-weight": "500",
    "font-size": "14px"
  }
}
```

### Example 2: Card Component

#### Figma Setup
1. **Create card** with image, title, description, and action button
2. **Use components** for reusable elements
3. **Apply consistent spacing** using auto-layout
4. **Set proper constraints** for responsiveness

#### TalkToFigma Usage

**Step 1: Select the card component**

**Step 2: Generate with existing components**
```bash
generate my Figma selection using components from src/components/ui
```

**Expected Output:**
```jsx
import React from 'react';
import { Button } from './ui/Button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/Card';

const ProductCard = ({ 
  image, 
  title, 
  description, 
  price, 
  onAddToCart 
}) => {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="p-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="text-xl font-bold text-green-600">${price}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="primary" 
          className="w-full"
          onClick={onAddToCart}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
```

### Example 3: Navigation Component

#### Figma Setup
1. **Create navigation** with logo, menu items, and CTA button
2. **Design mobile version** with hamburger menu
3. **Use consistent typography** scales
4. **Apply brand colors** from Figma variables

#### TalkToFigma Usage

**Step 1: Select navigation component**

**Step 2: Generate responsive navigation**
```bash
generate responsive React component from my Figma selection with mobile menu
```

**Expected Output:**
```jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                >
                  {item}
                </a>
              ))}
              <button className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
```

## 🎨 Design System Workflow

### Step 1: Setup Design System in Figma

1. **Create color variables**
   - Primary: #2563eb
   - Secondary: #64748b
   - Success: #16a34a
   - Error: #dc2626

2. **Define typography scales**
   - Heading: 32px/40px
   - Body: 16px/24px
   - Caption: 14px/20px

3. **Set spacing variables**
   - xs: 4px
   - sm: 8px
   - md: 16px
   - lg: 24px
   - xl: 32px

### Step 2: Extract Design System

```bash
create design system rules for this project
```

**Generated Output:**
```css
/* Design Tokens */
:root {
  /* Colors */
  --color-primary: #2563eb;
  --color-secondary: #64748b;
  --color-success: #16a34a;
  --color-error: #dc2626;

  /* Typography */
  --font-size-heading: 2rem;
  --line-height-heading: 2.5rem;
  --font-size-body: 1rem;
  --line-height-body: 1.5rem;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}
```

### Step 3: Generate Components with Design System

```bash
generate my Figma selection using design tokens from Figma variables
```

## 🔄 Workflow Examples

### Daily Development Workflow

1. **Morning Setup**
   ```bash
   # Start services
   npm run dev
   npm run figma-socket
   ```

2. **Design Review**
   ```bash
   # Get overview of new designs
   show me the Figma document structure
   
   # Check what's changed
   list all components in this Figma file
   ```

3. **Component Development**
   ```bash
   # Generate individual components
   generate React component from my Figma selection
   
   # Extract styling information
   get the variables used in my Figma selection
   ```

4. **Integration**
   ```bash
   # Generate with existing components
   generate my Figma selection using components from src/components/ui
   ```

### Team Collaboration Workflow

1. **Designer Handoff**
   - Designer shares Figma link
   - Developer selects components to implement
   - Extract design specifications automatically

2. **Code Generation**
   ```bash
   # Generate initial implementation
   generate TypeScript React component from my Figma selection
   
   # Get detailed specifications
   get detailed information about my Figma selection including dimensions and styling
   ```

3. **Review and Refine**
   ```bash
   # Generate with accessibility
   generate WCAG-compliant component from my Figma selection
   
   # Optimize for performance
   generate optimized component from my Figma selection
   ```

## 📊 Performance Examples

### Before TalkToFigma
- **Manual implementation**: 2-4 hours per component
- **Design inconsistencies**: Common
- **Maintenance overhead**: High

### After TalkToFigma
- **Automated generation**: 5-10 minutes per component
- **Design fidelity**: 95%+ accuracy
- **Maintenance**: Automatic updates from Figma

## 🎯 Use Case Scenarios

### Scenario 1: Rapid Prototyping
**Goal**: Build MVP quickly from Figma designs

```bash
# Generate all components for a page
generate all components from this Figma page

# Create page layout
generate page layout from my Figma selection using CSS Grid
```

### Scenario 2: Design System Migration
**Goal**: Migrate from old design system to new

```bash
# Extract new design tokens
get all variables from this Figma file

# Generate updated components
generate my Figma selection using new design system variables
```

### Scenario 3: Cross-Platform Development
**Goal**: Generate code for multiple platforms

```bash
# Web version
generate React component from my Figma selection

# Mobile version
generate React Native component from my Figma selection

# Desktop version
generate Electron component from my Figma selection
```

## 🐛 Common Issues & Solutions

### Issue: Component Not Generated
**Problem**: Selected element doesn't generate expected component

**Solution**:
```bash
# Check selection
what is currently selected in Figma?

# Simplify request
get basic information about my Figma selection

# Try different approach
generate HTML and CSS from my Figma selection
```

### Issue: Styling Inconsistencies
**Problem**: Generated styles don't match Figma

**Solution**:
```bash
# Extract exact variables
list the variable names and their values used in my Figma selection

# Get precise measurements
get detailed dimensions and spacing from my Figma selection

# Include screenshot for reference
generate my Figma selection with screenshot reference
```

## 📈 Best Practices Demonstrated

1. **Start Simple**: Begin with basic components before complex layouts
2. **Use Variables**: Leverage Figma variables for consistency
3. **Test Early**: Generate components during design phase
4. **Iterate Fast**: Use TalkToFigma for rapid iteration
5. **Maintain Fidelity**: Always compare generated code with Figma design

---

> 🎉 **You're ready!** Start using TalkToFigma in your projects