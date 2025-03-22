import { useDispatch } from 'react-redux';
import Button from '../../UI/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button
      type="delete"
      onClick={() =>
        dispatch(deleteItem(pizzaId))
      }
    >
      Delete
    </Button>
  );
}

export default DeleteItem;
