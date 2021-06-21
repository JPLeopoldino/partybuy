import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${colors.light_blue};
    display: flex;
    flex-direction: row;
`

export const ProductsContainer = styled.div`
    width: 20%;
    background-color: #FFF;
    margin: 20px 10px 20px 20px;
    border-radius: 20px;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

export const ProductDescriptionContainer = styled.div`
    width: 40%;
    background-color: ${colors.blue};
    margin: 20px 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`

export const Logo = styled.img`
    width: 120px;
    height: auto;
    margin-top: 40px;
`

export const ProductInfoContainer = styled.div`
    width: 140px;
    height: 45px;
    margin-top: 40px;
    background-color: ${ 
        props => props.hovered 
        ? colors.main_dark
        : colors.main
    };
    padding: 0px 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition: 0.1s ease-in;
    z-index: 1;
`

export const Divider = styled.span`
    content: '';
    height: 25px;
    width: 1px;
    background-color: #000;
    margin: 0 15px;
`

export const Link = styled.p`
    font-weight: 500;
    cursor: pointer;
`

export const ProfileContainer = styled.div`
    width: 200px;
    height: 20px;
    background-color: ${colors.main};
    margin-top: 40px;
`

export const OrderContainer = styled.div`
    width: 40%;
    background-color: #FFF;
    margin: 20px 20px 20px 10px;
    border-radius: 20px;
`

export const ProductsMapContainer = styled.div`
    height: 81.4vh;
    /* flex: 1; */
    overflow-y: scroll;
    
`