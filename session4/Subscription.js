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
