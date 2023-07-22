let myButton = document.getElementById('some-button');
const url = 'https://javascript27g-default-rtdb.firebaseio.com/comments/.json';
/* {
  author:
  comment:
  id:
} */

const createCommentBD = async (commentobj) => {
  const petition = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(commentobj),
  });

  const response = (await petition).json();

  return response.data;
};

const getCommentsBD = async () => {
  const response = await fetch(url);

  const data = await response.json();

  const datakeys = Object.keys(data);

  const arraydata = datakeys.map((key) => ({ ...data[key], key }));

  return arraydata;
};
const array = getCommentsBD();

console.log(array);

myButton.addEventListener('click', (event) => {
  console.log(event);
  console.log(event.target);
  event.target.classList.toggle('active');
  event.target.classList.contains('active')
    ? (event.target.innerText = 'Desactivar')
    : (event.target.innerText = 'Activar');
  /*
    Tomar el botón al que le estoy dando click
    Agregarle la clase .active
*/
});

document
  .getElementById('activate-all-buttons')
  .addEventListener('click', (event) => {
    let checkbox = event.target;
    console.log(checkbox.checked);
    let buttons = document.querySelectorAll('#buttons-wrapper .button');
    if (!checkbox.checked) {
      buttons.forEach((button) => button.classList.remove('active'));
    } else {
      buttons.forEach((button) => button.classList.add('active'));
    }
  });

document.getElementById('navigate-button').addEventListener('click', () => {
  window.open('https://google.com', '_blank');
});

let comments = [];

const createCommentBox = (commentData) => {
  let { author, comment, id } = commentData;
  let card = document.createElement('div');
  card.classList.add('card');

  let cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  let deleteButton = document.createElement('button');
  deleteButton.classList.add('btn', 'btn-danger');
  deleteButton.innerText = 'Borrar comentario';

  deleteButton.addEventListener('click', () => {
    let result = comments.filter((comment) => comment.id !== id);
    comments = result;
    printAllComments(comments);
  });

  let cardText = document.createTextNode(`${author} : ${comment}`);

  cardBody.append(cardText, deleteButton);
  card.append(cardBody);

  return card;
};

const printAllComments = (commentsArray) => {
  let wrapper = document.getElementById('comment-wrapper');
  wrapper.innerHTML = '';

  commentsArray.forEach((comment) => {
    let commentBox = createCommentBox(comment);
    wrapper.append(commentBox);
  });
};

printAllComments(comments);

let commentObject = {};

document.querySelectorAll('#comment-form input').forEach((input) => {
  input.addEventListener('keyup', (event) => {
    let value = event.target.value;
    let property = event.target.name;

    console.log(`${property}:${value}`);
    commentObject[property] = value;
    console.log(commentObject);
  });
});

const resetForm = (formId) => {
  let fields = document.querySelectorAll(`#${formId} input`);
  fields.forEach((field) => (field.value = ''));
};

//Guardar comentario
document.getElementById('save-comment').addEventListener('click', () => {
  /* comments = [...comments, { ...commentObject, id: new Date().getTime() }];
  console.log(comments);
  printAllComments(comments);
  resetForm('comment-form');
  commentObject = {}; */

  //comments = [...comments, { ...commentObject, id: new Date().getTime() }];
  //createCommentBD(finallycomment);

  createCommentBD({ ...commentObject, id: new Date().getTime() });
  //printAllComments(comments);
  resetForm('comment-form');
  commentObject = {};
});

// NONES -> PINTAR LOS COMENTS EN PANTALLA
// PARES -> CREAR POST EN BD
