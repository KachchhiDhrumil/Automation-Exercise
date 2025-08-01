const { I } = inject();
const testData = require('../testData/data.json');


module.exports = {
  fields: {
    productBtn:'//ul[@class="nav navbar-nav"]/li[2]',
    searchInput:'#search_product',
    searchBtn:'#submit_search',
    
  },

  // Action method: login
  searchProduct() {
    I.click(this.fields.productBtn);
    I.fillField(this.fields.searchInput, testData.PRODUCT_NAME);
    I.click(this.fields.searchBtn);
    I.see(testData.PRODUCT_NAME);

  },
};
