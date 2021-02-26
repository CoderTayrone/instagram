import '../../../src/style.css';
import React, { useContext, useState } from 'react';
import {Container} from '../Profile/style';
import {ContainerFeed} from '../Feed/style';
import CardFeed from '../../Components/CardFeed';
import posts from '../../Config/post';
import {ChallengesContext} from '../../contexts/SearchProvider';



function Feed() {


    const searchData  = useContext(ChallengesContext); 
   console.log(searchData)
    
  
 
    return (
      <>    
          <Container>
                
                <ContainerFeed>
                    <div>
                        {
                            posts.map(post => (
                                <CardFeed img={post.imgPost} title={post.countLikes}>
                                    
                                </CardFeed>
                            ))
                        }
                    </div>
                    <div>
                            <h2>
                                asdasd
                            </h2>
                    </div>
                </ContainerFeed>
                
          </Container>
      </>
    );
  }
  
  export default Feed;