const getByIdName = (id) => {
  const basicid = document.getElementById(id);
  console.log(basicid.innerText);
};

getByIdName('main-title');

const getByClass = (classname) => {
  const basicclass = document.getElementsByClassName(classname);
  Array.from(basicclass).forEach(({ innerText }) => console.log(innerText));
};

getByClass('clase');

const getByTagName = (tagname) => {
  const basictag = document.getElementsByTagName(tagname);
  Array.from(basictag).forEach(({ innerText }) => console.log(innerText));
};

getByTagName('li');

const getByQuerySelector = (query) => {
  const basicquery = document.querySelector(query);
  //console.log(basicquery.innerText);
  basicquery.classList.add('hola');
};

getByQuerySelector('#lista-dos>li');

const getByQuerySelectorAll = (query) => {
  const basicquery = document.querySelectorAll(query);
  basicquery.forEach(({ innerText }) => console.log(innerText));
};

getByQuerySelectorAll('#lista-dos>li');
