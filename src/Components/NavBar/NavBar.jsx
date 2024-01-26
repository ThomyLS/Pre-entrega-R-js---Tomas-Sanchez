import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>

      <Link to="/" >
        <h1>ArGhost</h1>
      </Link>

      <nav>
        <ul>

          <li>
            <NavLink to="/categoria/1"> Soporte </NavLink>
          </li>


          <li>
            <NavLink to="/categoria/2"> Servicios </NavLink>
          </li>



        </ul>
      </nav>

      <CartWidget />

    </header>
  )
}

export default NavBar