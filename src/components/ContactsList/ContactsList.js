import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts-selectors';
import ContactsListItem from '../ContactsListItem';

const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem key={id} id={id} name={name} number={number} />
        );
      })}
    </ul>
  );
};

export default ContactsList;
