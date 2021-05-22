document.querySelector('.add-flashcards').addEventListener('click', () => {
    if (!document.querySelector('.flashcards-list').classList.contains('show-list')) {
        document.querySelector('.add-menu').classList.toggle('show-menu');
    }

})
document.querySelector('.flashcards-list-btn').addEventListener('click', () => {
    if (!document.querySelector('.add-menu').classList.contains('show-menu')) {
        document.querySelector('.flashcards-list').classList.toggle('show-list');
    }
})