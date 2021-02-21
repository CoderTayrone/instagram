import styled from 'styled-components';

export const Container = styled.div`

    width: 960px;
    margin: 0 auto;

`

export const ContainerHeader = styled.div`

    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 32px 0px;

`

export const ImgLogo = styled.div`

        text-align: center;
        img{
            max-width: 100%;
            border-radius: 50%;
        }

`
export const ContainerInsight = styled.div`

        display: flex;
        justify-content: flex-start;
        margin: 12px 0;

        p{
            margin-right: 24px;
        }

`

export const ContentProfile = styled.div`

        font-family: 'Arial, sans-serif';

        h2{
            font-size: 28px;
            color: #262626;
            margin: 12px 0px;
        }
        h3{
            margin: 12px 0px;
        }
        h3, p{
            font-size: 20px;
            color: #262626;
            line-height: 26px;
        }

`

export const ContainerDestaques = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 48px;
    img{
            width: 77px;
            margin: 0px 24px;
            border-radius: 50%;
      }

`

export const ContainerTitles = styled.div`

      display: flex;
      justify-content: center;

      p{
          margin: 24px;
          color: rgba(0, 0, 0, 0.7);
      }

`

export const ContainerPostagens = styled.div`

      display: flex;
      justify-content: space-around;
      padding: 0px 5px;
      flex-wrap: wrap;
      position: relative;

`

export const CardPost = styled.div`
        margin-bottom: 24px;
        position: relative;
        img{
          width: 293px;
          height: 293px;
        }
        div{
            position: absolute;
            opacity: 0;
            top: 0;
            background-color: rgba(0,0,0, 0.4);
            left: 0;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 293px;
            height: 293px;
            
            h2{
                margin: 0px 12px;
            }

            :hover{
                opacity: 1;
            }
            
        }
`

export const ContainerModal = styled.div`

        background-color: white;;
        width: 960px;
        height: 600px;
        margin: 100px auto;
        position: relative;
        display: flex;

        h5{
            position: absolute;
            top: 12px;
            right: 12px;
            font-size: 24px;
            cursor: pointer;
        }

        div{


            img{
                width: 600px;;
                height: 600px;
            }

        }

`

export const ContentModal = styled.div`

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 360px;
        padding: 24px 24px;
        height: 8vh;
        border-bottom: 1px solid rgba(0,0,0, 0.1);
        img{
            border-radius: 50%;
            width: 36px;
            height: 36px;
        }
        h4{
            cursor: pointer;
        }
    }

`

