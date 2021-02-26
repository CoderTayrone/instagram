import '../../../src/style.css';
import React, { useState, useContext } from 'react';
import CardP from '../../Components/CardPost';
import CardD from '../../Components/CardDestaque';
import { Container, ContainerHeader, ImgLogo, ContentProfile, ContainerInsight, ContainerDestaques, ContainerTitles, ContainerPostagens, ContainerModal } from '../Profile/style';
import posts from '../../Config/post';
import profiles from '../../Config/profiles';
import imgStorie from '../../images/imgPost-640x640.jpg';
import '../../Components/Nav';
<<<<<<< HEAD
import {ChallengesContext} from '../../contexts/SearchProvider';



function Profile() {
   const searchData  = useContext(ChallengesContext);


   console.log(searchData)
    
/* 
    const [profiles, setProfiles] = useState();
 */
=======
import { useContext } from "react";
import ResearchContext from '../../context/ResearchContext';

function Profile() {
    const { search } = useContext(ResearchContext);
    /* 
        const [profiles, setProfiles] = useState();
     */
>>>>>>> dbc0326fd0da7bf9c3f929678d1827a9fd282750
    const [destaques, setDestaques] = useState([
        {
            idDestaque: 1,
            imgDestaque: imgStorie
        },
        {
            idDestaque: 2,
            imgDestaque: imgStorie
        },
        {
            idDestaque: 3,
            imgDestaque: imgStorie
        },
        {
            idDestaque: 4,
            imgDestaque: imgStorie
        }
    ])

    let perfils = profiles.filter((profile) => {
<<<<<<< HEAD
        return profile.nameProfile === searchData;
      })
=======
        return profile.nameProfile === search;
    })
>>>>>>> dbc0326fd0da7bf9c3f929678d1827a9fd282750

    /* const [posts, setPosts] = useState(); */

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <Container>

                {
                    perfils.map(profile => (
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
                        destaques.map(destaque => (
                            <div>{/* <img src={destaque.imgDestaque}></img> */}
                                <CardD key={destaque.idDestaque} img={destaque.imgDestaque}></CardD>

                            </div>
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