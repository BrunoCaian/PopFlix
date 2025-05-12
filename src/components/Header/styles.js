import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    
    justify-content: space-around;
    padding: 10px;
    border-bottom: 2px solid rgba(76, 0, 130, 0.68);

    @media (max-width: 700px) {
        justify-content: space-between;

        h1 {
            margin-left: 2rem;
        }
    }
 `