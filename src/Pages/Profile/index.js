import '../../../src/style.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import CardP from '../../Components/CardPost';
import {Container, ContainerHeader, ImgLogo, ContentProfile, ContainerInsight, ContainerDestaques, ContainerTitles, ContainerPostagens, ContainerModal} from '../Profile/style';
import imgProfile from '../../images/imgProfile-150x150.jpg';
import imgPost from '../../images/imgPost-640x640.jpg';
import imgPost1 from '../../images/imgPost1-640x640.jpg';
import imgPost2 from '../../images/imgPost2-640x640.jpg';
import imgPost3 from '../../images/imgPost3-640x640.jpg';
import imgPost4 from '../../images/imgPost4-640x640.jpg';
import imgPost5 from '../../images/imgPost5-640x640.jpg';

function Profile() {

    const [profiles, setProfiles] = useState([
        {
            imgProfile: imgProfile,
            nameProfile: 'tayrone_batista',
            nPublicacoes: '78',
            nSeguires: '980',
            nSeguindo: '185',
            title: 'Dev | Tayrone',
            describle_n1: 'Web Designer',
            describle_n2: 'English Lover',
            describle_n3: 'Produtor',
            describle_n4: 'Founder @Coder Mundi'
        }
    ]);

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

    const [posts, setPosts] = useState([
        {   idPost: 0,
            imgPost: imgPost,
            countLikes: '59',
            countMessages: '20',
            messages: ['Hey men', 'whats up', 'fuck off dude']
        },
        {   idPost: 1,
            imgPost: imgPost1,
            countLikes: '59',
            countMessages: '20'
        },
        {   idPost: 2,
            imgPost: imgPost2,
            countLikes: '59',
            countMessages: '20'
        },
        {   idPost: 3,
            imgPost: imgPost3,
            countLikes: '59',
            countMessages: '20'
        },
        {   idPost: 4,
            imgPost: imgPost4,
            countLikes: '59',
            countMessages: '20'
        },
        {   idPost: 5,
            imgPost: imgPost5,
            countLikes: '59',
            countMessages: '20'
        },
        {   idPost: 6,
            imgPost: imgPost,
            countLikes: '59',
            countMessages: '20'
        },
        {   idPost: 7,
            imgPost: imgPost1,
            countLikes: '59',
            countMessages: '20'
        },
        {   idPost: 8,
            imgPost: imgPost3,
            countLikes: '59',
            countMessages: '20'
        }

    ])

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
                             <CardP key={post.idPost} img={post.imgPost} countLikes={post.countLikes} countMessages={post.countMessages} imgUser={profiles.imgProfile}></CardP>  
                        ))   
                    }                      
                    
                </ContainerPostagens>
                
          </Container>
      </>
    );
  }
  
  export default Profile;