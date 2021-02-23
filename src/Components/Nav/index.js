import {React, useStates} from 'react';
import {ContainerNav} from './style';
import {Link} from 'react-router-dom';


function Nav() {
    return (
      <>  
           <ContainerNav>
               <nav>
                   <div><Link to="/Profile"><h2>Logo</h2></Link></div>
                   <form>
                      <input type="search"></input>
                   </form>
                   <div><Link to="/"><h2>Feed</h2></Link></div>
               </nav>
           </ContainerNav>
      </>
    );
  }
  
  export default Nav;