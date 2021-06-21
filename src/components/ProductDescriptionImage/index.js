import React from 'react';
import { useBalloon } from '../../hooks/BalloonProvider';
import * as SC from './styles';

const ProductDescriptionImage = ({ balloon }) => {

    const { selected } = useBalloon();

    return(
            selected === balloon.id
                ?   <SC.Container>
                        <SC.DescriptionText>{balloon.desc}</SC.DescriptionText>
                        <SC.ImageContainer>
                            <SC.Image src={balloon.image + '.png'} type={balloon.type} />
                        </SC.ImageContainer>
                    </SC.Container>
                :   null
    );
}

export default ProductDescriptionImage;