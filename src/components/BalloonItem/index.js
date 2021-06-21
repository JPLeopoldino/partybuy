import React from 'react';
import { useBalloon } from '../../hooks/BalloonProvider';
import * as SC from './styles';

const BalloonItem = ({ balloon }) => {

    const { selected, setSelected } = useBalloon();

    return(
        <SC.Container onClick={() => { setSelected(balloon.id) }}>
            <SC.ImageContainer>
                <SC.SelectedIndicator visible={ selected === balloon.id ? true : false} />
                <SC.Image src={balloon.image + '.png'} />
            </SC.ImageContainer>
            <SC.Title>{balloon.name}</SC.Title>
            <SC.PriceContainer>
                <SC.PriceLabel>Preço</SC.PriceLabel>
                <SC.Price>R${balloon.price}</SC.Price>
            </SC.PriceContainer>
        </SC.Container>
    );
}

export default BalloonItem;