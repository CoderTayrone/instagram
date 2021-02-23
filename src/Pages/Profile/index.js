import '../../../src/style.css';
import React, { useState } from 'react';
import CardP from '../../Components/CardPost';
import {Container, ContainerHeader, ImgLogo, ContentProfile, ContainerInsight, ContainerDestaques, ContainerTitles, ContainerPostagens, ContainerModal} from '../Profile/style';
import posts from '../../Config/post';
import profiles from '../../Config/profiles';
import imgProfile from '../../images/imgProfile-150x150.jpg';

function Profile() {
/* 
    const [profiles, setProfiles] = useState();
 */
    const [destaques, setDestaques] = useState([
        {
            imgDestaque: imgProfile
        },
        {
            imgDestaque: imgProfile
        },
        {
            imgDestaque: imgProfile
        },
        {
            imgDestaque: imgProfile
        }
    ])

    /* const [posts, setPosts] = useState(); */

    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
      <>
          <Container>
                
                {
                    profiles.map(profile => (
                        <ContainerHeader> {/* Container Header */}
                    
                            <ImgLogo> {/* Profile Header */}
                                <img src={profile.imgProfile}></img> {/* Profile Header */} 
                            </ImgLogo> 
                            
                            <ContentProfile> {/* Content Profile Header */}
                                <h2>{profile.nameProfile}</h2>
                                    <ContainerInsight>
                                        <p><b>{profile.nPublicacoes}</b> Publicações</p>
                                        <p><b>{profile.nSeguires}</b> Seguidores</p>
                                        <p><b>{profile.nSeguindo}</b> Seguindo</p>
                                    </ContainerInsight>
                                <h3>{profile.title}</h3>
                                <p>{profile.describle_n1}</p>
                                <p>{profile.describle_n2}</p>
                                <p>{profile.describle_n3}</p>
                                <p>{profile.describle_n4}</p>

                            </ContentProfile>
                        
                        </ContainerHeader>
                    ))
                }

                <ContainerDestaques>{/* Container Destaques */}

                        {
                            destaques.map( destaque => (
                                <div><img src={destaque.imgDestaque}></img></div>
                            ))
                        }                        

                </ContainerDestaques>
                <hr></hr>
                <ContainerTitles>
                    <p>PUBLICAÇÕES</p>
                    <p>IGVT</p>
                    <p>SALVOS</p>
                    <p>MARCADOS</p>
                </ContainerTitles>
                <ContainerPostagens>{/* Container Postagens */}
                
                    {
                           posts.map(post => (
                             <CardP key={post.idPost} img={post.imgPost} countLikes={post.countLikes} countMessages={post.countMessages}></CardP>  
                        ))   
                    }                      
                    
                </ContainerPostagens>
                
          </Container>
      </>
    );
  }
  
  export default Profile;