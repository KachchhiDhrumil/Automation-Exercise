const fs = require('fs');
const path = require('path');

const timestamp = Date.now();

const testData = {
  USER_NAME: `user_${timestamp}`,
  USER_EMAIL: `user_${timestamp}@example.com`,
  USER_PASSWORD: `pass_${timestamp}`,
  DOB_DAY: "15",
  DOB_MONTH: "6",
  DOB_YEAR: "1995",
  USER_FIRST_NAME: "xyz",
  USER_LAST_NAME: "abc",
  USER_COMPANY: "ignek",
  USER_ADDRESS: "A/102, bcd",
  USER_COUNTRY: "India",
  USER_STATE: "Gujarat",
  USER_CITY: "Ahmedabad",
  USER_ZIP: "236743",
  USER_MOBILE: "1234567890",
  PRODUCT_NAME: "Tshirt",
  CARD_NAME:'abc',
  CARD_NUMBER: '1234567887654321',
  CARD_CVC: '784',
  CARD_EXPIRY_MONTH: '12',
  CARD_EXPIRY_YEAR: '2029',
};

fs.writeFileSync(
  path.join(__dirname, 'testData', 'data.json'),
  JSON.stringify(testData, null, 2)
);

console.log('✅ testData/data.json generated with dynamic timestamp!');