// ===== SDS FIGMA PLUGIN - ENHANCED CODGEN VERSION =====
// Based on the official Figma codegen plugin documentation
// Properly detects component structure using TypeScript best practices

console.log('🚀 SDS Codegen Plugin starting...');

// Helper function to check if node has children (following TypeScript best practices)
function supportsChildren(node) {
  return node.type === 'FRAME' || node.type === 'GROUP' ||
         node.type === 'COMPONENT' || node.type === 'INSTANCE' ||
         node.type === 'BOOLEAN_OPERATION';
}

// Helper function to get text content safely
function getTextContent(node) {
  if (node.type === 'TEXT') {
    return node.characters || '';
  }
  return '';
}

// Helper function to analyze component structure
function analyzeComponentStructure(node) {
  const analysis = {
    hasButtons: false,
    hasInputs: false,
    hasText: false,
    hasForms: false,
    textContent: [],
    componentType: 'container'
  };
  
  if (!supportsChildren(node)) {
    return analysis;
  }
  
  // Safely analyze children
  try {
    const children = node.children;
    if (!children) return analysis;
    
    for (const child of children) {
      const childName = child.name.toLowerCase();
      
      // Check for buttons
      if (childName.includes('button') || childName.includes('btn')) {
        analysis.hasButtons = true;
      }
      
      // Check for inputs/fields
      if (childName.includes('input') || childName.includes('field') || 
          childName.includes('textfield') || childName.includes('search')) {
        analysis.hasInputs = true;
      }
      
      // Check for forms
      if (childName.includes('form')) {
        analysis.hasForms = true;
      }
      
      // Extract text content
      if (child.type === 'TEXT') {
        const text = getTextContent(child);
        if (text) {
          analysis.hasText = true;
          analysis.textContent.push(text);
        }
      }
      
      // Recursively analyze nested children
      if (supportsChildren(child)) {
        const childAnalysis = analyzeComponentStructure(child);
        analysis.hasButtons = analysis.hasButtons || childAnalysis.hasButtons;
        analysis.hasInputs = analysis.hasInputs || childAnalysis.hasInputs;
        analysis.hasForms = analysis.hasForms || childAnalysis.hasForms;
        analysis.hasText = analysis.hasText || childAnalysis.hasText;
        analysis.textContent.push(...childAnalysis.textContent);
      }
    }
    
    // Determine component type based on analysis
    if (analysis.hasForms && analysis.hasInputs) {
      analysis.componentType = 'form';
    } else if (analysis.hasButtons && analysis.hasText) {
      analysis.componentType = 'hero';
    } else if (analysis.hasButtons) {
      analysis.componentType = 'header';
    } else if (analysis.hasText && analysis.textContent.length > 1) {
      analysis.componentType = 'card';
    }
    
  } catch (error) {
    console.warn('Error analyzing component structure:', error);
  }
  
  return analysis;
}

// Helper function to generate component code based on analysis
function generateComponentCode(node, analysis) {
  const imports = new Set(['import React from \'react\';']);
  let componentCode = '';
  
  switch (analysis.componentType) {
    case 'form':
      imports.add("import { FormBox } from 'compositions';");
      imports.add("import { InputField } from 'primitives';");
      imports.add("import { Button } from 'primitives';");
      
      // Generate form fields based on detected text content
      const formFields = analysis.textContent
        .filter(text => !text.toLowerCase().includes('button') && text.length > 0)
        .map(text => `    <InputField 
      label="${text}"
      placeholder="Enter ${text.toLowerCase()}"
      required
    />`)
        .join('\n');
      
      componentCode = `<FormBox onSubmit={(data) => console.log('Form submitted:', data)}>
${formFields}
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </FormBox>`;
      break;
      
    case 'hero':
      imports.add("import { Hero } from 'compositions';");
      imports.add("import { TextContentTitle } from 'primitives';");
      imports.add("import { Button } from 'primitives';");
      
      const title = analysis.textContent[0] || 'Get Started';
      const subtitle = analysis.textContent[1] || 'Join thousands of users';
      
      componentCode = `<Hero variant="subtle">
    <TextContentTitle 
      align="center" 
      title="${title}" 
      subtitle="${subtitle}"
    />
    <Button variant="primary" size="large">
      Get Started
    </Button>
  </Hero>`;
      break;
      
    case 'header':
      imports.add("import { Header } from 'compositions';");
      imports.add("import { Button } from 'primitives';");
      
      componentCode = `<Header>
    <Button variant="primary">Sign In</Button>
    <Button variant="outline">Sign Up</Button>
  </Header>`;
      break;
      
    case 'card':
      imports.add("import { Card } from 'primitives';");
      imports.add("import { TextHeading } from 'primitives';");
      imports.add("import { Text } from 'primitives';");
      
      const cardTitle = analysis.textContent[0] || node.name;
      const cardContent = analysis.textContent[1] || 'Card content goes here.';
      
      componentCode = `<Card>
    <TextHeading>${cardTitle}</TextHeading>
    <Text>${cardContent}</Text>
  </Card>`;
      break;
      
    default:
      // Default container
      const nodeName = node.name.toLowerCase();
      if (nodeName.includes('button')) {
        imports.add("import { Button } from 'primitives';");
        componentCode = `<Button variant="primary">${node.name}</Button>`;
      } else if (nodeName.includes('input') || nodeName.includes('field')) {
        imports.add("import { InputField } from 'primitives';");
        componentCode = `<InputField 
    label="${node.name}"
    placeholder="Enter ${node.name.toLowerCase()}"
    required
  />`;
      } else if (nodeName.includes('text') || nodeName.includes('heading')) {
        imports.add("import { Text } from 'primitives';");
        componentCode = `<Text>${analysis.textContent[0] || node.name}</Text>`;
      } else {
        componentCode = `<div>
    {/* ${node.name} */}
  </div>`;
      }
  }
  
  return { imports, componentCode };
}

// Make sure that we're in Dev Mode and running codegen
if (figma.editorType === "dev" && figma.mode === "codegen") {
  console.log('✅ Running in codegen mode');
  
  // Register a callback to the "generate" event
  figma.codegen.on("generate", ({ node }) => {
    console.log('🎯 Codegen triggered for node:', node.name);
    
    try {
      // Analyze the component structure
      const analysis = analyzeComponentStructure(node);
      console.log('🔍 Component analysis:', analysis);
      
      // Generate component code based on analysis
      const { imports, componentCode } = generateComponentCode(node, analysis);
      
      // Create the final code
      const importStatements = Array.from(imports).join('\n');
      const componentName = node.name.replace(/\s+/g, '');
      
      const code = `${importStatements}

const ${componentName} = () => {
  return (
    ${componentCode}
  );
};

export default ${componentName};`;
      
      console.log('✅ Enhanced code generated successfully');
      
      return [
        {
          title: "SDS Component",
          language: "TYPESCRIPT",
          code: code
        }
      ];
      
    } catch (error) {
      console.error('❌ Error generating code:', error);
      
      return [
        {
          title: "SDS Component (Error)",
          language: "TYPESCRIPT",
          code: `// Error generating code: ${error.message}

import React from 'react';

const Component = () => {
  return (
    <div>
      {/* Error occurred during code generation */}
    </div>
  );
};

export default Component;`
        }
      ];
    }
  });
  
  console.log('✅ SDS Codegen Plugin registered successfully');
} else {
  console.log('⚠️ Plugin only works in Dev Mode codegen');
}