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
  background-color: #1A1A1A;
  transform: translateY(-50%);
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
    background-color: #333333;
    color: #4B0082;
  }

  @media (max-width: 500px) {
    width: 20px;
    margin-left: -10px;
    margin-right: -10px;
    transform: translateY(-40%);
  }
`;


export const MovieCard = styled.div`
  border-radius: 8px;
  display: flex;
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
    margin-bottom: 15px;
        
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


// .swiper-button-next,
// .swiper-button-prev {
//   position: absolute;
//   color: #fff;
//   width: 40px;
//   height: 100px;
//   border-radius: 8px;
//   transition: background-color 0.3s ease;
//   z-index: 1;  
//   margin-left: -10px;
// }


// .swiper-button-next:hover,
// .swiper-button-prev:hover {
//   color: #4B0082 
// }


// .swiper-button-next {
//   right: 2;
//   transform: translateY(-50%); 
//   margin-right: -1rem;
// }

// .swiper-button-prev {
//   left: 0; 
//   transform: translateY(-50%) ;  
// }

// .swiper-button-next::after {
// content: '\f105'; /* Corrigido para a seta direita */
// font-family: 'Font Awesome 5 Free';
// font-weight: 900;
// font-size: 1rem;
// }

// .swiper-button-prev::after {
// content: '\f104'; /* Corrigido para a seta esquerda */
// font-family: 'Font Awesome 5 Free';
// font-weight: 900;
// font-size: 1rem;
