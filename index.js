let colorBox = document.querySelector('.box');
let input = document.querySelector('.input');

input.addEventListener('input' , (event) =>{
    event.preventDefault();

    colorBox.style.background = input.value;

    
})