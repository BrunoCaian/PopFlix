import styled from "styled-components";
import { ButtonStyle } from "../Home/styles";


export const Container = styled.div`
    padding: 2rem;
    width: 95%;
    max-width: 1200px;
    margin: 3rem auto;
    background-color: #3a265f;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    display: flex;
    gap: 2rem;
    color: #fff;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1.5rem;
    }
`

export const MovieSide = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    h2 {
        font-size: 2rem;
        text-align: center;
        color: #fff;

        @media(max-width: 480px) {
            font-size: 1.2rem;
        }
    }

    img {
        width: 100%;
        border-radius: 12px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
    }

    a {
        width: 100%;
        display: flex;
        justify-content: center;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const Rating = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    span {
        font-size: 1.4rem;
        color: gold;
        font-weight: bold;
    }

    svg {
        width: 24px;
        height: 24px;
    }
`

export const Trailer = styled(ButtonStyle)`
    width: 100%;
    background-color: #7e3fc9;
    border: 2px solid transparent;
    box-shadow: 0 2px 8px rgba(126, 63, 201, 0.3);
    transition: background-color 0.3s ease;
    

    @media (min-width: 1150px) {
        &:hover {
            color: #7e3fc9;
            background-color: transparent;
            border: 2px solid #7e3fc9;
        }
    }

    @media (max-width: 1000px) {
        &:active {
            color: #7e3fc9;
            background-color: transparent;
            border: 2px solid #7e3fc9;
        }
    }

    @media (max-width: 768px) {
        width: 70%;
    }

    @media (max-width: 480px) {
        width: 90%;
    }
`

export const MovieInfo = styled.div`
    width: 80%;
    margin-top: 10px;
    gap: 20px;

    @media (max-width: 768px) {
        width: 100%;
    }
`
export const GenresWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: 768px) {
        justify-content: center;
    }
`

export const Genres = styled.div`
    background-color: #8751d4;
    color: #fff;  
    font-weight: 500;
    padding: 5px 10px;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
    margin: 5px;
    border-radius: 15px;
    display: inline-block;
    font-size: 1rem;
`
export const Synopsis = styled.div`
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 2rem;
        margin-block: 1.5rem;
        color: #fff;
    }

    p {
        font-size: 1.4rem;
        line-height: 1.6;
        text-align: justify;
        hyphens: auto;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 3rem;
        }

        p {
            font-size: 1.5rem;
        }
    }
    
    @media (max-width: 480px) {
        p {
            font-size: 1rem;
        }
    }
`