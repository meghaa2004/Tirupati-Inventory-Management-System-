
import { Link } from 'react-router-dom'
import "./header.css"

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='logo'>
          <h1>Tirupati Retailer Inventory management System </h1>
        </div>
        <div className='login'>
          <button>
            <Link to={"/login"}>Login</Link>
          </button>
        </div>
      </div>
      <nav className='nav'>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/services"}>Services</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
      </nav>
    </>


  )
}


export default Header
