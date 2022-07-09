const finApiKey = "cb3evlaad3i8tak0u1ug";
const guardApiKey = "88698a0f-0636-4f4c-8bc0-f3820ad600f5";
const stockNameEl = document.querySelector(".stockName");
const currentPriceEl = document.querySelector(".currentPrice");
const changeEl = document.querySelector(".change");
const percentChangeEl = document.querySelector(".percentChange");
const dailyHighEl = document.querySelector(".dailyHigh");
const dailyLowEl = document.querySelector(".dailyLow");
const openPriceEl = document.querySelector(".openPrice");
const closedPriceEl = document.querySelector(".closedPrice");
const stockNewsEl = document.querySelector(".stockNews");
const searchBtnEl = document.querySelector("[data-selector='searchBtn']");
const myInputEl = document.querySelector("#myInput");

async function getStockNews(e) {
    e.preventDefault();
    const newsName = myInputEl.value;
    console.log(newsName);
    stockNewsEl.innerHTML = "";
    const url = `https://content.guardianapis.com/search?q=${newsName}&api-key=${guardApiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.response.results.forEach((article) => {
        const newATag = document.createElement("a");
        newATag.href = article.webUrl;
        newATag.setAttribute("target", "_blank");
        newATag.classList.add("hover:text-primary");
        const newPTag = document.createElement("p");
        newPTag.innerText = article.webTitle;
        newATag.appendChild(newPTag);
        stockNewsEl.appendChild(newATag);
    });
    stockData(newsName);
}

function stockData(ticker) {
    console.log(ticker);
    fetch(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${finApiKey}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            //  maddox-Do the same code below for all objects ex( change daily high daily low etc...)
            currentPriceEl.innerText = `Current Price: $${data.c}`;
        })
        .catch((err) => console.error(err));
}

searchBtnEl.addEventListener("click", getStockNews);
