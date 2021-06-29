import { toggle } from './utils.js'
import { render } from './index.js'
import { Card } from './card.js';
import { todos } from './index.js';
import { updateLocalStorage } from './utils.js';

export const initModal = () => document.querySelector('.modal').addEventListener('click', e => {
    if(e.target.classList.contains('modal-close')) {
        toggle(document.querySelector('.modal'))
    } else if(e.target.classList.contains('modal-save')) {
        toggle(document.querySelector('.modal'))
        todos.push(new Card(document.querySelector('.input-title').value, document.querySelector('.input-description').value))
        updateLocalStorage()
        render()
    }
})