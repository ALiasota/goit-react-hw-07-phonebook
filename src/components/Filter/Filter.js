import { useSelector, useDispatch } from 'react-redux';
import contactsActions from 'redux/contacts-actions';
import { getFilter } from 'redux/contacts-selectors';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label>
      Find contacts by name
      <input
        className={styles.inp}
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
