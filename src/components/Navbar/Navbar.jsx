import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/Images/M.png'

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
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#sec1">Section1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#sec2">Section2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#sec3">Section3</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#sec4">Section4</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#sec5">Section5</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#sec6">Section6</a>
        </li>
        
        
      </ul>
      <ul data-bs-spy="scroll" className="navbar-nav ms-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/signin ">Sign in</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#footer">Contact US</a>
        </li>
        
        
      </ul>
    
    </div>
  </div>
</nav>
  
  </>
}

export default Navbar
