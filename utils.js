import { todos } from "./index.js"

export const updateLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

export const toggle = (el) => el.classList.toggle('active')