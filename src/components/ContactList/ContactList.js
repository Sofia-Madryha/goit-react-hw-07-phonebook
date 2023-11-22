import { ContactCard } from 'components/ContactCard/ContactCard';
import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

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
