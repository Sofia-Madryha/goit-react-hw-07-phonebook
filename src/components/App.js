// import { getContacts } from 'redux/selectors';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';

import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from "redux/selectors";
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      

      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <Filter />

      
      {isLoading && !error && <b>Request in progress...</b>}
          <ContactList/> 
    </div>
  );
};
