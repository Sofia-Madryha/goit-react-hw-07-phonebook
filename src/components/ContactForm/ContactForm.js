import { nanoid } from '@reduxjs/toolkit';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';

import { selectContacts } from 'redux/selectors';
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Only letters are allowed')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, 'Must be in format: 000-000-0000')
    .required('This field is required, please fill it'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();



  const handleSubmit = value => {
    console.log(value);
    const nameExists = contacts.some(
      contact => contact.name.toLowerCase() === value.name.toLowerCase()
    );
    if (nameExists) {
      alert(`${value.name}' is already in contacts.`);
    } else {
      console.log(addContact(value));
      dispatch(addContact(value));
    }
  };
  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        id: nanoid(),
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name" type="text" required />
        </label>

        <label>
          Phone
          <Field name="phone" type="tel" required />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
