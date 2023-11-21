import { useDispatch} from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = filter => dispatch(setFilter(filter));

  return (
    <div>
      <input
        type="text"
        onChange={evt => handleFilterChange(evt.target.value)}
      />
    </div>
  );
};
