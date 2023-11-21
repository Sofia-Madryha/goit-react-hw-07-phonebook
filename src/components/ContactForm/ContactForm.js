import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors';
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number()
    .min(7, 'Must be more than 10 characters')
    .required('This field is required!'),
});

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = value => {
    const nameExists = contacts.some(
      contact => contact.name.toLowerCase() === value.name.toLowerCase()
    );
    if (nameExists) {
      alert(`${value.name}' is already in contacts.`);
    } else {
      dispatch(addContact(value));
    }
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
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
          Number
          <Field name="number" type="tel" required />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
