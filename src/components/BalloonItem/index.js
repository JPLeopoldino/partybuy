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
            <SC.Price>Preço {balloon.price}</SC.Price>
        </SC.Container>
    );
}

export default BalloonItem;