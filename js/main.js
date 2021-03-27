// Enter your JavaScript for the solution here...

let imgOnDisplay = document.querySelectorAll('.thumb-display');
let tagSearch = document.querySelector('.frm-control');
let resetTag = document.querySelector('.reset');

tagSearch.oninput = function() {
    let str = tagSearch.value; 

    for (let i = 0; i < imgOnDisplay.length; i++) {

        const imgText = imgOnDisplay[i].lastElementChild.innerText;
        const method = imgText.includes(str.trim()) ? 'remove' : 'add';
        imgOnDisplay[i].classList[method]('hidden');
    }
    resetTag.classList.remove('hidden');
}

resetTag.onclick = function() {
    resetTag.classList.add('hidden');
    str = '';
    for (i = 0; i < imgOnDisplay.length; i++)
        imgOnDisplay[i].classList.remove('hidden');
}






























// let imgOnDisplay = document.querySelectorAll('.thumb-display');
// let tagSearch = document.querySelector('.frm-control');
// let resetTag = document.querySelector('.reset');
 
// tagSearch.addEventListener('input', imgFiltering);
// resetTag.addEventListener('click', displayReset);
// const k = "classList";
 
// function imgFiltering(){
//     const search = tagSearch.value.trim(); 
//     for(const t of imgOnDisplay) {
//         const t2 = t.lastElementChild.innerText;
//         t[k][t2.include(search)?"remove":"add"]('hidden');
//     }
//     resetTag[k].remove('hidden');
// }
 
// function displayReset() {
//     resetTag[k].add('hidden');
//     tagSearch.value = '';
//     for(const t of imgOnDisplay) t[k].remove('hidden');
// }

