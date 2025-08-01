// const { I } = inject();
// const testData = require('../testData/data.json');
// const { fields } = require('./LoginPage');

// module.exports = {
//     fields: {
//         placeOrderBtn: '//a[text()="Place Order"]',
//         name: '//input[@name="name_on_card"]',
//         cardNumber: '//input[@name="card_number"]',
//         cvcNumber: '//input[@name="cvc"]',
//         expiryMonth: '//input[@name="expiry_month"]',
//         expiryYear: '//input[@name="expiry_year"]',
//         confirmBtn: '#submit',
//         continueBtn: "//a[@data-qa='continue-button']"

//     },

//     place(){
//         I.see('Checkout');
//         I.see(testData.PRODUCT_NAME);
//         I.click(this.fields.placeOrderBtn);
//         I.see('Payment');
//         I.fillField(this.fields.name, testData.CARD_NAME);
//         I.fillField(this.fields.cardNumber, testData.CARD_NUMBER);
//         I.fillField(this.fields.cvcNumber, testData.CARD_CVC);
//         I.fillField(this.fields.expiryMonth, testData.CARD_EXPIRY_MONTH);
//         I.fillField(this.fields.expiryYear, testData.CARD_EXPIRY_YEAR);
//         I.click(this.fields.confirmBtn);
//         I.waitForText('Order Placed!', 10);
//         I.click(this.fields.continueBtn);
//         //

//     }
// }

const { I } = inject();
const testData = require('../testData/data.json');

module.exports = {
    fields: {
        placeOrderBtn: '//a[text()="Place Order"]',
        name: '//input[@name="name_on_card"]',
        cardNumber: '//input[@name="card_number"]',
        cvcNumber: '//input[@name="cvc"]',
        expiryMonth: '//input[@name="expiry_month"]',
        expiryYear: '//input[@name="expiry_year"]',
        confirmBtn: '#submit',
        continueBtn: "//a[@data-qa='continue-button']"
    },

    place() {
        I.say('Checking for checkout page and verifying product name');
        I.see('Checkout');
        I.see(testData.PRODUCT_NAME);

        I.waitForElement(this.fields.placeOrderBtn, 5);
        I.click(this.fields.placeOrderBtn);

        I.say('Filling payment details');
        I.see('Payment');
        I.fillField(this.fields.name, testData.CARD_NAME);
        I.fillField(this.fields.cardNumber, testData.CARD_NUMBER);
        I.fillField(this.fields.cvcNumber, testData.CARD_CVC);
        I.fillField(this.fields.expiryMonth, testData.CARD_EXPIRY_MONTH);
        I.fillField(this.fields.expiryYear, testData.CARD_EXPIRY_YEAR);

        I.say('Placing the order');
        I.click(this.fields.confirmBtn);

        I.waitForText('Order Placed!', 10);
        I.click(this.fields.continueBtn);
    }
}
