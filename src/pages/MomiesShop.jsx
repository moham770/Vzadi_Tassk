import { Link } from 'react-router-dom'
import logo from '../assets/Images/M.png'
const MomiesShop = () => {
  return <section className='min-vh-100 d-flex  justify-content-center align-items-center '>
    <div className="container   text-center ">
    <div className="row flex-column align-items-center   ">
        <div style={{width:'500px'}} className="pageImg mb-4">
        <img src={logo} className='w-100' alt="" />
        </div>
        <h2 className='fw-bold h1'>Welcome to Our shop</h2>
        <button className='btn btn-black'>
            <Link to='/'> Back to Home</Link>
        </button>

    </div>
    </div>
  </section>
}

export default MomiesShop
