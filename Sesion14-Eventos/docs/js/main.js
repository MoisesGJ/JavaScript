/* 
! EVENTOS Y LISTENERS 

    element.addEventListener( event, callback )
*/

const mybutton = document.getElementById('my-button');

mybutton.addEventListener('click', ({ target }) => {
  target.classList.add('btn-secondary');
});

console.log('hola');
