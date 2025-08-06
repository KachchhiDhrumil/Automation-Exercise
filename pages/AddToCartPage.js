const { I } = inject();
const testData = require('../testData/data.json');

module.exports = {
  fields: {
    addToCartBtn:'(//a[text()="Add to cart"])[1]',
    viewCart:'//u[text()="View Cart"]',
    proceed:'//a[text()="Proceed To Checkout"]',
    
  },

  // Action method: login
  add() {
    I.click(this.fields.addToCartBtn);
    I.wait(5);
    I.see('Added!');
    I.click(this.fields.viewCart);
    I.see(testData.PRODUCT_NAME);
    I.click(this.fields.proceed);
  },
};