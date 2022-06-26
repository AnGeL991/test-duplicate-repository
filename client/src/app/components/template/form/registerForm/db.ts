export const userRegisterSchema = [
  { type: 'email', name: 'email', placeholder: 'email', label: 'email' },

  {
    type: 'text',
    name: 'firstName',
    placeholder: 'First Name',
    label: 'First Name',
  },
  {
    type: 'text',
    name: 'lastName',
    placeholder: 'Last Name',
    label: 'Last Name',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    label: 'Set Password',
  },
  {
    type: 'password',
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
    label: 'Confirm Password',
  },
];
