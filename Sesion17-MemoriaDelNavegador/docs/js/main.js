/*

? Guardar información semipermanente
    ! Local Storage => Persistente
        & 
    ! Session Storage => Se borran al cerrar navegador

*/

// todo: Crear: localStorage(key, value)
localStorage.setItem(
  'token',
  `qPh/-Tbpoy7uyoIECPgb=Wk7h2IAIMjy0zjj2kPh4tjQCK7mjF3JPQKVjA4KXcHEfPrURAU6!WrAYmu4c2!MkHJpe6m9cOx0qLwgm?LrIgD1tjCngCLzLgQ30?s=EYJj7-zT!5hl=ZRXFAgN1rcrETNxnKAb6Nb!SVKELt-oT?SmWxe2?lQ35DXzfO4r!sjU5kKY/uYFV6E-4Cjl=VN4DWU!dTq5OivcFvFvz0Ezq3YGLmc=c2AN!PLPnTUz7jAK

`
);

// todo: Eliminar: localStorage(key)
const deleteToken = () => {
  localStorage.removeItem('token');
};

//deleteToken();

// todo: Obtener: localStorage.getItem()
const token = localStorage.getItem('token');

!token ? window.open('google.com', '__self') : null;
