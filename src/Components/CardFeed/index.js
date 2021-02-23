import React, {useState} from 'react';
import styled from '../../Pages/Profile/style';
import 'styled-components';
import '../../Pages/Profile/index';
import '../../../src/style.css';
import {ContainerCardFeed, TopCardFeed, ContainerItensCard, ContainerMessagesCard} from './style';
import imgProfile from '../../images/imgProfile-150x150.jpg';
import { FiMessageCircle, FiHeart, FiSend, FiBookmark, FiDownload } from "react-icons/fi";
import posts from '../../Config/post';

function CardFeed({img}) {
  return (
    <>  
         <ContainerCardFeed> {/* Container Card Feed */}
                <TopCardFeed>
                    <img src={imgProfile}></img>
                    <h3>tayrone_batista</h3>
                    <h4>...</h4>
                </TopCardFeed>
                <div>
                    <img src={img}></img>
                    <ContainerItensCard>
                        <div>
                              <FiHeart size="30"/>
                              <FiMessageCircle size="30"/>
                              <FiSend size="30"/>
                        </div>
                        <div>
                              <FiBookmark size="30"/>
                              <FiDownload size="30"/>
                        </div>
                    </ContainerItensCard>
                    <div>
                        <p>Curtido por <b>brunodilmar</b> e <b>outras 4.983 pessoas</b></p>
                    </div>
                    <ContainerMessagesCard>
                          <div>
                              <div>
                                  <p><b>empreendedorinfluencer: </b> É sua meta de vida também?</p>
                                  <FiHeart size="15"/>
                              </div>
                          </div>
                    </ContainerMessagesCard>
                </div>
         </ContainerCardFeed>
    </>
  );
}

export default CardFeed;