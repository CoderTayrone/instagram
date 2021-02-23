import '../../../src/style.css';
import React, { useState } from 'react';
import {Container} from '../Profile/style';
import {ContainerFeed} from '../Feed/style';
import CardFeed from '../../Components/CardFeed';
import posts from '../../Config/post';


function Feed() {

  
 
    return (
      <>    
          <Container>
                
                <ContainerFeed>
                    <div>
                        {
                            posts.map(post => (
                                <CardFeed img={post.imgPost} title={post.countLikes} messages={post.messages.nameMessage}>
                                    
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