import styled from './Section2.module.css'
import image from '../../assets/Images/sticker-png-digital-marketing-ecommerce-online-shopping-prestashop-customer-vendor-business-web-development-removebg-preview.png'

const Section2 = () => {

    return <section name="section2" id='sec2' className={`my-5 ${styled.column1} `}>
        <div className="container py-5">
            <div className="my-5">
        <div className="row py-5 align-items-center ">
            <div className="col-md-6">
                <div className="col1">
                <h2 className='text-main h1'>Your Frist Purchase  <br/>is only a few clicks away </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quos soluta maiores optio, quidem corrupti minima ipsum asperiores quas debitis neque tempora animi architecto. Nesciunt assumenda inventore natus consequatur mollitia.</p>
                <div className="btn btn-black px-4">Click Here</div>
                </div>
            </div>
            <div className="col-md-6">
            <div className="imgSec2">
                <img src={image} className='w-100' alt="" />
            </div>
            </div>
        </div>
        </div>  </div>



    </section>


}


export default Section2
