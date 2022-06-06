import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactForm.module.css';
import { getContacts } from 'redux/contacts-selectors';
import contactsActions from 'redux/contacts-actions';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(contactsActions.addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  return (
    <form className={styles.ContactForm} onSubmit={handleSubmit}>
      <h1>Phonebook</h1>
      <label className={styles.label}>
        Name
        <input
          className={styles.inp}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.inp}
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
