import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/Images/M.png'
import { Link as LinkScroll , Element } from 'react-scroll';

const Navbar = () => {
  return <>
<nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top " id='Navbar' >
  <div className="container">
    <Link className="navbar-brand" to="/">
      <div className="" style={{width:'200px',objectFit:'contain',objectPosition:"center"}}>
      <img className="w-100 h-100" src={logo} alt="" />
      </div>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul data-bs-spy="scroll"  className="navbar-nav me-auto mb-2 mb-lg-0">
     
       
        <li className="nav-item cursor-pointer">
        <LinkScroll  spy={true}  className="nav-link" to="section1" smooth={true} duration={500}> 
        Section 1
        </LinkScroll>
        </li>
        <li className="nav-item cursor-pointer">
        <LinkScroll  spy={true}  className="nav-link" to="section2" smooth={true} duration={500}> 
        Section 2
        </LinkScroll>
        </li>

        <li className="nav-item cursor-pointer">
        <LinkScroll  spy={true}  className="nav-link" to="section3" smooth={true} duration={500}> 
        Section 3
        </LinkScroll>
        </li>
    
        <li className="nav-item cursor-pointer">
        <LinkScroll  spy={true}  className="nav-link" to="section4" smooth={true} duration={500}> 
        Section 4
        </LinkScroll>
        </li>

        <li className="nav-item cursor-pointer">
        <LinkScroll  spy={true}  className="nav-link" to="section5" smooth={true} duration={500}> 
        Section 5
        </LinkScroll>
        </li>

        <li className="nav-item cursor-pointer">
        <LinkScroll  spy={true}  className="nav-link" to="section6" smooth={true} duration={500}> 
        Section 6
        </LinkScroll>
        </li>

      
     
        
        
      </ul>
      <ul data-bs-spy="scroll" className="navbar-nav ms-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/signin ">Sign in</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>

        <li className="nav-item cursor-pointer">
        <LinkScroll  spy={true}  className="nav-link" to="footer" smooth={true} duration={100}> 
     Contact US
        </LinkScroll>
        </li>
        
        
      </ul>
    
    </div>
  </div>
</nav>
  
  </>
}

export default Navbar
