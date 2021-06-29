import { Card } from './card.js';
import { initModal } from './modal.js'
import { initController } from './controller.js'

export let todos

// Когда переношу getStorages в utils.js появляется ошбика - Uncaught TypeError: Assignment to constant variable. !!!Не понимаю почему!!!!
const getStorages = () => {
    if(localStorage.getItem('todos') === null) {
        return todos = []
    }
    return todos = JSON.parse(localStorage.getItem('todos'))
}

export const render = () => {
    document.querySelector('ul').innerHTML = todos.map(todo => new Card(todo.title, todo.description).getHtml()).join('')
    document.querySelector('.badge').innerText = todos.length
}

const app = () => {
    getStorages()
    initController()  
    initModal()   
    render()    
}

document.addEventListener('DOMContentLoaded', app)