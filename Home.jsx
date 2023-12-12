import React from 'react'
import {Outlet,Link} from "react-router-dom";
import './Home.css'
const Home=()=> {
  return (
    <div>
        
        <nav style={{backgroundColor:'whitesmoke',display:"flex"}}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Card">Card</Link>
            </li>
            <li>
              <Link to="/Fruits">List</Link>
            </li>
            <li>
              <Link to="/Form">Forms</Link>
            </li> 
          </ul>
        </nav>
       <Outlet/>
    </div>
  )
}
export default Home;