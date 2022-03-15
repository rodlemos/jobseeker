import styled from "styled-components";

export const ListContainer = styled.div` 
    display: grid;
    grid-template-columns: 40px 1fr 40px;
    gap: 30px;
    align-items: center;
    padding: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.opacity};
    img {
        width: 40px;
        height: 40px;
    }
    h2 {
        font-size: 1.1rem;
        font-weight: 700;
    }
    h3 {
        font-size: .8rem;
    }
    p {
        font-size: .8rem;
        font-weight: 400;
    }
`;