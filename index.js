import { Card } from './card.js';
import { initModal } from './modal.js'
import { initController } from './controller.js'
import { getStorages, todos } from './utils.js';

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