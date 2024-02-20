const axios = require('axios');

const BASE_URL = 'https://bitheap-gateway.com';

async function requestPayment(expect, currency, message, seller, customer, callbackUrl, accountId) {
    const url = `${BASE_URL}/request_payment/${expect}/${currency}/${message}/${seller}/${customer}/${callbackUrl}/${accountId}`;
    return axios.get(url);
}

async function checkPayment(address) {
    const url = `${BASE_URL}/check_payment/${address}`;
    return axios.get(url);
}

async function payout(seller, amount, currency, address, accountId) {
    const url = `${BASE_URL}/payout/${seller}/${amount}/${currency}/${address}/${accountId}`;
    return axios.get(url);
}

async function getSellerBalance(seller) {
    const url = `${BASE_URL}/get_seller_balance/${seller}`;
    return axios.get(url);
}

module.exports = {
    requestPayment,
    checkPayment,
    payout,
    getSellerBalance
};
