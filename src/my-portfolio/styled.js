import styled from 'styled-components';

export const Container = styled.div`

`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    border: 1px solid black;
`;

export const Navbar = styled.div`
    display: flex;
    gap: 10px;
`;

export const ListOR = styled.ul `
    display: flex;

    list-style: none;
    gap: 20px;
    

    a { 
        font-weight: 700;
        text-decoration: none;
        color: #000000;

    }
`;


