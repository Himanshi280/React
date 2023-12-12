import React from 'react'
import './App.css';
// import Button from './Button';
import Card from './Card';
// import State from './State';
// import Effect  from './Effect';
import Fruits from './Fruits'
import Home from './Home.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './HomePage.jsx';
import Form from './Form.jsx';
import Layout from './Layout.jsx';
export const App=()=> {
  const fruits =
            {
                name: "Mango",
                color: "Yellow",
            }
            
  return (
    <>
{/* <Form/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}>
          <Route index element={<HomePage/>}/>
          <Route path='Card' element={<Card/>}/>
          <Route path='Form' element={<Form/>}/>
          <Route path='Fruits' element={<Fruits fruits={fruits} />}/>
          </Route>
        </Routes>
      </Router>

                {/* <div className="App">
                      <Fruits fruits={fruits} />
                      <hr></hr>
                      
                  </div> */}
                  {/* <State/>  */}
                  {/* <Effect/> */}
                {/* <Button/> */}
                {/* <Card/> */}   
    
    </>





//     <div className="App">
//       <h1 >
//        <pre> Kindness is free 
// &
// Smiles are contagious</pre>   
//        </h1>
//        <p>Many see smiling simply as an involuntary response to things that bring you joy or inspire laughter. While this is certainly true, it overlooks an important point: Smiling can be a conscious, intentional choice.

// What does psychology have to say about smiling? Whether your smile is genuine or not, it can act on your body and mind in a variety of positive ways, offering benefits for your health, your mood, and even the moods of people around you.</p>
//     </div>
  );
}

export default App;
