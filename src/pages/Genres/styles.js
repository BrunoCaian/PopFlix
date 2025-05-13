import styled from "styled-components";
import { SwiperSlide } from "swiper/react";


export const GenreContainer = styled.main`
    max-width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;

    h2 {
      font-size: 2rem;
    }
`;


export const SwiperWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 1rem 0;
    overflow: hidden;

    .swiper {
      width: 85%;
    }


`;
export const Slide = styled(SwiperSlide)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledSwiperButton = styled.button`
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    color: #fff;
    height: 100px;
    width: 50px;
    border-radius: 8px;
    padding: 1rem;
    font-weight: 900;
    position: absolute;
    z-index: 10;
    cursor: pointer;

    &:hover {
      color: #4B0082;
    }

  @media (max-width: 500px) {
    width: 20px;
    margin-left: -5px;
    margin-right: -5px;
    transform: translateY(-40%);
  }
`;


export const MovieCard = styled.div`
    border-radius: 8px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    img {
      width: 100%;
      height: 350px;
      cursor: pointer;
      border-radius: 8px;
      object-fit: cover;
      transition: transform 0.3s ease, opacity 0.3s ease;
        
      @media (min-width: 1100px) {
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

}

    @media (max-width: 500px) {
      width: 100%;

      img {
        height: 230px;
      }
    }

`;