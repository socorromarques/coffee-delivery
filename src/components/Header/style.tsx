import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
background-color: #dee1e7;
color: white;
    `

export const Logo = styled.div`
img {
height: 50px;
}
`;

export const Location = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
font-size: 1rem;
`;

export const Cart = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
position: relative;
`;

export const CartCount = styled.span`
background-color: #ef4444; /* bg-red-500 */
color: white;
border-radius: 9999px;
padding: 0.25rem 0.5rem;
font-size: 0.75rem;
position: absolute;
top: -5px;
right: -5px;
`;