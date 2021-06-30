import { todos } from "./utils.js";

export function Card(title, description){
    this.title = title;
    this.description = description;

    this.getHtml = function(){
        return `<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header">${this.date.time}</div>
                    <div class="card-body">
                        <h5 class="card-title">${this.title}</h5>
                        <p class="card-text">${this.description}</p>
                    </div>
                </div>`
    }

    this.date = {
        get time() {
            return new Date().toLocaleString()
        }
    }
}

export const render = () => {
    document.querySelector('ul').innerHTML = todos.map(todo => new Card(todo.title, todo.description).getHtml()).join('')
    document.querySelector('.badge').innerText = todos.length
}