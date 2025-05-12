import Navbar from "../Navbar";
import { HeaderContainer } from "./styles";


export default function HeaderComponent() {
    
    return (
        <HeaderContainer>
            <h1 style={{ textAlign: 'center', fontSize: '3rem'}}>
                <span style={{ color: 'white' }}>Pop</span>
                <span style={{ color: '#4B0082' }}>Flix</span>
            </h1>
            <Navbar/>
        </HeaderContainer>
        
    )
}