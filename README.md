# BitHeap Gateway JS Client

The BitHeap Gateway Client is a powerful and easy-to-use Node.js package designed for shops and e-commerce platforms to facilitate Bitcoin payments. This package simplifies the process of generating QR codes for Bitcoin transactions, ensuring a seamless and efficient payment experience for both sellers and customers.

## Features

- Request Bitcoin payments with dynamically generated QR codes.
- Check the status of Bitcoin payments.
- Process payouts in Bitcoin.
- Retrieve seller's Bitcoin balance.

## Installation

Install the package via npm:

```bash
npm install bitheap-gateway-client
```

## Usage
Here's how you can use the BitHeap Gateway Client in your Node.js application:

### Requesting a Payment

const bitheapGateway = require('bitheap-gateway-client');

```
// Request a payment
bitheapGateway.requestPayment(expect, currency, message, seller, customer, callbackUrl, accountId)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
 ```
### Checking Payment Status

```
// Check payment status
bitheapGateway.checkPayment(address)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

### Processing a payout

```
// Process a payout
bitheapGateway.payout(seller, amount, currency, address, accountId)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

### Getting Seller Balance

```
// Get seller's balance
bitheapGateway.getSellerBalance(seller)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

## Contributing
Contributions to the BitHeap Gateway Client are welcome. Please ensure that your code adheres to the project's coding standards and include tests for new features or bug fixes.

## License
This project is licensed under the MIT License.
