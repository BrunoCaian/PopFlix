import styled from "styled-components";

export const ButtonStyle = styled.button`
    padding: .7em 0em;
    border: 2px solid 	#4B0082;
    margin-top: 10px;
    border-radius: 6px;
    text-align: center;
    font-size: 1.2rem;
    color: #fff;
    cursor: pointer;
    background:#4B0082;
    transition: background 0.3s;

    @media (min-width: 1150px) {
        &:hover {
            background: transparent;
            color:#9932CC;
        }
    }

    @media (max-width: 1000px) {
        &:active {
            background: transparent;
            color:#9932CC;
        }
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin: 0 auto;
`

export const MoviesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    place-items: center;
    margin: 0 auto;

    @media (max-width: 920px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

export const LoadMore = styled(ButtonStyle)`
    width: 80%;
`