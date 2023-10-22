import { Link } from "react-router-dom"


const NotFound = () => {
  return (<>
    <div className="notfound">
        
    </div>
    <div className="row">
       <button className="btn btn-main w-50 mx-auto">
      <Link to='/'>Back To Home </Link>
    </button>
    </div>
   
  </>
  )
}

export default NotFound
