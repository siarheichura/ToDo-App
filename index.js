'use strict'

let todos = JSON.parse(localStorage.getItem('todos')) || []
render()

$('.btn-add-todo').addEventListener('click', () => {
    if($('.input-todo').value === '') {
        initToast('Ошибочка!', 'Нельзя вставить пустую карточку')        
    } else {
        todos.push(new Card($('.input-todo').value))
        updateLocalStoarge(todos)
        initCardListeners()
        clearInput($('.input-todo'))
        setTodosMaxValue()
        render()
    }
})

function $(selector) {
    return document.querySelector(selector)
}

function clearInput(input) {
    input.value = ''
}

function Card(text, completed = false) {
    this.text = text
    this.completed = completed
}

function initElement(tag, className, text = '', type = '', attribute) {
    let element = document.createElement(tag)
    element.className = className
    element.innerText = text
    element.type = type
    element.setAttribute(attribute, '')
    return element
}

function createCard(text, completed) {
    let card = initElement('div', `${completed ? 'checked' : ''} card p-3 bg-warning bg-gradient mb-2 d-flex flex-row justify-content-between`)
    let cardCheckbox = initElement('input', 'form-check-input', '', 'checkbox', `${completed ? 'checked' : 'none'}`)
    let cardText = initElement('p', 'card-text mb-0 ms-3 flex-fill', text)
    let cardDeleteBtn = initElement('button', 'btn-close')
    card.append(cardCheckbox, cardText, cardDeleteBtn)
    $('.todos-wrapper').append(card)
}

function updateLocalStoarge(array) {
    localStorage.setItem('todos', JSON.stringify(array))
}

function render() {
    while($('.todos-wrapper').firstChild) {
        $('.todos-wrapper').removeChild($('.todos-wrapper').firstChild)
    }
    todos.forEach(todo => createCard(todo.text, todo.completed))
    initCardListeners()
    $('.badge').innerText = todos.length
}

function initCardListeners() {
    $('.todos-wrapper').childNodes.forEach(function(todo, index) {
        todo.addEventListener('click', function(event) {
            if(event.target.classList.contains('btn-close')) {
                todos.splice(index, 1)
                updateLocalStoarge(todos)
                render()
            } else if(event.target.classList.contains('form-check-input')) {
                todos[index].completed = !todos[index].completed
                updateLocalStoarge(todos)
                render()
            }
        })
    })
}

function setTodosMaxValue() {
    if(todos.length > 6) {
        todos.pop()
        render()
        updateLocalStoarge(todos)
        initToast('Тррррр, притормози!', 'Выполни для начала предыдущие')
    }
}

function initToast(title, text) {
    initToastListeners()
    setToastTimeout()
    $('.toast-title').innerText = title 
    $('.toast-body').innerText = text
    $('.toasts').classList.remove('d-none')
    $('.toasts').classList.add('d-block')
}

function initToastListeners() {
    $('.toasts').addEventListener('click', event => {
        if(event.target.classList.contains('toast-close')) {
            $('.toasts').classList.remove('d-block')
            $('.toasts').classList.add('d-none')  
        }
    })
}

function setToastTimeout() {
    setTimeout(() => {
        $('.toasts').classList.remove('d-block')
        $('.toasts').classList.add('d-none') 
    }, 3000);
}