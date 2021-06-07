function removeHidden() {
    let elem = document.querySelector('.hidden');
    elem.classList.remove('hidden');
    let elem2 = document.querySelector('.showMore');
    elem2.classList.add('hidden');
}
function removeHidden2() {
    let elem = document.querySelector('.hidden2');
    elem.classList.remove('hidden2');
    let elem2 = document.querySelector('.showMore2');
    elem2.classList.add('hidden2');
}
function onEntry(entry) {
    entry.forEach(change => {
        if(change.isIntersecting){
            change.target.classList.remove('hidden3')
        }
    });
}
let options={
    threshold:[0.5]
}
let obsr = new IntersectionObserver(onEntry,options);
let elements = document.querySelectorAll('.desc__table');
for (const iterator of elements) {
    obsr.observe(iterator);
}
function isVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    // верхний край элемента виден?
    let topVisible = coords.top > 0 && coords.top < windowHeight;
  
    // нижний край элемента виден?
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  
    return topVisible || bottomVisible;
}
function showVisible() {
    let item = document.querySelector('.hidden3');
    let iteM = document.querySelector('.ask__mobile');
    if(isVisible(iteM)){
        item.classList.remove('hidden3');
    }else if(!isVisible(iteM)){
        item.classList.add('hidden3');
    }
}

showVisible();
window.onscroll = showVisible;