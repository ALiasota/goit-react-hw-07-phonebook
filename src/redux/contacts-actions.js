import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const delContact = createAction('contacts/del');

const changeFilter = createAction('contacts/filter');

const contactsActions = { addContact, delContact, changeFilter };

export default contactsActions;
