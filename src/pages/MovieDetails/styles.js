import styled from "styled-components";
import { ButtonStyle } from "../Home/styles";


export const Container = styled.div`
    padding: 20px;
    width: 95%;
    color: #fff;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    gap: 30px;
    margin: 0 auto;
    margin-top: 3rem;
    background: linear-gradient(135deg, #2a1240, #4b217f);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);


    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
`

export const MovieSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 35%;

    @media (max-width: 900px) {
        width: 45%;
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    h2 {
        font-size: 1.5rem;
        color: #ffffff;

        @media (max-width: 768px) {
            font-size: 2rem;
         }

        @media (max-width: 480px) {
            font-size: 1.5rem;
        }
    }



    img {
        width: 100%;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

        @media (max-width: 900px) {
            width: 250px;
        }

        @media (max-width: 768px) {
            width: 400px;
        }

        @media (max-width: 480px) {
            width: 80%;
        }
    }

    a {
        width: 100%;
        display: flex;
        justify-content: center;
        text-decoration: none;
    }

    
`


export const Rating = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-direction: column;

    span {
        font-size: 1.5rem;
        color: gold;
        font-weight: bold;
    }
`

export const Trailer = styled(ButtonStyle)`
    width: 100%;
    background-color: #a66bf2;
    border: 1px solid transparent;
    box-shadow: 0 2px 8px rgba(154, 110, 221, 0.4);
    transition: background-color 0.3s ease;
    

    @media (min-width: 1150px) {
        &:hover {
            color: #A47ACC;
            background-color: transparent;
            border: 1px solid #a66bf2;
        }
    }

    @media (max-width: 1000px) {
        &:active {
            color: #a66bf2;
            background-color: transparent;
            border: 1px solid #a66bf2;
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
    background-color: #a66bf2;
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
        color: #ffffff;
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
            font-size: 1.8rem;
        }
    }
    
    @media (max-width: 480px) {
        p {
            font-size: 1.5rem;
        }
    }
`