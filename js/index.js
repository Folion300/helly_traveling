window.addEventListener('load', getUsdCurrency);

function getUsdCurrency() {
    fetch('https://free.currencyconverterapi.com/api/v6/convert?q=USD_UAH&compact=ultra&apiKey=89efcbb8a5912cf4ad21')
        .then(response => response.json())
        .then(currency => document.querySelector('.USD_currency_container')
            .innerText = `Актуальний курс USD: ${currency['USD_UAH'].toFixed(2)}`);
}