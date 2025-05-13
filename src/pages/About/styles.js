import styled from 'styled-components';

export const AboutContainer = styled.main`
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
    color: #fff;
    line-height: 1.6;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #8a2be2;

    @media (max-width: 480px) {
        font-size: 1.8rem;
    }
`;

export const Subtitle = styled.h2`
    font-size: 1.8rem;
    margin-top: 2rem;
    color: #9370db;

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }
`;

export const Paragraph = styled.p`
    font-size: 1.1rem;
    margin-bottom: 1rem;
`;

export const List = styled.ul`
    padding-left: 1.5rem;
`;

export const ListItem = styled.li`
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
`;

export const ExternalLink = styled.a`
    color: #ba55d3;;
    text-decoration: underline;
    &:hover {
        color:  #dda0dd;
    }
`;
