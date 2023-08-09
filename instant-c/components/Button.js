import { primary } from "@/lib/colors";
import styled, { css } from "styled-components";

export const ButtonStyle = css`
    border: 0;
    padding: 5px 15px;
    border-radius: 5px; 
    cursor: pointer;
    display: inline-flex;  
    align-items: center;
    text-decoration: none;
    font-weight: semibold; 
    svg{
            height: 20px;
            margin-right: 5px;
        }
    ${props => props.block && css`
        display: block;
        width: 100%;
    `}         
    ${props => props.space && css`
        padding: 10px;
    `}         
    ${props => props.white && !props.outline && css`
        background-color: #fff;  
        color: #000;
    `} 
    ${props => props.white && props.outline && css`
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
    `}
    ${props => props.primary && !props.outline && css`
        background-color: #2713bd;
        color: #fff;
        border: 1px solid #2713bd;
    `}
    ${props => props.primary && props.outline && css`
        background-color: transparent;
        color: ${primary};
        border: 1px solid #2713bd;
    `}
    ${props => props.size === 'l' && css`
        font-size: 1.2rem;
        padding: 10px 20px; 
    `}
`;

const StyledButton = styled.button`
    ${ButtonStyle} 
`;

export default function Button({children,...rest}) {
    return (
        <StyledButton {...rest}>{children}</StyledButton>
    );
}