import React from 'react'
import {Link} from 'react-router-dom'
import logo from './user.svg'
import image from './Images/image.jpg'


class Home extends React.Component{
     render(){
         return(
             <div>
                 
                  

                 <nav className='navbar navbar-expand-lg bg-light navbar-light border-bottom '>
                     <div className='container'>
                     {/* <button >
          <span class="navbar-toggler-icon"></span>
        </button>
 */}
                     
                     <a href="#" className='navbar-brand text-danger' ><b>Wedding</b>Wire.in</a>


                     <button
                       class="navbar-toggler"
                       type="button"
                       data-bs-toggle="collapse"
                      data-bs-target="#navmenu"                               //bs-target is given a id....the data to be toggled
        >
          <span class="navbar-toggler-icon"></span>
        </button>


                   
                     <div class="collapse navbar-collapse"  id="navmenu"  /* navmenu id is given in the button to toggel*/ >     
                    
                       <ul class="navbar-nav ms-auto"  >                
                           <li class="nav-item">
                             <a href="#learn" class="nav-link" style={{color:"red"}}>Wedding Venues</a>
                           </li>
                           <li class="nav-item">
                              <a href="#questions" class="nav-link" style={{color:"red"}}>Brides</a>
                           </li>
                           <li class="nav-item">
                              <a href="#instructors" class="nav-link" style={{color:"red"}}>Grooms</a>
                           </li>
                           <l1>
                           <Link to="/Login"><button  class="btn btn-outline-danger" style={{color:"red"}}>LogIn/SinUp</button></Link>
                           </l1>
                        </ul>
                     </div>

                     </div>
                 </nav>
                 <div className=''>
                 <div className=''>
                       <div className="row">
                              <div className='col'>
                                <div className='container'>
                                <span><h3 className='pt-5'><b>Discover everything you need <br/>to plan your big day</b></h3>
                                   <br/><p>Search over 67,000 local professionals with reviews,<br/> pricing, and more</p> </span>
                                     

                                   <br/><br/>
                                   <div class="shadow  bg-white rounded input-group mb-3">
                                     
                                   <input type="text" class="form-control" placeholder="Search for" aria-label="Search for" aria-describedby="button-addon2"/>
                                  <button class="btn btn-danger p-3   rounded" type="button" id="button-addon2">Search</button>
                                  </div>
                                     
                                  </div>
                                
                                </div>
                                <div className='col-sm'>  
                              
                              <img src={image} className="img-fluid float-right  text-right  " style={{float:"right",MarginLeft:"20vh"}}></img>
                              </div>
                              
                       </div>


                 </div>
                 </div>

                 <section class="bg-danger text-light p-5">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h3 class="">Sign Up For WeddingWire</h3>

          <div class="input-group news-input">
            
            <button class="btn btn-light btn-lg align-items-right" type="button">Click Here</button>
          </div>
        </div>
      </div>
    </section>

            
            
             <div className='row text-center m-3'>
                    <div className='col-sm mb-3 '>
                       <div className='card bg-light shadow rounded '>
                           <div className="card-body h1">
                               <i className='bi bi-search'></i>
                           </div>
                           <div className='card-title'>
                             <h5>Wedding Venues</h5>
                           </div>
                             </div>
                    </div> 
                    <div className='col-sm mb-3'>
                    <div className='card  bg-light shadow rounded'>
                           <div className="card-body h1">
                               <i className='bi bi-bag-dash'></i>
                           </div>
                           <div className='card-title'>
                             <h5>Wedding Shopping</h5>
                           </div>
                             </div>
                    </div> 
                    <div className='col-sm mb-3'>
                    <div className='card bg-light shadow rounded'>
                           <div className="card-body h1">
                           <i class="bi bi-camera-reels"></i>
                           </div>
                           <div className='card-title'>
                             <h5>Wedding Videos</h5>
                           </div>
                             </div>
                    </div> 
                    <div className='col-sm mb-3'>
                    <div className='card bg-light shadow rounded'>
                           <div className="card-body h1">
                           <i class="bi bi-gift"></i>
                           </div>
                           <div className='card-title'>
                             <h5>Wedding Gifts</h5>
                           </div>
                             </div>
                    </div> 


            </div>

             </div>
         )
     }

}
export default Home;