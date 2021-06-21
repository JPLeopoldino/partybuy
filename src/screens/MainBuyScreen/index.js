import React, { useEffect, useState } from 'react';
import { RiTruckLine, RiArrowDownSLine } from 'react-icons/ri';
import { IconContext } from "react-icons";


import api from '../../services';
import * as SC from './styles';
import BalloonItem from '../../components/BalloonItem';
import ProductDescriptionImage from '../../components/ProductDescriptionImage';

const MainBuyScreen = ({ logo }) => {
    const [buttonHover, setButtonHover] = useState(false);
    const [balloons, setBalloons] = useState([]);

    const handleButtonHover = () => {
        if(buttonHover === true) {
            setButtonHover(false);
        } else {
            setButtonHover(true);
        }
    }

    const getBallons = async() => {
        try {
            const response = await api.get('/products');
            setBalloons(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBallons();
    }, [])

    const Products = [
        {
            id: 1,
            name: 'Balão Azul',
        },
        {
            id: 2,
            name: 'Balão Azul',
        },
        {
            id: 3,
            name: 'Balão Azul',
        },
        {
            id: 4,
            name: 'Balão Azul',
        },
        {
            id: 5,
            name: 'Balão Azul',
        },
        {
            id: 6,
            name: 'Balão Azul',
        },
        {
            id: 7,
            name: 'Balão Azul',
        },
        {
            id: 8,
            name: 'Balão Azul',
        },
        {
            id: 9,
            name: 'Balão Azul',
        },
        {
            id: 10,
            name: 'Balão Azul',
        },
        {
            id: 11,
            name: 'Balão Azul',
        },
        {
            id: 12,
            name: 'Balão Azul',
        },
        {
            id: 13,
            name: 'Balão Azul',
        },
        {
            id: 14,
            name: 'Balão Azul',
        },
        {
            id: 15,
            name: 'Balão Azul',
        },
        {
            id: 1,
            name: 'Balão Azul',
        },
        {
            id: 2,
            name: 'Balão Azul',
        },
        {
            id: 3,
            name: 'Balão Azul',
        },
        {
            id: 4,
            name: 'Balão Azul',
        },
        {
            id: 5,
            name: 'Balão Azul',
        },
        {
            id: 6,
            name: 'Balão Azul',
        },
        {
            id: 7,
            name: 'Balão Azul',
        },
        {
            id: 8,
            name: 'Balão Azul',
        },
        {
            id: 9,
            name: 'Balão Azul',
        },
        {
            id: 10,
            name: 'Balão Azul',
        },
        {
            id: 11,
            name: 'Balão Azul',
        },
        {
            id: 12,
            name: 'Balão Azul',
        },
        {
            id: 13,
            name: 'Balão Azul',
        },
        {
            id: 14,
            name: 'Balão Azul',
        },
        {
            id: 15,
            name: 'Balão Azul',
        },
        {
            id: 1,
            name: 'Balão Azul',
        },
        {
            id: 2,
            name: 'Balão Azul',
        },
        {
            id: 3,
            name: 'Balão Azul',
        },
        {
            id: 4,
            name: 'Balão Azul',
        },
        {
            id: 5,
            name: 'Balão Azul',
        },
        {
            id: 6,
            name: 'Balão Azul',
        },
        {
            id: 7,
            name: 'Balão Azul',
        },
        {
            id: 8,
            name: 'Balão Azul',
        },
        {
            id: 9,
            name: 'Balão Azul',
        },
        {
            id: 10,
            name: 'Balão Azul',
        },
        {
            id: 11,
            name: 'Balão Azul',
        },
        {
            id: 12,
            name: 'Balão Azul',
        },
        {
            id: 13,
            name: 'Balão Azul',
        },
        {
            id: 14,
            name: 'Balão Azul',
        },
        {
            id: 15,
            name: 'Balão Azul',
        },
        {
            id: 1,
            name: 'Balão Azul',
        },
        {
            id: 2,
            name: 'Balão Azul',
        },
        {
            id: 3,
            name: 'Balão Azul',
        },
        {
            id: 4,
            name: 'Balão Azul',
        },
        {
            id: 5,
            name: 'Balão Azul',
        },
        {
            id: 6,
            name: 'Balão Azul',
        },
        {
            id: 7,
            name: 'Balão Azul',
        },
        {
            id: 8,
            name: 'Balão Azul',
        },
        {
            id: 9,
            name: 'Balão Azul',
        },
        {
            id: 10,
            name: 'Balão Azul',
        },
        {
            id: 11,
            name: 'Balão Azul',
        },
        {
            id: 12,
            name: 'Balão Azul',
        },
        {
            id: 13,
            name: 'Balão Azul',
        },
        {
            id: 14,
            name: 'Balão Azul',
        },
        {
            id: 15,
            name: 'Balão Azul',
        },
        {
            id: 1,
            name: 'Balão Azul',
        },
        {
            id: 2,
            name: 'Balão Azul',
        },
        {
            id: 3,
            name: 'Balão Azul',
        },
        {
            id: 4,
            name: 'Balão Azul',
        },
        {
            id: 5,
            name: 'Balão Azul',
        },
        {
            id: 6,
            name: 'Balão Azul',
        },
        {
            id: 7,
            name: 'Balão Azul',
        },
        {
            id: 8,
            name: 'Balão Azul',
        },
        {
            id: 9,
            name: 'Balão Azul',
        },
        {
            id: 10,
            name: 'Balão Azul',
        },
        {
            id: 11,
            name: 'Balão Azul',
        },
        {
            id: 12,
            name: 'Balão Azul',
        },
        {
            id: 13,
            name: 'Balão Azul',
        },
        {
            id: 14,
            name: 'Balão Azul',
        },
        {
            id: 15,
            name: 'Balão Azul',
        },
        {
            id: 1,
            name: 'Balão Azul',
        },
        {
            id: 2,
            name: 'Balão Azul',
        },
        {
            id: 3,
            name: 'Balão Azul',
        },
        {
            id: 4,
            name: 'Balão Azul',
        },
        {
            id: 5,
            name: 'Balão Azul',
        },
        {
            id: 6,
            name: 'Balão Azul',
        },
        {
            id: 7,
            name: 'Balão Azul',
        },
        {
            id: 8,
            name: 'Balão Azul',
        },
        {
            id: 9,
            name: 'Balão Azul',
        },
        {
            id: 10,
            name: 'Balão Azul',
        },
        {
            id: 11,
            name: 'Balão Azul',
        },
        {
            id: 12,
            name: 'Balão Azul',
        },
        {
            id: 13,
            name: 'Balão Azul',
        },
        {
            id: 14,
            name: 'Balão Azul',
        },
        {
            id: 15,
            name: 'Balão Azul',
        },
        {
            id: 1,
            name: 'Balão Azul',
        },
        {
            id: 2,
            name: 'Balão Azul',
        },
        {
            id: 3,
            name: 'Balão Azul',
        },
        {
            id: 4,
            name: 'Balão Azul',
        },
        {
            id: 5,
            name: 'Balão Azul',
        },
        {
            id: 6,
            name: 'Balão Azul',
        },
        {
            id: 7,
            name: 'Balão Azul',
        },
        {
            id: 8,
            name: 'Balão Azul',
        },
        {
            id: 9,
            name: 'Balão Azul',
        },
        {
            id: 10,
            name: 'Balão Azul',
        },
        {
            id: 11,
            name: 'Balão Azul',
        },
        {
            id: 12,
            name: 'Balão Azul',
        },
        {
            id: 13,
            name: 'Balão Azul',
        },
        {
            id: 14,
            name: 'Balão Azul',
        },
        {
            id: 15,
            name: 'Balão Azul',
        },
        {
            id: 1,
            name: 'Balão Azul',
        },
        {
            id: 2,
            name: 'Balão Azul',
        },
        {
            id: 3,
            name: 'Balão Azul',
        },
        {
            id: 4,
            name: 'Balão Azul',
        },
        {
            id: 5,
            name: 'Balão Azul',
        },
        {
            id: 6,
            name: 'Balão Azul',
        },
        {
            id: 7,
            name: 'Balão Azul',
        },
        {
            id: 8,
            name: 'Balão Azul',
        },
        {
            id: 9,
            name: 'Balão Azul',
        },
        {
            id: 10,
            name: 'Balão Azul',
        },
        {
            id: 11,
            name: 'Balão Azul',
        },
        {
            id: 12,
            name: 'Balão Azul',
        },
        {
            id: 13,
            name: 'Balão Azul',
        },
        {
            id: 14,
            name: 'Balão Azul',
        },
        {
            id: 15,
            name: 'Balão Azul',
        },
    ]

    return(
        <SC.Container>

            <SC.ProductsContainer>
                <SC.Logo src={logo} />
                <SC.TitleContainer>
                    <h1>Balão Unidade</h1>
                    <IconContext.Provider value={{ color: "#000", size: 35 }}>
                        <RiArrowDownSLine />
                    </IconContext.Provider>
                </SC.TitleContainer>
                <SC.ProductsMapContainer>
                {/* <img src="https://imgur.com/YgCvdhy.png"/> */}
                {/* <blockquote class="imgur-embed-pub" lang="en" data-id="YgCvdhy"><a href="https://imgur.com/YgCvdhy">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script> */}
                    
                    {
                        balloons.map((item) => {
                            return(
                                <BalloonItem balloon={item} key={item.id} />
                            )
                        })
                    }
                </SC.ProductsMapContainer>
            </SC.ProductsContainer>

            <SC.ProductDescriptionContainer>
                <SC.ProductInfoContainer hovered={buttonHover} >
                    <SC.Link onMouseEnter={()=>handleButtonHover()} onMouseLeave={()=> handleButtonHover()}>
                        Produto
                    </SC.Link>
                    <SC.Divider />
                    <SC.Link>
                        Sobre
                    </SC.Link>
                </SC.ProductInfoContainer>
                {
                    balloons.map((item) => {
                        return(
                            <ProductDescriptionImage balloon={item} />
                        )
                    })
                }
            </SC.ProductDescriptionContainer>

            <SC.OrderContainer>
                <SC.ProfileContainer>

                </SC.ProfileContainer>
                <RiTruckLine />
            </SC.OrderContainer>
        </SC.Container>
    );
}

export default MainBuyScreen;
