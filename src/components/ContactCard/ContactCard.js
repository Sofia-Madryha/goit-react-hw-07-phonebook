import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactCard = ({ contactInfo: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div>
      <p>
        {name} - {number}
      </p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
