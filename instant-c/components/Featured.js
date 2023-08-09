import { styled } from "styled-components"
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
    background-color: #222; 
    color: white; 
    padding: 50px 0;
`; 

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 1.5rem;
    @media screen and (min-width: 768px) {
        font-size: 3rem;
    }
`;

const Desc = styled.p`
    color: #aaa;
    font-size: .8rem;
`;

const ColumsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 70px;
    img { 
        max-width: 100%;
        height: 220px;
        display: block;
        margin: 0 auto;
    }
    div:nth-child(1) {
        order:2
    }
    @media screen and (min-width: 768px) {
        grid-template-columns: 1.5fr 1fr;
        div:nth-child(1) {
        order:0;
    }
    }
`; 
 
const Column = styled.div`
    display: flex;
    align-items: center; 
`;   

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
`;

export default function Featured({product}) {
    const {addProduct} = useContext(CartContext);
    function addFeaturedToCart() {
        addProduct(product._id);
    }
    return (
        <div>
            <Bg>
                <Center>
                    <ColumsWrapper>
                        <Column>
                            <div>
                                <Title>{product.title}</Title>
                                <Desc>{product.description}</Desc>
                                <ButtonsWrapper>
                                    <ButtonLink href={'/products/'+product._id} outline={1} white={1}>
                                        Read more
                                    </ButtonLink>
                                    <Button primary={1} onClick={addFeaturedToCart}>
                                        <CartIcon />
                                        Add to cart
                                    </Button>
                                </ButtonsWrapper>
                            </div>
                        </Column>
                        <Column>
                            <div>
                                <img src="https://abdazib.s3.amazonaws.com/1689771905702.png" alt="Imperium"/> 
                            </div>
                        </Column>
                    </ColumsWrapper>
                </Center>
            </Bg>
        </div>
    )
}