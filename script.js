const btn = document.querySelector('.button');
const input = document.querySelector('#textarea');
const output = document.querySelector('.output');

let serverURL = 'https://api.funtranslations.com/translate/minion.json'

function getTranslatedURL(text){
   return serverURL + '?' + 'text=' + text;
}







btn.addEventListener('click',function clickHandler(){
    var inputValue = input.value;
    
        fetch(getTranslatedURL(inputValue))
        .then(response => response.json())
        .then(json => {
               let translatedText = json.contents.translated;
              output.innerText = translatedText;
            console.log(json);
        
        });
    });

