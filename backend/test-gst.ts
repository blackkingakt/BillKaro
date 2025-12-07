import { validateGSTIN } from './src/utils/gst.utils';

const testCases = [
    { gstin: '27AABCT1234A1Z5', expected: true, desc: 'Valid GSTIN' },
    { gstin: '07AABCC5678D1Z3', expected: true, desc: 'Valid GSTIN (Delhi)' },
    { gstin: '27AABCT1234A1Z', expected: false, desc: 'Too short' },
    { gstin: '27AABCT1234A1Z55', expected: false, desc: 'Too long' },
    { gstin: '88AABCT1234A1Z5', expected: false, desc: 'Invalid State Code (88)' },
    { gstin: '27AABCT1234A1Z9', expected: true, desc: 'Valid GSTIN with digit check char' }, // Verify pure regex
];

console.log('🧪 Testing GST Validation Utility...\n');

let passed = 0;
let failed = 0;

testCases.forEach((test, index) => {
    const result = validateGSTIN(test.gstin);
    const isPass = result === test.expected;

    if (isPass) {
        console.log(`✅ Test ${index + 1}: ${test.desc} - PASSED`);
        passed++;
    } else {
        console.log(`❌ Test ${index + 1}: ${test.desc} - FAILED`);
        console.log(`   Input: ${test.gstin}`);
        console.log(`   Expected: ${test.expected}, Got: ${result}`);
        failed++;
    }
});

console.log(`\nResults: ${passed} Passed, ${failed} Failed`);

if (failed > 0) process.exit(1);
