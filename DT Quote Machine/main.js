//target button class .new-quote
var newQuoteButton = document.querySelector('new-quote');

newQuoteButton.addEventListener('click', getQuote);

function getQuote() {
    fetch(endpoint)
    //converts the raw response into json
    .then(function (response) {
        return response.json();
    })
    //chain another function and access
    .then(function (data) {
        console.log(data.message);
    })
    //executes only if fetch request throws an error
    .catch(function() {
        console.log('An error occurred');
    })
}
function displayQuote (quote) {
    var quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
}

//target button class new-quote
var newQuoteButton = document.querySelector('.new-quote');

getQuote();

