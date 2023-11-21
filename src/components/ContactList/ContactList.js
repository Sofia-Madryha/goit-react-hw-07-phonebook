import { ContactCard } from 'components/ContactCard/ContactCard';
import { useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, filterName) => {
  if (filterName === '') {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filterName = useSelector(getFilter);
  console.log(filterName);
  const visibleContacts = getVisibleContacts(contacts, filterName);

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <ContactCard contactInfo={contact} />
        </li>
      ))}
    </ul>
  );
};
