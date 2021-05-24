// ### add flashcards words###
//define array
let words = [];
let translations = [];
let groups = [];
//if the array was saved in local memory, assign it to the current variable
if (JSON.parse(localStorage.getItem('saveWords'))) {
    words = JSON.parse(localStorage.getItem('saveWords'));
    translations = JSON.parse(localStorage.getItem('saveTranslations'));
    groups = JSON.parse(localStorage.getItem('saveGroups'));
}
const addWords = function() {
    let inputWordValue = document.querySelector('.add-menu__input-word').value;
    let inputTranslationValue = document.querySelector('.add-menu__input-translate').value;
    let inputGroupValue = document.querySelector('.add-menu__input-group').value;
    //if the groups do not exist add to array
    if (!groups.includes(inputGroupValue) && (inputWordValue !== '' && inputTranslationValue !== '' && inputGroupValue !== '')) {
        groups.push(inputGroupValue);
        words.push([]);
        translations.push([]);
    }
    //add content to array
    if (inputWordValue !== '' && inputTranslationValue !== '' && inputGroupValue !== '') {
        const groupIndex = groups.indexOf(inputGroupValue);
        words[groupIndex].push(inputWordValue);
        translations[groupIndex].push(inputTranslationValue);
        //clear value
        document.querySelector('.add-menu__input-word').value = '';
        document.querySelector('.add-menu__input-translate').value = '';
        //save array to localStorage
        localStorage.setItem('saveWords', JSON.stringify(words));
        localStorage.setItem('saveTranslations', JSON.stringify(translations));
        localStorage.setItem('saveGroups', JSON.stringify(groups));
    }



}
document.querySelector('.add-btn').addEventListener('click', addWords);

// ## correct and incorrect words ###
let correct = [];
let incorrect = [];