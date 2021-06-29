import { toggle } from "./utils.js"
import { render } from "./index.js"
import { todos } from "./index.js"
import { updateLocalStorage } from "./utils.js"

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