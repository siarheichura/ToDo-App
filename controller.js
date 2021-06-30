import { toggle, todos, updateLocalStorage } from "./utils.js"
import { render } from './card.js';

export const initController = () => document.querySelector('#app-controller').addEventListener('click', e => {
    if(e.target.classList.contains('btn-modal')) {
        toggle(document.querySelector('.modal'))
    } else if(e.target.classList.contains('btn-remove-last')) {
        todos.pop()
        render()
        updateLocalStorage()
    } else if(e.target.classList.contains('btn-remove-all')) {
        todos.length = 0
        render()
        updateLocalStorage()
    }
})