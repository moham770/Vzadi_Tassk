import logo from '../../assets/Images/M.png'
import google from '../../assets/Images/Google_Play_Store_badge_EN.svg-removebg-preview.png'
import apple from '../../assets/Images/800px-Download_on_the_App_Store_Badge_IT_RGB_blk.svg-removebg-preview.png'
import styled from './Footer.module.css'

const Footer = () => {
  return <footer name='footer' id='footer' className='bg-dark py-5 text-white  mt-5'>
    <div className="container my-5">
        <div className="row gy-3 text-center">
            <div className="col-md-3  d-flex justify-content-center">
                <div className={styled.footerImg}>
                    <img src={logo} className='w-100 mt-3 rounded-1  cursor-pointer' alt="" />
                </div>
            </div>
            <div className="col-md-3">
                <div className="item">
                    <h4>Get to know us</h4>
                    <p>contact us</p>
                    <p>contact </p>

                </div>
            </div>
            <div className="col-md-3">
               <div className="item">
               <h4>Shop with us</h4>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
               </div>
            </div>
            <div className="col-md-3">
                <div className="item">
                <h4>Let Us help you</h4>
                <p>Lorem.</p>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
                </div>
            </div>
        </div>
        <div className={`row mt-4 justify-content-end `}>
            <div className={styled.logostores+` my-2`}>
            <img className='w-100'  src={google} alt="" />
            </div>
            <div className={styled.logostores+` my-2`}>

            <img  className='w-100' src={apple} alt="" />
            </div>
        </div>
    </div>

  </footer>
}

export default Footer
