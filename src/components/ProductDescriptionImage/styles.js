import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`

`;

export const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    width: ${
    props => props.type === "single"
        ? '1600px'
        : '1400px'
    };
    height: auto;
    transform: ${
    props => props.type === "single"
        ? 'translate(150px, -400px)'
        : 'translate(200px, -300px)'
    };
`;
