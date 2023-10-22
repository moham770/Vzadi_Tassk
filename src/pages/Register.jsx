
import {  NavLink } from 'react-router-dom'

const Register = () => {
  return <section>
   <div className="container text-black bg-second my-4 py-3 rounded-2 ">
   <h2 className='fw-bolder'> Register Now:</h2>
   <nav aria-label="breadcrumb">
  <ol className="breadcrumb fw-bold fs-3">
    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
    <li className="breadcrumb-item active" aria-current="page">Register</li>
  </ol>
</nav>
   <form>
    
    <label htmlFor="name">Your Name</label>
    <input type="text" placeholder='Your Name..' id='name'  className='form-control mb-3 mt-2  '/>


    <label htmlFor="email">Your Email</label>
    <input type="email" placeholder='Your Email ..' id='email'  className='form-control mb-3 mt-2  '/>

    <label htmlFor="password">Your Password</label>
    <input type="password" placeholder='Your Password ..' id='password'  className='form-control mb-3 mt-2  '/>

    <label htmlFor="Repassword">Re Password</label>
    <input type="password" placeholder='Your Repassword ..' id='Repassword'  className='form-control mb-3 mt-2  '/>


    <button type='button' className='btn btn-main text-white px-5'>Register</button>

   </form>
   </div>


  </section>
}

export default Register
