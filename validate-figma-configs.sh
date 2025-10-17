#!/bin/bash

echo "=== Testing React Code Connect ==="
npx figma connect list --config figma.config.react.json

echo -e "\n=== Testing Angular Code Connect ==="
npx figma connect list --config figma.config.angular.json

echo -e "\n=== Testing Multi-Framework Config ==="
npx figma connect list --config figma.config.json

echo -e "\n=== Publishing React ==="
npx figma connect publish --config figma.config.react.json --dry-run

echo -e "\n=== Publishing Angular ==="
npx figma connect publish --config figma.config.angular.json --dry-run

echo "Validation complete!"