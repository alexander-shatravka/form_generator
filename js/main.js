let oneFromList = $('.question-content-one-from')[0].innerHTML;
let textString = $('.question-content-text')[0].innerHTML;
let  dropdownList = $('.question-content-list')[0].innerHTML;

let radioVariant =
    '<label class="variant-container">\n' +
    '   <i class="radio-button"></i>\n' +
    '   <textarea class="variant" placeholder="Ответ"></textarea>\n' +
    '   <i class="delete-variant fas fa-times"></i>\n' +
    '</label>';

let dropdownVariant =
    '<li>\n' +
    '<label class="variant-container-drop">\n' +
    '<span class="number-variant"></span>\n' +
    '   <textarea class="dropdown-variant" placeholder="Вариант ответа"></textarea>\n' +
    '   <i class="delete-variant-drop fas fa-times"></i>\n' +
    '</label>\n'+
    '</li>';

let newQuestion = '<fieldset class="question-container">' + $('.question-container')[1].innerHTML + '</fieldset>';
let addButton = $('#add-question')[0];
let dropdownArrow = document.querySelector('.dropdown-arrow');
let bottomOfPage = document.querySelector('#bottom');

addButton.onclick = function () {
    this.parentNode.insertAdjacentHTML(`BeforeEnd`, newQuestion);
}

$('.form-of-questions').on('click', '.question-container', focusing);
$('.form-of-questions').on('focus', '.question-container', focusing);


function focusing(event) {

    let target = event.target;

    $('fieldset').removeClass('focus-field');
    this.classList.add('focus-field');

    let showTypes = this.querySelector('.current-type');
    let chooseOneFrom = this.querySelector('.choose-one-from');
    let chooseText = this.querySelector('.choose-text');
    let chooseList = this.querySelector('.choose-list');
    let deleteQuestion = this.querySelector('.delete-question');
    let allRadioBurrons = this.querySelectorAll('.radio-button');

    if (showTypes){
        showTypes.onclick = function () {
            this.nextElementSibling.classList.toggle('select-type-open');
        }
        showTypes.parentNode.parentNode.onclick = function () {
            showTypes.classList.remove('select-type-open')
        }
    }

    if(chooseOneFrom){
        chooseOneFrom.onclick = function () {
            this.parentNode.parentNode.previousElementSibling.innerHTML = oneFromList;
            this.parentNode.previousElementSibling.innerHTML = this.innerHTML;
            this.parentNode.previousElementSibling.appendChild(dropdownArrow);
            this.parentNode.classList.remove('select-type-open');
        }
    }

    if(chooseText){
        chooseText.onclick = function () {
            this.parentNode.parentNode.previousElementSibling.innerHTML = textString;
            this.parentNode.previousElementSibling.innerHTML = this.innerHTML;
            this.parentNode.previousElementSibling.appendChild(dropdownArrow);
            this.parentNode.classList.remove('select-type-open');
        }
    }

    if(chooseList){
        chooseList.onclick = function () {
            this.parentNode.parentNode.previousElementSibling.innerHTML = dropdownList;
            this.parentNode.previousElementSibling.innerHTML = this.innerHTML;
            this.parentNode.previousElementSibling.appendChild(dropdownArrow);
            this.parentNode.classList.remove('select-type-open');
        }
    }

    if(deleteQuestion){
        deleteQuestion.onclick = function () {
            this.parentNode.remove();
        }
    }


    if(target.innerText === 'Добавить вариант') {
        target.parentNode.previousElementSibling.insertAdjacentHTML(`BeforeEnd`, radioVariant);
    }

    if(target.innerText === 'Добавить вариант списка') {
        target.parentNode.previousElementSibling.insertAdjacentHTML(`BeforeEnd`, dropdownVariant);
    }

    if(target.className === 'delete-variant fas fa-times') {
        target.parentNode.remove();
    }

    if(target.className === 'delete-variant-drop fas fa-times') {
        target.parentNode.parentNode.remove();
    }
};


