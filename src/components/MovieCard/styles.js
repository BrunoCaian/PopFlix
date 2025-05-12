import styled, { css } from "styled-components";
import { ButtonStyle } from "../../pages/Home/styles";

export const Card = styled.div`
    position: relative;
    color: white;
    width: 80%;
    height: 650px;
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

    ${({ $highlighted }) =>
    $highlighted &&
    css`
      border: 2px solid gold;
      box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
      transform: scale(1.01);
    `}

    h2 {
        color: #fff;
        font-size: 1.5rem;
        margin-top: 1rem;
    }

    span {
        color: #fff;
        margin-bottom: 1rem;
    }

    img {
        height: 400px;
        width: 100%;
        object-fit: cover;
        text-align: center;
        border-radius: 6px;
        transition: transform 0.3s ease, opacity 0.3s ease;
       
        ${({ $highlighted }) =>
            $highlighted
            ? css`
                transform: none;
                cursor: default;
            `
            : css`
                cursor: pointer;

                @media (min-width: 1150px) {
                    &:hover {
                        transform: scale(1.05);
                        opacity: 0.9;
                    }
                }

                @media (max-width: 1000px) {
                    &:active {
                        transform: scale(1.05);
                        opacity: 0.9;
                    }
                }
      `}
  }
`

export const CardButton = styled(ButtonStyle)`
    width: 100%;
`

export const Rating = styled.div`
    display: flex;
    margin-top: 1rem;

    div {
        display: flex;
        gap: 10px;
    
    span {
        font-size: 1.3rem;
        color: gold;
        font-weight: bold;
    }
  }
`


export const Badge = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    background: linear-gradient(135deg, gold, #daa520);
    color: black;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.8rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.6);
`
