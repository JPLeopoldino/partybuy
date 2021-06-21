import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`

`;

export const ImageContainer = styled.div`
    background-color: ${colors.light_gray};
    margin: 0 0px 0 40px;
    height: 150px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
`;

export const SelectedIndicator = styled.span`
    content: "";
    background-color: ${colors.orange};
    width: 15px;
    height: 15px;
    border-radius: 100%;
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    visibility: ${
        props => props.visible
        ? 'visible'
        : 'hidden'
    };
`

export const Image = styled.img`
    width: 200px;
    height: auto;
`;

export const Title = styled.p`
    font-size: 18px;
    font-weight: 700;
    margin: 15px 0 5px 45px;
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin: 0 0 50px 45px;
`;

export const PriceLabel = styled.p`
    font-size: 14px;
    color: ${colors.dark_gray};
    margin: 0;
    margin-right: 5px;
`;

export const Price = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.dark_gray};
    margin: 0;
`;