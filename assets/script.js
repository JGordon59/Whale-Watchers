fetch(
    "https://content.guardianapis.com/search?q=Stocks&api-key=88698a0f-0636-4f4c-8bc0-f3820ad600f5"
)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("stockNews");
    });

fetch("https://finnhub.io/api/v1/add?token=cb3evlaad3i8tak0u1ug")
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("stockData");
    });
