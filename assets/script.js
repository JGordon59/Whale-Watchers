const finApiKey = "cb3evlaad3i8tak0u1ug";
const guardApiKey = "88698a0f-0636-4f4c-8bc0-f3820ad600f5";
const ticker = "AAPL";
const stockNameEl = document.querySelector(".stockName");
const currentPriceEl = document.querySelector(".currentPrice");
const changeEl = document.querySelector(".change");
const percentChangeEl = document.querySelector(".percentChange");
const dailyHighEl = document.querySelector(".dailyHigh");
const dailyLowEl = document.querySelector(".dailyLow");
const openPriceEl = document.querySelector(".openPrice");
const closedPriceEl = document.querySelector(".closedPrice");
const stockNewsEl = document.querySelector(".stockNews");

// async function getStockNews(){
//     const newsName = stockNewsEl.value;
//     stockNewsEl.value = "";
//     const url = `https://content.guardianapis.com/search?q=${newsName}&api-key=${guardApiKey}`;
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log(result[0].webTitle)
// const newsResult ={newsName,type:}
// }

//content.guardianapis.com/search?q=Stocks&api-key=88698a0f-0636-4f4c-8bc0-f3820ad600f5

https: fetch(
    `https://content.guardianapis.com/search?q=${ticker}&api-key=${guardApiKey}`
)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.querySelector(".stockNews");
    });

fetch(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${key}`)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
