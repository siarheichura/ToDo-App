import { data } from "./data.js";
import { Card } from "./card.js";

const todoList = document.querySelector('ul')
const btnCallModal = document.querySelector('.btn-add')
const btnRemoveLast = document.querySelector('.btn-remlast')
const btnRemoveAll = document.querySelector('.btn-remall')
const btnCloseModal = document.querySelector('.btn-close')
const btnConfirmTodo = document.querySelector('.btn-save')
const modal = document.querySelector('.modal')
const todoTitle = document.querySelector('.add-todo-title')
const todoDescription = document.querySelector('.add-todo-description')

todoList.innerHTML = data.map(todo => new Card(todo.title, todo.description).getHtml()).join('')

btnCallModal.addEventListener('click', () => {
    modal.classList.add('d-block')
})

btnCloseModal.addEventListener('click', () => {
    modal.classList.remove('d-block')
})

btnConfirmTodo.addEventListener('click', () => {    
    data.push(new Card(todoTitle.value, todoDescription.value))
    todoList.innerHTML = data.map(todo => new Card(todo.title, todo.description).getHtml()).join('')
    modal.classList.remove('d-block')
    todoTitle.value = ''
    todoDescription.value = ''
});

btnRemoveLast.addEventListener('click', () => {
    data.pop()
    todoList.innerHTML = data.map(todo => new Card(todo.title, todo.description).getHtml()).join('')
})

btnRemoveAll.addEventListener('click', () => {
    data.length = 0
    todoList.innerHTML = data
})
