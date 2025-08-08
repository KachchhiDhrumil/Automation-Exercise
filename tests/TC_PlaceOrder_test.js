const AddToCartPage = require('../pages/AddToCartPage');
const loginPage = require('../pages/LoginPage');
const PlaceOrder = require('../pages/PlaceOrder');
const SearchPage = require('../pages/SearchPage');
const SignUpPage = require('../pages/SignUpPage');
const assert = require('assert');


Feature('Login Page');

Scenario('Valid sign up flow', async ({ I }) => {
  I.amOnPage('/login');
  // await SignUpPage.signUpForm();
  await loginPage.login();
  await loginPage.seeWelcomeHeading();
  await SearchPage.searchProduct();
  await AddToCartPage.add();
  await PlaceOrder.place();
  await loginPage.seeWelcomeHeading();

});

// Scenario('Invalid login flow', async ({ I }) => {
//   I.amOnPage('/login');
//   // await loginPage.negativeLogin();
// //   await loginPage.loginWithEmail();

// //   const message = await I.executeScript(() => {
// //   return document.querySelector('input[type="password"]').validationMessage;
// // });
// //   assert.strictEqual(message, 'Please fill in this field.');

//   await loginPage.loginWithPassword

//   const message = await I.executeScript(() => {
//   return document.querySelector('input[type="password"]').validationMessage;
// });
//   assert.strictEqual(message, 'Please fill in this field.');
//   //
// });




