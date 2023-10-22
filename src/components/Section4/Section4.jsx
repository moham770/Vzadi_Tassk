
import logo from '../../assets/Images/M.png'
import sunglass from '../../assets/Images/sunglasses.png'
import styled from './Section4.module.css'

const Section4 = () => {
  return <section name='section4' id='sec4' className='my-5 py-5'>
    <div className="container my-5">
        <div className="row align-items-center ">
        <div  className="col-md-6">
            <div style={{width:'250px'}} className="mx-1 img">
                <img className='w-100' src={logo} alt="" />
            </div>
            <h2>
            <span style={{color:"#e84888"}} className='mx-1'>Make</span>
            <span style={{color:'#4287be'}}  className='mx-1'>It</span>
            <span style={{color:'#5f3581'}} className='mx-1'>Faster</span>
            </h2>
            <p className='lead accordion '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo dolorum cumque soluta culpa delectus, nesciunt impedit veritatis quaerat libero optio eum illum natus quia tempora minima quis. Cumque, exercitationem.</p>

        </div>
        <div className="col-md-6">
            <div className="row g-4 align-items-center ">
                <div className="col-md-6 ">
                        <div className={styled.imgSunGlass +`  position-relative `}>
                        <img className={` w-100 `}  src={sunglass} alt="" />
                        <img src={logo} className='position-absolute start-50  translate-middle-x  w-50  ' alt="" />
                        </div>
                </div>
                <div className="col-md-6">
                <div className={styled.imgSunGlass +`  position-relative `}>
                        <img className={` w-100 `}  src={sunglass} alt="" />
                        <img src={logo} className='position-absolute start-50  translate-middle-x  w-50  ' alt="" />
                        </div>
                        <div className={styled.imgSunGlass +`  position-relative `}>
                        <img className={` w-100 `}  src={sunglass} alt="" />
                        <img src={logo} className='position-absolute start-50  translate-middle-x  w-50  ' alt="" />
                        </div>
                </div>
            </div>
           
        </div>
    </div>
    </div>
    
  </section>
}

export default Section4
