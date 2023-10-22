import { Link } from 'react-router-dom'
import logo from '../../assets/Images/M.png'
import image from '.././../../public/images/pngtree-mobile-advertising-app-vector-material-png-image_6992125-removebg-preview.png'

const Section1 = () => {
  return <section id='sec1' className='my-2 d-flex  align-items-center '>
  <div className="container   ">
  <div className="row justify-content-between  align-items-center gap-4 ">
    <div className="col-md-6 homesection  " >

  <h1 className='text-main'>Start Buy in</h1>
  <div className="mb-2" style={{width:'220px'}}>
    <img  className='w-100' src={logo} alt="" />
  </div>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid fuga architecto nostrum aut minus officia. Expedita praesentium itaque recusandae, voluptas non, autem corporis aliquid sed porro provident accusantium iusto?</p>
  <button className='btn btn-black'>
    <Link to='/OurShop' >Shop now</Link>
  </button>
    </div>
    <div className="col-md-6 ">
      <img className='w-100' src={image} alt="" />
    </div>



  </div>
  </div>
</section>
}

export default Section1
