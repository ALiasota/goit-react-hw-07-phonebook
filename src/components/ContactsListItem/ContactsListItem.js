import { useDispatch } from 'react-redux';
import styles from './ContactsListItem.module.css';
import propTypes from 'prop-types';
import contactsActions from 'redux/contacts-actions';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.li}>
      <span>
        {name}: {number}
      </span>
      <button
        className={styles.btnDel}
        type="button"
        onClick={() => dispatch(contactsActions.delContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};

export default ContactListItem;
