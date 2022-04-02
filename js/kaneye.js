const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQuoite(data))
}
// arrow function 
const displayQuoite = (quote) => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;


}