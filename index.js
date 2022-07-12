function myFunction() {

    var element = document.body;
    element.classList.toggle("dark-mode");
}
function whaleBtn() {
    const funFactEl = document.getElementById("funFact");
    if (funFactEl.classList.contains("display-none")) {
        funFactEl.classList.remove("display-none");
        funFactEl.classList.add("animate-character");
    } else {
        funFactEl.classList.remove("animate-character");
        funFactEl.classList.add("display-none");
    }
}


