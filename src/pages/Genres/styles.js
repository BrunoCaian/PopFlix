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
    width: 50px;
    border-radius: 8px;
    padding: 1rem;
    font-weight: 900;
    position: absolute;
    z-index: 10;
    cursor: pointer;

    @media (min-width: 1150px) {
      &:hover {
        color: #4B0082;
      }
    }


  @media (max-width: 500px) {
    width: 20px;
    margin-left: -5px;
    margin-right: -5px;
    transform: translateY(-40%);
  }
`;


export const CardOverlay = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 90%;
    padding: 1rem;
    color: white;
    text-align: center;
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.3s ease;
    pointer-events: none;

    h3 {
      font-size: 1rem;
      margin: 0.5rem 0;
    }

    span {
      display: block;
      margin-bottom: 0.5rem;
    }

    button {
      background-color: #4B0082;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;

        &:hover {
          background: #36005d;
        }
    }

    @media (min-width: 1000px) {
      pointer-events: auto;
    }
`;

export const MovieCard = styled.div`
    border-radius: 8px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    position: relative;

    img {
      width: 100%;
      height: 350px;
      cursor: pointer;
      border-radius: 8px;
      object-fit: cover;
}

 
  @media (min-width: 1000px) {
    &:hover ${CardOverlay} {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 999px) {
    ${CardOverlay} {
      ${({ isActive }) => isActive && `
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      `}
    }
  }

  @media (max-width: 500px) {
    width: 100%;

    img {
      height: 230px;
    }
  }
`;