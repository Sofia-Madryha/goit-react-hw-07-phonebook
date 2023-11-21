import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';


export const ContactCard = ({ contactInfo: { id, name, phone } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div>
      <p>
        {name} - {phone}
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
