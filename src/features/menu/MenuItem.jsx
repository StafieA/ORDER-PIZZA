import Button from '../../UI/Button';
import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
  const {
    id,
    name,
    unitPrice,
    ingredients,
    soldOut,
    imageUrl,
  } = pizza;

  return (
    <li className='flex gap-4 py-2'>
      <img src={imageUrl} alt={name} className={`h-32 ${soldOut ?'opacity-70 grayscale' :''}`}/>
      <div className='flex flex-col grow pt-6'>
        <p className='font-bold text-xl '>{name}</p>
        <p className='text-sm italic text-stone-500 capitalize'>{ingredients.join(', ')}</p>
        <div className='mt-auto flex items-center justify-between'>
          {!soldOut ? (
            <p className='text-sm'>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className='text-sm uppercase font-medium text-stone-500'>Sold out</p>
          )}
          <Button type='small'>Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
