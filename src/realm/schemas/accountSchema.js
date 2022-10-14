export const AccountSchema = {
  name: 'Accounts',
  properties: {
    email: 'string',
    password: 'string',
    favoritePokemon: 'string[]',
  },
  primaryKey: 'email',
};
