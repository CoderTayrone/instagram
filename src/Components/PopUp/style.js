import styled from 'styled-components';
import '../../../src/style.css';

export const ContainerPopUp = styled.div`

    width: 90%;
    margin: 0 auto;
    height: 90vh;
    position: absolute;

`

export const ContainerCards = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    justify-content:space-around;
    align-items: center;
    text-align: center;
    background-color: white;
    position: relative;

`

export const CardBox = styled.div`

    max-width: 400px;
    background-color: whitesmoke;
    border-radius: 12px;
    padding: 12px;
    height: 300px;
    border: 1px solid red;
    margin: 24px;

    img{
        max-width: 100%;
    }
`