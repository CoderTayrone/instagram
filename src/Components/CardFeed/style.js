import styled from 'styled-components';

export const ContainerCardFeed = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    border: 1px solid rgba(0,0,0, 0.1);
    div{
        img{
            width: 614px;
            height: 700px;
        }
    }

`
export const TopCardFeed = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 24px;
    height: 8vh;
    border: 1px solid rgba(0,0,0, 0.1);
    img{
        max-width: 36px;
        max-height: 36px;
        border-radius: 50%;
        cursor: pointer;
    }
    h4{
        font-size: 32px;
        margin-top: -15px;
        cursor: pointer;
    }

`


export const ContainerItensCard =styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5vh;
    padding: 0px 12px;

`

export const ContainerMessagesCard =styled.div`

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 5vh;
        padding: 0px 12px;
    }

`
