const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://official-joke-api.appspot.com/random_joke";
console.log (apiURL)
async function getQuote() {
    try {
    btnEl.innerText = "loading...";
    btnEl.disabled =  true;
   const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data)
    const quoteContent = data.punchline;
    const quoteAuthor = data.setup;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~ " + quoteAuthor;
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
    console.log(data);
    } catch (error) {
    console.log(error);
    quoteEl.innerText = "try again bro or sis";
    authorEl.innerText = "No vex maybe network problem";
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;  
    }
}
 getQuote()
btnEl.addEventListener("click",getQuote);
        
  


