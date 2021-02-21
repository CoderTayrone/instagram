import React, {useState} from 'react';
import {ContainerCards, CardBox, ContainerPopUp} from '../PopUp/style';
import imgCard from '../../images/cards.jpeg';
import 'styled-components';
import '../../../src/style.css';

function PopUp() {
  
    const [active, setActive] = useState(false);

    const [users, setUsers] =useState([{
        img: {imgCard},
        title: 'Lorem Ipsum',
        describle: 'Lorem Ipsum descritle allofus'
    },
    {
        img: {imgCard},
        title: 'ergdgdf',
        describle: 'Loremdffritle allofus'
    },
    {
        img: {imgCard},
        title: 'ergdgdf',
        describle: 'Loremdffritle allofus'
    }


])

    const getActive = () => {
        setActive(!active)
    }

  return (
    <>  
        <button onClick={getActive}>Show Pop</button>
        <ContainerCards>
        {users.map(user => (
             <CardBox>
                <img src={imgCard}></img>
                <h2>{user.title}</h2>
                <p>{user.describle}</p>
            </CardBox>
            
            ))}
            <ContainerPopUp className={active ? 'active' : ''}/>
        </ContainerCards>
    </>
  );
}

export default PopUp;