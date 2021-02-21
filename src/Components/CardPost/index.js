import React, {useState} from 'react';
import styled, { CardPost, ContainerModal, ContentModal} from '../../Pages/Profile/style';
import 'styled-components';
import '../../Pages/Profile/index';
import Modal from 'react-modal';
import '../../../src/style.css';
import imgProfile from '../../images/imgProfile-150x150.jpg';
import { FaHeart, FaComment, FaRegIdBadge } from "react-icons/fa";


function CardP({key, img, imgUser, countLikes, countMessages}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>  
         <CardPost onClick={() => setModalIsOpen(true)}> {/* Card Postagem */}
                <img key={key} src={img}></img>
            <div>
            <h2><FaHeart/> {countLikes}</h2>
                <h2><FaComment/> {countMessages}</h2>
            </div>
        </CardPost>


        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} 
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        border: '1px solid transparent',
                    },
                    content: {
                        backgroundColor: 'transparent',
                        border: '1px solid transparent'                        
                    }
                }}> 
                    <ContainerModal>
                        <div>
                             <img key={key} src={img}></img>
                        </div>
                        <ContentModal> {/* Container Right Messages Modal */}
                            <div>
                                  <img src={imgProfile}></img>
                                  <h3>tayrone_batista</h3>  
                                  <h4 onClick={() => setModalIsOpen(false)}>° ° °</h4>  
                            </div>
                        </ContentModal>
                        <h5 /* onClick={() => setModalIsOpen(false)} */></h5>
                    </ContainerModal>
                </Modal>
    </>
  );
}

export default CardP;