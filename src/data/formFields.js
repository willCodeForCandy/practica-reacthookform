export const formFields = [
  {
    type: 'text',
    name: 'username',
    pattern: false,
    message: 'Agrega el nombre de usuario',
  },
  {
    type: 'email',
    name: 'email',
    pattern: {
      value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,
      message: 'Ingresa un email válido',
    },
  },
  {
    type: 'password',
    name: 'password',
    pattern: {
      value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
      message:
        'La contraseña debe contener: entre 8 y 16 caracteres, 1 letra mayúscula, 1 letra minúscula, 1 número, 1 caracter especial',
    },
  },
];
