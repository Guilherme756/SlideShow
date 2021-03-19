'use strict';

const images = [
    { 'id' : '0', 'url':'./img/capa.jpg'},
    { 'id' : '1', 'url':'./img/dicas-rainbow-six-siege.jpg'},
    { 'id' : '2', 'url':'./img/diversidade-R6-capa.jpg'},
    { 'id' : '3', 'url':'./img/download.jpg'},
    { 'id' : '4', 'url':'./img/ERz6kj1XsA4CbYk.jpg'},
    { 'id' : '5', 'url':'./img/rainbow-six-siege.jpg'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += ` 
        <div class = 'item'>
        <img src='${image.url}'
     </div>   
    `

    }) 

}

loadImages (images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length -1];
    containerItems.insertBefore( lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
