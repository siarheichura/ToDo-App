import { Card, render } from './card.js';
import { initModal } from './modal.js'
import { initController } from './controller.js'
import { getStorages, todos } from './utils.js';

const app = () => {
    getStorages()
    initController()  
    initModal()   
    render()    
}

document.addEventListener('DOMContentLoaded', app)