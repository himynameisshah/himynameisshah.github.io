import { NavLink } from 'react-router-dom'
import recoil from './Recoil.png'

function Navbar ()
{
    return (
        <nav className="sidebar">
          <h1>SHAH</h1>
          <NavLink className="bold" to="/About">ABOUT</NavLink>
          <NavLink className="bold" to="/Projects">PROJECTS</NavLink>
          <NavLink className="secondary" to="/GameDev">Game Dev</NavLink>
          <NavLink to="/WebDev">Web Dev</NavLink>
        </nav>
    )
}

export default Navbar