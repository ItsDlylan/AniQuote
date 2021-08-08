
let quoteBtn = document.querySelector('#grabQuote');
quoteBtn.addEventListener('click', function(){
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {
        console.log(quote.anime)
        console.log(quote.character)
        console.log(quote.quote)


    })

})