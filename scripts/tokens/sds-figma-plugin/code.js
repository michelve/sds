// ===== SDS FIGMA PLUGIN - SIMPLE CODGEN VERSION =====
// Based on the official Figma codegen plugin documentation
// This is a minimal implementation that follows the exact pattern from the docs

console.log('🚀 SDS Codegen Plugin starting...');

// Make sure that we're in Dev Mode and running codegen
if (figma.editorType === "dev" && figma.mode === "codegen") {
  console.log('✅ Running in codegen mode');
  
  // Register a callback to the "generate" event
  figma.codegen.on("generate", ({ node }) => {
    console.log('🎯 Codegen triggered for node:', node.name);
    
    try {
      // Simple component detection based on node name
      let componentName = 'div';
      let importStatement = '';
      
      // Basic component mapping based on node name
      const nodeName = node.name.toLowerCase();
      
      if (nodeName.includes('button')) {
        componentName = 'Button';
        importStatement = "import { Button } from 'primitives';";
      } else if (nodeName.includes('input') || nodeName.includes('field')) {
        componentName = 'Input';
        importStatement = "import { Input } from 'primitives';";
      } else if (nodeName.includes('text') || nodeName.includes('heading')) {
        componentName = 'Text';
        importStatement = "import { Text } from 'primitives';";
      } else if (nodeName.includes('card')) {
        componentName = 'Card';
        importStatement = "import { Card } from 'primitives';";
      } else if (nodeName.includes('form')) {
        componentName = 'Form';
        importStatement = "import { Form } from 'compositions';";
      } else if (nodeName.includes('header')) {
        componentName = 'Header';
        importStatement = "import { Header } from 'compositions';";
      }
      
      // Generate simple React code
      const code = `${importStatement}

import React from 'react';

const Component = () => {
  return (
    <${componentName}>
      {/* ${node.name} */}
    </${componentName}>
  );
};

export default Component;`;
      
      console.log('✅ Code generated successfully');
      
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