import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavMobileContainer = styled.nav`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-color: #0f172b;
    padding: 5rem 1rem 2rem;
    z-index: 1000;

    @media (min-width: 701px) {
    display: none;
    }
`;

export const DivLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
`;

export const StyledLinkMobile = styled(NavLink)`
    width: 100%;
    max-width: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    text-align: center;
    padding: 1rem;
    border-radius: 8px;
    background-color:rgb(33, 33, 59);
    color: white;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    transition: background-color 0.2s ease, transform 0.1s ease;

    &:active {
      background-color:rgba(106, 13, 173, 0.41); 
      color: #6a0dad;
      transform: scale(0.98); 
    }
`;

export const HamburgerButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2000;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 2.5rem;
    cursor: pointer;



  @media (min-width: 701px) {
    display: none;
  }
`;



export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: 30px;
    
    @media (max-width: 700px) {
      display: none;
    }
    
    `

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 25px;
    border-bottom: 2px solid transparent;
    transition: transform 0.3s ease;

    &.active {
    border-bottom: 2px solid #9932CC; 
  }

    span {
      font-size: 0.8rem;
      margin-top: 4px;
      border-bottom: 2px solid transparent;
    }

    @media (min-width: 1150px) {
      &:hover {
        transform: scale(1.08)
    }
    }

    @media (max-width: 1000px) {
      &:active {
        transform: scale(1.08)
     }
    }
    
    

    @media (max-width: 820px) {
      font-size: 20px;
    }
`

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
  left: 45px;

  span {
    font-size: 0.8rem;
    margin-top: 4px;
  }

  @media (min-width: 1150px) {
    &:hover {
      transform: scale(1.08);
    }
  }

  @media (max-width: 1000px) {
    &:active {
      transform: scale(1.08);
    }
  }
`;