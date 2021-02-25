import React, {useState} from 'react';
import { CardDestaque, ContainerModalStorie, ContentModal} from '../../Pages/Profile/style';
import 'styled-components';
import '../../Pages/Profile/index';
import Modal from 'react-modal';
import '../../../src/style.css';


function CardD({key, img}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>  
         <CardDestaque onClick={() => setModalIsOpen(true)}> {/* Card Postagem */}
                <img key={key} src={img}></img>
            <div>
            {/* <h2><FaHeart/> {countLikes}</h2>
                <h2><FaComment/> {countMessages}</h2> */}
            </div>
        </CardDestaque>


        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} 
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.98)',
                        border: '1px solid transparent',
                    },
                    content: {
                        backgroundColor: 'transparent',
                        border: '1px solid transparent'                        
                    }
                }}> 
                    <ContainerModalStorie>
                        <div>
                             <img key={key} src={img}></img>
                                  <h4 onClick={() => setModalIsOpen(false)}>° ° °</h4>  
                        </div>
                        
                        <h5 /* onClick={() => setModalIsOpen(false)} */></h5>
                    </ContainerModalStorie>
                </Modal>
    </>
  );
}

export default CardD;