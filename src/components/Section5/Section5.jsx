
import image from '../../assets/Images/images__1_-removebg-preview.png'
import styled from './Section5.module.css'
const Section5 = () => {
  return <section name='section5' id='sec5' className='mt-4 py-4 '>
    <div className="container py-5 mt-5">
        <div className="row  align-items-center justify-content-between    ">
            <div className="col-md-6    ">
                <div style={{width:"400px"}} className="sec5img">
                    <img src={image} className='w-100' alt="" />
                </div>
            </div>
            <div className={`col-md-6 `}>
          
                <h2 style={{color:'#c7366d'}} className="h1 fw-bolder  ">
                    Use our app
                </h2>
                <p className={`lead  ${styled.sectionContent} `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At maxime incidunt deleniti error quibusdam minima beatae rerum aliquam quas sunt dicta ducimus cum accusantium fugit possimus unde, blanditiis consequuntur veniam?</p>
   
            </div>
        </div>
    </div>
  </section>
}
/**
 * 
 */
export default Section5
