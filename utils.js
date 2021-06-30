export let todos

export const getStorages = () => {
    if(localStorage.getItem('todos') === null) {
        return todos = []
    }
    return todos = JSON.parse(localStorage.getItem('todos'))
}

export const updateLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

export const toggle = (el) => el.classList.toggle('active')