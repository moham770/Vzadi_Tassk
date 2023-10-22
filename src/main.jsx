import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './components/Home/Home.jsx'
import { createHashRouter,RouterProvider,} from "react-router-dom";
import Layout from './components/Layout/Layout';

import './index.css'
import MomiesShop from './pages/MomiesShop.jsx';
import Register from './pages/Register.jsx';
import Signin from './pages/Signin.jsx';


const router = createHashRouter([
  {path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'/ourShop',element:<MomiesShop/>},
    {path:'/register',element:<Register/>},
    {path:'/signin',element:<Signin/>},
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider  router={router}/>

)
