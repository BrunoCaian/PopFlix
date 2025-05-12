import { DivLinks, HamburgerButton, LogoutButton, NavContainer, NavMobileContainer, StyledLink, StyledLinkMobile } from "./styles"
import { FiX } from "react-icons/fi"
import { RxHamburgerMenu } from "react-icons/rx"
import { useMenu } from '../../contexts/MenuContext'
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { CiLogout } from "react-icons/ci";
import { FiFilm } from "react-icons/fi"
import { FaHome, FaStar } from "react-icons/fa"
import { FaRegCalendar } from "react-icons/fa"
import { AiOutlineInfoCircle } from 'react-icons/ai';


export default function Navbar() {
    const { isOpen, closeMenu, toggleMenu } = useMenu();

    const handleLogout = async () => {
        const confirmLogout = window.confirm('Tem certeza que deseja sair?')
        if(!confirmLogout) return
        try {
            closeMenu()
            await signOut(auth);
        } catch (error) {
            console.error("Erro ao sair: ", error);
        }
    };

    return (
        <>
            <NavContainer>
                <StyledLink to='/'>
                    <FaHome />
                    <span>Home</span>
                </StyledLink>

                <StyledLink to='/generos'>
                    <FiFilm />
                    <span>Gêneros</span>
                </StyledLink>

                <StyledLink to='/top-rated'>
                    <FaStar color="yellow" />
                    <span>Top</span>
                </StyledLink>

                <StyledLink to='/upcoming'>
                    <FaRegCalendar />
                    <span>Lançamentos</span>
                </StyledLink>

                <StyledLink to='/about'>
                    <AiOutlineInfoCircle />
                    <span>Sobre</span>
                </StyledLink>

                <LogoutButton onClick={handleLogout}>
                    <CiLogout style={{width: '40px', height: '20px'}}/>
                    <span>Sair</span>
                </LogoutButton>
            </NavContainer>

            <HamburgerButton onClick={toggleMenu}>
                {isOpen ? <FiX /> : <RxHamburgerMenu />}
            </HamburgerButton>

            {isOpen && (
                <NavMobileContainer>
                    <DivLinks>
                        <StyledLinkMobile to='/' onClick={closeMenu}>
                        <FaHome/>
                        Home
                        </StyledLinkMobile>

                        <StyledLinkMobile to='/generos' onClick={closeMenu}>
                        <FiFilm/>
                        Gêneros
                        </StyledLinkMobile>

                        <StyledLinkMobile to='/top-rated' onClick={closeMenu}>
                        <FaStar color="yellow" />
                        Top
                        </StyledLinkMobile>

                        <StyledLinkMobile to='/upcoming' onClick={closeMenu}>
                        <FaRegCalendar />
                        Lançamentos
                        </StyledLinkMobile>

                        <StyledLinkMobile to='/about' onClick={closeMenu}>
                        <AiOutlineInfoCircle />
                        Sobre
                        </StyledLinkMobile>

                        <StyledLinkMobile onClick={handleLogout}>
                            <CiLogout style={{width: '40px', height: '20px'}}/>
                            Sair
                        </StyledLinkMobile>
                    </DivLinks>
                </NavMobileContainer>
            )}
        </>
    )
}