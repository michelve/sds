// Test file to understand window object timing in Figma environment
console.log('🔍 Starting window object timing test');

// Test 1: Is window available immediately?
console.log('🔍 Test 1 - Initial window check:', typeof window !== 'undefined' ? '✅ Available' : '❌ Undefined');

// Test 2: Can we access window properties?
if (typeof window !== 'undefined') {
  console.log('🔍 Test 2 - Window properties:', {
    hasDocument: typeof window.document !== 'undefined',
    hasLocation: typeof window.location !== 'undefined',
    hasNavigator: typeof window.navigator !== 'undefined'
  });
  
  // Test 3: Can we set properties on window?
  try {
    window.testProperty = 'test value';
    console.log('🔍 Test 3 - Set window property:', window.testProperty === 'test value' ? '✅ Success' : '❌ Failed');
  } catch (error) {
    console.log('🔍 Test 3 - Set window property: ❌ Error:', error.message);
  }
} else {
  console.log('🔍 Skipping tests 2-3 because window is undefined');
}

// Test 4: Check for Figma-specific globals
console.log('🔍 Test 4 - Figma globals:', {
  figma: typeof figma !== 'undefined' ? '✅ Available' : '❌ Undefined',
  __html__: typeof __html__ !== 'undefined' ? '✅ Available' : '❌ Undefined'
});

// Test 5: Retry mechanism - keep checking window for 5 seconds
let retryCount = 0;
const maxRetries = 50;
const retryInterval = 100;

function checkWindowPeriodically() {
  retryCount++;
  const windowAvailable = typeof window !== 'undefined';
  
  console.log(`🔍 Test 5 - Retry ${retryCount}/${maxRetries}: Window ${windowAvailable ? '✅ Available' : '❌ Undefined'}`);
  
  if (windowAvailable) {
    console.log('🎉 Window became available after', retryCount, 'attempts');
    
    // Try to set a test module
    try {
      window.testModule = { test: 'success' };
      console.log('🎉 Successfully set testModule on window');
    } catch (error) {
      console.log('❌ Failed to set testModule:', error.message);
    }
    return;
  }
  
  if (retryCount < maxRetries) {
    setTimeout(checkWindowPeriodically, retryInterval);
  } else {
    console.log('❌ Window never became available after', maxRetries, 'attempts');
  }
}

// Start the periodic check
setTimeout(checkWindowPeriodically, 100);

console.log('🔍 Window timing test initialization complete');