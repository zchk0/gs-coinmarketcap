/**
 * КУРС КРИПТОВАЛЮТЫ из COINMARKETCAP.
 *
 * @param {string} namee строку 
 * @param {string} date строку 
 * @return возращает цену выбраной криптовалюты из COINMARKETCAP.
 * @customfunction
 */
function getCryptoPrice(namee, date) {
  var apiKey = "XXXXXXX";
  var url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol="+namee;

  var requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      start: 1,
      limit: 5000,
      convert: 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': apiKey
    },
    json: true,
    gzip: true
  };
  var httpRequest = UrlFetchApp.fetch(url, requestOptions);
  var getContext = httpRequest.getContentText();
  var parseData = JSON.parse(getContext).data;
  var result = "НЕ НАЙДЕНО";
  let uuu = "USD";
  
  switch (namee){
    case 'TON':
      result = parseData.ton-crystal.quote.USD.price;
    break;
    default:
      result = parseData[namee]['quote'][uuu]['price'];
    break;
  }
  
  return result;
}
