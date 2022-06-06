export const getFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;

export const getFilteredContacts = state => {
  const normalizeFilter = getFilter(state).toLowerCase();
  const contacts = getContacts(state);
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
};
