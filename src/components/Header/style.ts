import styled from "styled-components";

export const HeaderContainer = styled.header`
background-color: "#FAFAFA";
padding: 1rem;
display: flex;
justify-content: space-between;
align-items: center;

`;

export const HeaderContent = styled.div`
width: 100%;
max-width: 1120px;
margin: 0 auto;
padding: 0 1.5rem;

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

export const Car = styled.div`
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