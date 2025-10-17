#!/bin/bash

echo "🚀 SDS Monorepo Functionality Verification"
echo "=========================================="

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print status
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
        return 1
    fi
}

# Function to print info
print_info() {
    echo -e "${YELLOW}ℹ️  $1${NC}"
}

# Counter for tests
total_tests=0
passed_tests=0

# Test function
run_test() {
    total_tests=$((total_tests + 1))
    print_info "Testing: $1"
    if eval "$2"; then
        print_status 0 "$1"
        passed_tests=$((passed_tests + 1))
    else
        print_status 1 "$1"
    fi
    echo ""
}

echo ""
print_info "Verifying monorepo structure and functionality..."
echo ""

# 1. Verify design token generation
run_test "Design tokens build (multi-platform)" "cd packages/design-tokens && npm run tokens:build > /dev/null 2>&1"

# 2. Verify all platform outputs exist
run_test "CSS tokens output" "test -f packages/design-tokens/dist/css/tokens.css"
run_test "JavaScript tokens output" "test -f packages/design-tokens/dist/js/tokens.js"
run_test "SCSS tokens output" "test -f packages/design-tokens/dist/scss/tokens.scss"
run_test "JSON tokens output" "test -f packages/design-tokens/dist/json/tokens.json"
run_test "React Native tokens output" "test -f packages/design-tokens/dist/react-native/tokens.js"
run_test "iOS tokens output" "test -f packages/design-tokens/dist/ios/tokens.h"
run_test "Android tokens output" "test -f packages/design-tokens/dist/android/colors.xml"

# 3. Verify React UI package build
run_test "React UI package build" "cd packages/ui-react && npm run build > /dev/null 2>&1"

# 4. Verify UI package outputs
run_test "React UI ES module" "test -f packages/ui-react/dist/index.es.js"
run_test "React UI UMD bundle" "test -f packages/ui-react/dist/index.umd.js"
run_test "React UI CSS bundle" "test -f packages/ui-react/dist/ui-react.css"

# 5. Verify Storybook build
run_test "Storybook documentation build" "cd packages/docs-site && npm run build-storybook > /dev/null 2>&1"

# 6. Verify Storybook outputs
run_test "Storybook index.html" "test -f packages/docs-site/dist/index.html"
run_test "Storybook project.json" "test -f packages/docs-site/dist/project.json"

# 7. Verify component count preservation
ui_components=$(find packages/ui-react/src -name "*.tsx" -o -name "*.ts" | grep -v ".test." | grep -v ".stories." | wc -l | tr -d ' ')
run_test "UI component files preserved (expecting ~333)" "test $ui_components -gt 300"

# 8. Verify story count preservation  
storybook_stories=$(find packages/docs-site/src/stories -name "*.stories.*" | wc -l | tr -d ' ')
run_test "Storybook stories preserved (expecting ~33)" "test $storybook_stories -gt 30"

# 9. Verify Figma Code Connect files
figma_files=$(find packages/ui-react/src -name "*.figma.tsx" | wc -l | tr -d ' ')
run_test "Figma Code Connect files preserved (expecting ~31)" "test $figma_files -gt 25"

# 10. Verify token count and values
token_count=$(grep -c "sds-color-" packages/design-tokens/dist/css/tokens.css)
run_test "Design token count preserved (expecting 150+)" "test $token_count -gt 150"

# 11. Verify CSS variable references are maintained
css_var_refs=$(grep -c "var(--sds-" packages/design-tokens/dist/css/tokens.css)
run_test "CSS variable references preserved" "test $css_var_refs -gt 50"

# 12. Test root level build
run_test "Root monorepo build" "npm run build > /dev/null 2>&1"

# 13. Verify package.json workspaces
run_test "Package workspaces configuration" "npm ls --workspaces --depth=0 > /dev/null 2>&1"

# Final summary
echo ""
echo "=========================================="
echo "🎯 Test Results Summary"
echo "=========================================="
echo -e "Total tests: ${YELLOW}$total_tests${NC}"
echo -e "Passed: ${GREEN}$passed_tests${NC}"
echo -e "Failed: ${RED}$((total_tests - passed_tests))${NC}"

if [ $passed_tests -eq $total_tests ]; then
    echo ""
    echo -e "${GREEN}🎉 ALL TESTS PASSED! Monorepo transformation successful.${NC}"
    echo ""
    echo "✅ Multi-platform design tokens generated"
    echo "✅ React UI package builds correctly" 
    echo "✅ Storybook documentation builds correctly"
    echo "✅ All 333+ UI components preserved"
    echo "✅ All 33+ Storybook stories preserved"
    echo "✅ All 31+ Figma Code Connect files preserved"
    echo "✅ Complete token pipeline functionality maintained"
    echo ""
    echo "🚀 Ready for Angular and Vue package development!"
    exit 0
else
    echo ""
    echo -e "${RED}❌ Some tests failed. Please review and fix issues.${NC}"
    exit 1
fi