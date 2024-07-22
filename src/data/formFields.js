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
      message: `<div>
            <p>La contraseña debe contener:</p>
            <ul>
            <li>Entre 8 y 16 caracteres</li>
            <li>1 letra mayúscula</li>
            <li>1 letra minúscula</li>
            <li>1 número</li>
            <li>1 caracter especial</li>
            </ul>
            </div>`,
    },
  },
];
