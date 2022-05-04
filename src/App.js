import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Home from './Home'
import Login from './Login'
function App(){
  
  
    return(
      <div className='App'>
        
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Login" element={<Login />}/> 
         </Routes>
      </BrowserRouter>
      </div>

    );


  }
export default App;
