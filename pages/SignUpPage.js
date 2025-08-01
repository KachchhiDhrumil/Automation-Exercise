const { I } = inject();
const testData = require('../testData/data.json');  // adjust path if needed

module.exports = {
  fields: {
    nameInput: { name: 'name' },
    emailInput: "//input[@data-qa='signup-email']",
    signupBtn: "//button[@data-qa='signup-button']",
    genderMr: '#id_gender1',
    passwordInput: '#password',
    daysDropdown: '#days',
    monthsDropdown: '#months',
    yearsDropdown: '#years',
    newsletterCheckbox: '#newsletter',
    offersCheckbox: '#optin',
    firstNameInput: '#first_name',
    lastNameInput: '#last_name',
    companyInput: '#company',
    addressInput: '#address1',
    countryDropdown: '#country',
    stateInput: '#state',
    cityInput: '#city',
    zipcodeInput: '#zipcode',
    mobileNumberInput: '#mobile_number',
    createAccountBtn: "//button[@data-qa='create-account']",
    title2H2: "//h2[@class='title text-center']",
    continueBtn: "//a[@data-qa='continue-button']",
    headingH1: "(//div[@class='col-sm-6']/h1)[1]",
    logOutBtn: "//ul[@class='nav navbar-nav']/li[4]",
    logIn: "//div[@class='login-form']/h2"
  },

  signUpForm() {
    I.fillField(this.fields.nameInput, testData.USER_NAME);
    I.fillField(this.fields.emailInput, testData.USER_EMAIL);
    I.click(this.fields.signupBtn);
    I.click(this.fields.genderMr);
    I.fillField(this.fields.passwordInput, testData.USER_PASSWORD);
    I.selectOption(this.fields.daysDropdown, testData.DOB_DAY);
    I.selectOption(this.fields.monthsDropdown, testData.DOB_MONTH);
    I.selectOption(this.fields.yearsDropdown, testData.DOB_YEAR);
    I.checkOption(this.fields.newsletterCheckbox);
    I.checkOption(this.fields.offersCheckbox);
    I.fillField(this.fields.firstNameInput, testData.USER_FIRST_NAME);
    I.fillField(this.fields.lastNameInput, testData.USER_LAST_NAME);
    I.fillField(this.fields.companyInput, testData.USER_COMPANY);
    I.fillField(this.fields.addressInput, testData.USER_ADDRESS);
    I.selectOption(this.fields.countryDropdown, testData.USER_COUNTRY);
    I.fillField(this.fields.stateInput, testData.USER_STATE);
    I.fillField(this.fields.cityInput, testData.USER_CITY);
    I.fillField(this.fields.zipcodeInput, testData.USER_ZIP);
    I.fillField(this.fields.mobileNumberInput, testData.USER_MOBILE);
    I.click(this.fields.createAccountBtn);
    I.see('ACCOUNT CREATED!');  
    I.click(this.fields.continueBtn);
    I.seeElement(this.fields.headingH1);
    I.click(this.fields.logOutBtn);
    I.seeElement(this.fields.logIn);
  }
};
