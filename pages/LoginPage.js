const { I } = inject();
const testData = require('../testData/data.json');
const testData2 = require('../testData/data2.json');


module.exports = {
  fields: {
    emailInput: '//input[@data-qa="login-email"]',
    passwordInput: '//input[@type="password"]',
    loginBtn: '//button[@type="submit"]',
    titleH1: '(//div[@class="col-sm-6"]/h1)[1]',
  },

  // Action method: login
  login() {
    console.log('Email:', testData.USER_EMAIL);
    console.log('Password:', testData.USER_PASSWORD);
    I.fillField(this.fields.emailInput,testData.USER_EMAIL);
    I.fillField(this.fields.passwordInput,testData.USER_PASSWORD);
    I.click(this.fields.loginBtn);
  },

  // Action method: check welcome heading
  seeWelcomeHeading() {
    I.seeElement(this.fields.titleH1);
  },

  negativeLogin() {
    console.log('Email:', testData2.USER_EMAIL);
    console.log('Password:', testData2.USER_PASSWORD);
    I.fillField(this.fields.emailInput,testData2.USER_EMAIL);
    I.fillField(this.fields.passwordInput,testData2.USER_PASSWORD);
    I.click(this.fields.loginBtn);
    I.see('Your email or password is incorrect!');
  },

  loginWithEmail(){
    I.fillField(this.fields.emailInput,testData2.USER_EMAIL);
    I.click(this.fields.loginBtn);
  },

  loginWithPassword(){
    I.fillField(this.fields.passwordInput,testData2.USER_PASSWORD);
    I.click(this.fields.loginBtn);
  }
};
