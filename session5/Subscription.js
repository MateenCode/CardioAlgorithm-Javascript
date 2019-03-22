const dateFns = require("date-fns");
const formatDate = dd => dateFns.format(dd, "MMM-DD-YYYY");
/*
Implement a subscription class that supports following methods:

NPM test in folder to run 

1. setCustomerName(customerName: string)
2. setInterval(length: number, unit: 'days' | 'weeks' | 'months')
3. addProduct(productId: number, sku: string, quantity: number)
4. charge()

Pass the tests
*/

module.exports = class Subscription {
  constructor() {
    this.customerName = "";
    this.nextShipDate = formatDate(dateFns.addMonths(new Date(), 1));
    this.intervalLength = 1;
    this.intervalUnit = "months";
    this.products = [];
  }

  setCustomerName(customerName) {
    this.customerName = customerName;
    return this;
  }

  setInterval(intervalLength, intervalUnit) {
    this.intervalLength = intervalLength;
    this.intervalUnit = intervalUnit;
    return this;
  }
};
