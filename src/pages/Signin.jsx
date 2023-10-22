
import { NavLink } from 'react-router-dom'

const Signin = () => {
  return  <section>
  <div className="container text-black bg-second my-4 py-3 rounded-2 ">
  <h2 className='fw-bolder'> Login :</h2>
  <form>
   
  <nav aria-label="breadcrumb">
  <ol className="breadcrumb fw-bold fs-3">
    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
    <li className="breadcrumb-item"><NavLink to="/register">Register</NavLink></li>
    <li className="breadcrumb-item active" aria-current="page">Login</li>
  </ol>
</nav> 

   <label htmlFor="email">Your Email</label>
   <input type="email" placeholder='Your Email ..' id='email'  className='form-control mb-3 mt-2  '/>

   <label htmlFor="password">Your Password</label>
   <input type="password" placeholder='Your Password ..' id='password'  className='form-control mb-3 mt-2  '/>



   <button type='button' className='btn btn-main text-white px-5'>Register</button>

  </form>
  </div>


 </section>
}

export default Signin
