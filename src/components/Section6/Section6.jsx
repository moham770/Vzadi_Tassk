import img from '../../assets/Images/QuestionMark.png' 
import styled from './Section6.module.css' 
import logo from '../../assets/Images/M.png'
const Section6 = () => {
  return <section name='section6' className=' py-5 ' id='sec6'>
    <div className="container my-5 py-5">
        <div className="row gy-3 mb-5 ">
            <div className="col-md-6  ">
           
                <div className={`${styled.imgection}   `}>
                    <img className='w-100 ' src={img} alt="" />
                </div>
            </div>
            <div className="col-md-6">
                
            <div className="accordion   " id="accordionPanelsStayOpenExample">
  <div className="accordion-item  mb-2">
    <h2 className="accordion-header ">
      <button className={`accordion-button  fs-3 fw-bold  ${styled.button}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      How To Join  <img className='ms-3' src={logo} alt="" />
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
<p>        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores harum dicta minus minima ut dolore?</p> 
     </div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed  fs-3 fw-bold ${styled.button} `} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
       Who Is  <img className='ms-3' src={logo} alt="" />
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
    <div className="accordion-body">
<p>        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores harum dicta minus minima ut dolore?</p> 
     </div>
    </div>
  </div>

</div>


            </div>
        </div>
    </div>



  </section>
}

export default Section6
