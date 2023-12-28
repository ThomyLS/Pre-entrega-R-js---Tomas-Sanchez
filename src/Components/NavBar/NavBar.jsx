import './NavBar.css';
import CardWidget from '../CarWidget/CardWidget';

const NavBar = () => {
  return (
    <header>
      <h1>ArGhost</h1>

      <nav>
        <ul>
          <li>Servicios</li>
          <li>Hosting</li>
          <li>Servidores</li>
          <li>Ayuda</li>
        </ul>
      </nav>

      <CardWidget/>

    </header>
  )
}

export default NavBar