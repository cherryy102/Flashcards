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
//showing groups at the beginning
if (localStorage.getItem(`flashcardsListHtml`)) {
    document.querySelector('.flashcards-list').innerHTML = localStorage.getItem(`flashcardsListHtml`);
}
let inputWord = document.querySelector('.add-menu__input-word');
let inputTranslation = document.querySelector('.add-menu__input-translate');
let inputGroup = document.querySelector('.add-menu__input-group');
const addWords = function() {
    //if the groups do not exist add to array
    if (!groups.includes(inputGroup.value) && (inputWord.value !== '' && inputTranslation.value !== '' && inputGroup.value !== '')) {
        groups.push(inputGroup.value);
        words.push([]);
        translations.push([]);
        addGroupToList();
    }
    //add content to array
    if (inputWord.value !== '' && inputTranslation.value !== '' && inputGroup.value !== '') {
        const groupIndex = groups.indexOf(inputGroup.value);
        words[groupIndex].push(inputWord.value);
        translations[groupIndex].push(inputTranslation.value);
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
// ##show flashcards in list##
//add group to list
const addGroupToList = () => {
        const flashcardsList = document.querySelector('.flashcards-list');
        const index = groups.indexOf(inputGroup.value);
        if (groups.length > 0) {
            const lastItemIndex = groups.length - 1;
            const div = document.createElement('div');
            div.classList.add('flashcards-list__group');
            div.dataset.item = index;
            div.innerHTML = `
        <h1 data-nameGroup=''>${groups[lastItemIndex]}</h1>
        <div class="flashcards-list__item">
            <div class="flashcards-list__all-words" data-all='${index}'>All words</div>
            <div class="flashcards-list__correct" data-correct='${index}'>Correct words</div>
            <div class="flashcards-list__incorrect" data-incorect='${index}'>Incorrect words</div>
        </div>`;
            flashcardsList.appendChild(div);
        }
        const flashcardsListHtml = flashcardsList.innerHTML;
        localStorage.setItem(`flashcardsListHtml`, flashcardsListHtml);
    }
    // ## correct and incorrect words ###
let correct = [];
let incorrect = [];