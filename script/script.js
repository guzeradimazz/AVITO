function removeHidden() {
    let elem = document.querySelector('.hidden');
    elem.classList.remove('hidden');
    let elem2 = document.querySelector('.showMore');
    elem2.classList.add('hidden');
}