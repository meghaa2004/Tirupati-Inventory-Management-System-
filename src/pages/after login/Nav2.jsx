import { useNavigate } from 'react-router-dom';
import './after-login.css';

const Nav2 = () => {

  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    navigate(event.target.value);
  };

  return (
    <div className='nav'>
      <h2 style={{ textAlign: 'center' }}> Inventory </h2>

      <select onChange={handleSelectChange} className="nav-dropdown">
        <option value="">Select an option</option>
        <option value="/customer">Customer</option>
        <option value="/item">Item</option>
        <option value="/itemO">Item Order</option>
        <option value="/sale">Sale</option>
      </select>
    </div>
  );
};

export default Nav2
