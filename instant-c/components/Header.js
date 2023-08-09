import Link from "next/link";
import { styled } from "styled-components"
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";
import CartIcon from "./icons/CartIcon";

 
const StyledHeader = styled.header`
    background-color: #222; 
`; 

const Logo = styled(Link)`
    color: #fff;  
    text-decoration: none;
    position: relative;
    z-index: 3;
`;   
 
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0; 
`;

const StyledDiv = styled.nav`
    ${props => props.mobileNavActive ? `
    display: block;
    ` : `
    display: none;
    `}
    gap: 15px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 50px 20px 20px;
    background-color: #222;
    @media screen and (min-width: 768px) {
        display: flex;
        position: static;
        padding: 0;
    }
`;

const NavLink = styled(Link)`
    display: block;
    color: #aaa;
    text-decoration: none;
    padding-bottom: 30px;
    margin-top: 20px;
    @media screen and (min-width: 768px) {
        padding-bottom: 0;
        margin-top: 0;
    }
`;

const NavButton = styled.button`
    background-color: transparent;
    width: 30px;
    height: 30px;
    border: 0;
    color: white;
    cursor: pointer;
    position: relative;
    z-index: 3;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

const NavIcon = styled.button`
    display: flex;
    background-color: #222;
    border: none;
    align-items: center;
    text-align: center;
    padding: 0;
    margin: 0;
`;

const CartLink = styled(Link)`
    display: grid;
    grid-template-columns: auto auto;
    border: none;
    color: white;
    background: none;
    text-decoration: none;
`;


export default function Header() {
    const {cartProducts} = useContext(CartContext);
    const [mobileNavActive, setMobileNavActive] = useState(false);
    return (
        <StyledHeader>
            <Center>
                <Wrapper>
                        <Logo href={'/'}>InstantC</Logo>
                        <StyledDiv mobileNavActive={mobileNavActive}>
                            <NavLink href={'/'}>Home</NavLink>
                            <NavLink href={'/products'}>All Products</NavLink>
                            <NavLink href={'/categories'}>Categories</NavLink>
                            <NavLink href={'/account'}>Account</NavLink>
                            <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
                        </StyledDiv>
                        <NavIcon>
                            <CartLink href={'/cart'}>Cart ({cartProducts.length})</CartLink>
                            <NavButton onClick={() => setMobileNavActive(prev  => !prev)}>
                                <BarsIcon />
                            </NavButton>
                        
                        </NavIcon>
                        
                </Wrapper>
            </Center>
        </StyledHeader>
    )
}