const btn = document.querySelector('.button');
const input = document.querySelector('#textarea');
const output = document.querySelector('.output');

let serverURL = 'https://api.funtranslations.com/translate/minion.json'

const getTranslatedURL = text => serverURL + '?' + 'text=' + text;








btn.addEventListener('click',() => {
    var inputValue = input.value;
    
        fetch(getTranslatedURL(inputValue))
        .then(response => response.json())
        .then(json => {
               let translatedText = json.contents.translated;
              output.innerText = translatedText;
            console.log(json);
        
        });
    });

