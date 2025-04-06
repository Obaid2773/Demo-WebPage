import React, { useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
     window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
   
  },[])
  const [menuOpen, setMenuOpen] = useState(false)
  const ToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
 
  return (
<nav className={`container ${sticky ? 'dark-nav' : ''}`}>
    <img src={logo} alt="" className='logo'/>
    <ul className={menuOpen ? "" : "hide-mobile-menu"}>
        <li> <Link to="hero" smooth= {true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="programmes" smooth= {true} offset={-260} duration={500}>Programmes</Link></li>
        <li><Link to="about" smooth= {true} offset={-100} duration={500}>About Us</Link></li>
        <li><Link to="campus" smooth= {true} offset={-300} duration={500}>Campus</Link> </li>
        <li><Link to="testimonials" smooth= {true} offset={-260} duration={500}>Testimonials</Link></li>
        <li> <Link to="contact" smooth= {true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
    </ul>
    <img className='menu-icon' src={menu_icon}alt="" onClick={ToggleMenu} />
</nav>  )
}

export default Navbar