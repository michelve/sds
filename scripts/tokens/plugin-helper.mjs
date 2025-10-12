#!/usr/bin/env node
import fs from "fs";
import process from "process";

console.log("=== Figma Plugin Integration Helper ===");
console.log("This script helps you use Figma plugin data with the token system.");
console.log("");

const pluginDataFile = "./figma-plugin-output.json";

if (!fs.existsSync(pluginDataFile)) {
  console.log("❌ Missing figma-plugin-output.json");
  console.log("");
  console.log("To use this script:");
  console.log("1. Run the Figma plugin (SDS - Figma Token JSON)");
  console.log("2. Copy the JSON output");
  console.log("3. Save it as 'figma-plugin-output.json' in this folder");
  console.log("4. Run this script again");
  process.exit(1);
}

try {
  const pluginData = JSON.parse(fs.readFileSync(pluginDataFile, 'utf8'));
  
  // Check if it has variables
  if (pluginData && pluginData.length > 0) {
    console.log("✅ Found plugin data with", pluginData.length, "entries");
    
    // Find variables (they should have mode/collection data)
    const variables = pluginData.filter(item => 
      item.name && (item.mode || item.collection)
    );
    
    if (variables.length > 0) {
      console.log("✅ Found", variables.length, "variables");
      
      // Look for purple colors
      const purpleVars = variables.filter(v => 
        v.value && typeof v.value === 'string' && 
        (v.value.includes('purple') || v.name.toLowerCase().includes('brand'))
      );
      
      if (purpleVars.length > 0) {
        console.log("🟣 Found variables that might contain your purple colors:");
        purpleVars.forEach(v => {
          console.log(`   ${v.name}: ${v.value}`);
        });
      }
      
      console.log("");
      console.log("Next steps:");
      console.log("1. The plugin data needs to be converted to W3C token format");
      console.log("2. Save the converted data as tokens.json");
      console.log("3. Run 'npm run script:tokens' to generate CSS");
      
    } else {
      console.log("❌ No variables found in plugin data");
      console.log("The plugin might have encountered errors or exported different data");
    }
  } else {
    console.log("❌ Plugin data appears to be empty or malformed");
  }
  
} catch (error) {
  console.log("❌ Error reading plugin data:", error.message);
  console.log("Make sure the JSON file is valid");
}