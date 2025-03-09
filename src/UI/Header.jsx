import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="border-b-4 border-stone-500 bg-yellow-600 px-4 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        Stafie's Pizza Company
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
