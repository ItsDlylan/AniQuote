let DOMSTRINGS = {
    quote: '.animeQuote',
    animeName: '.animeTitle',
    characterName: '.characterName'
}


let quoteBtn = document.querySelector('#grabQuote');
quoteBtn.addEventListener('click', function(){
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {
        console.log(quote.anime)
        console.log(quote.character)
        console.log(quote.quote)
        document.querySelector(DOMSTRINGS.characterName).textContent = quote.character
        document.querySelector(DOMSTRINGS.characterName).classList.add('active')
        document.querySelector(DOMSTRINGS.animeName).textContent = quote.anime
        document.querySelector(DOMSTRINGS.animeName).classList.add('active')
        let quote2 = quote.quote;
        console.log(quote2.length);
        if(quote2.length > 150){
            document.querySelector(DOMSTRINGS.quote).style.fontSize = '1.2rem';
            document.querySelector(DOMSTRINGS.quote).textContent = quote2
            document.querySelector(DOMSTRINGS.quote).classList.add('active')
        } else{
            document.querySelector(DOMSTRINGS.quote).style.fontSize = '1.7rem';
            document.querySelector(DOMSTRINGS.quote).textContent = quote2
            document.querySelector(DOMSTRINGS.quote).classList.add('active')
        }
    })

})