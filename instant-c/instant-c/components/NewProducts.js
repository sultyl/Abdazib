import { styled } from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

const Title = styled.h2`
    font-size: 2rem;
    margin: 30px 0 20px;
    font-weight: normal;
`;

export default function NewProducts({product}) {
    return (
        <Center>
            <Title>Top Products</Title>
            <ProductsGrid>
                {product?.length > 0 && product.map(product => (
                    <ProductBox {...product} />
                ))}
            </ProductsGrid>
        </Center>
        
    )
}