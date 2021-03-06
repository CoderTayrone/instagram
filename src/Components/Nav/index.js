import {React, useEffect, useState} from 'react';
import {ContainerNav} from './style';
import {Link} from 'react-router-dom';


function Nav() {

  const [search, setSearch] = useState();
  
  

    return (
      <>  
           <ContainerNav>
               <nav>
                   <div><Link to="/profile"><h2>Logo</h2></Link></div>

                   <form>

                      <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
                      
                   </form>

                   <div><Link to="/"><h2>Feed</h2></Link></div>
               </nav>
           </ContainerNav>
      </>
    );
  }
  export default Nav;