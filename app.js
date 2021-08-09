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
        if(quote.anime.length > 100){
            document.querySelector(DOMSTRINGS.animeName).style.fontSize = '.95rem';
        } else{
            document.querySelector(DOMSTRINGS.animeName).style.fontSize = '1.17em';
        }
        if(quote2.length > 150){
            document.querySelector(DOMSTRINGS.quote).style.fontSize = '1.5rem';
            document.querySelector('.quote').style.width = '75%';
            document.querySelector(DOMSTRINGS.quote).textContent = quote2
            document.querySelector(DOMSTRINGS.quote).classList.add('active')
        } else{
            document.querySelector(DOMSTRINGS.quote).style.fontSize = '1.7rem';
            document.querySelector('.quote').style.width = '50%';
            document.querySelector(DOMSTRINGS.quote).textContent = quote2
            document.querySelector(DOMSTRINGS.quote).classList.add('active')
        }
    })

})