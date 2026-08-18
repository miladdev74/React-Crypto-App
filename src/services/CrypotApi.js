// const BASE_URL = "https://api.coingecko.com/api/v3"
const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-wmXhDSsvoo4Z877u8XfueR4t"

const getCryptoList = (peage , currency)=>`${BASE_URL}/coins/markets?vs_currency=${currency}&per_page=20&page=${peage}&x_cg_demo_api_key=${API_KEY}`; 
;
const searchCoin = (query)=> `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`;
const marketChart = (coin)=>`${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`;
export {getCryptoList, searchCoin, marketChart} ;
