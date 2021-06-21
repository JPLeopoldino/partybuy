import React from 'react';
import { useBalloon } from '../../hooks/BalloonProvider';
import * as SC from './styles';

const ProductDescriptionImage = ({ balloon }) => {

    const { selected } = useBalloon();

    return(
        <SC.Container>
            {
                selected === balloon.id
                    ?   <SC.ImageContainer>
                           <SC.Image src={balloon.image + '.png'} type={balloon.type} />
                        </SC.ImageContainer>
                    :   null
            }
            {/* <SC.ImageContainer>
                <SC.SelectedIndicator visible={ selected === balloon.id ? true : false} />
                <SC.Image src={balloon.image + '.png'} />
            </SC.ImageContainer> */}
        </SC.Container>
    );
}

export default ProductDescriptionImage;