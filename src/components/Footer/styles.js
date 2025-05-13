import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #3a265f;
    padding: 0.8rem;
    margin-top: 2rem;

    p {
        text-align: center;
        color: #fff;
        font-size: 0.95rem;
    }

    a {
        color: #b39ddb;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.3s ease;

        &:hover {
            color: #e1bee7; 
            text-decoration: underline;
        }
    }

    @media (max-width: 600px) {
        p {
            font-size: 0.85rem;
        }
    }
`;