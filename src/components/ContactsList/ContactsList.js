import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts-selectors';
import { useFetchContactsQuery } from 'redux/contacts-slice';
import ContactsListItem from '../ContactsListItem';

const ContactsList = () => {
  // const contacts = useSelector(getFilteredContacts);
  const { data, error, isLoading } = useFetchContactsQuery();
  const contacts = data;
  if (contacts) {
    return (
      <ul>
        {contacts.map(({ id, name, phone }) => {
          return (
            <ContactsListItem key={id} id={id} name={name} number={phone} />
          );
        })}
      </ul>
    );
  }
};

export default ContactsList;
