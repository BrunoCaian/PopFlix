import styled from "styled-components";

export const FormSearch = styled.form`
    display: flex;
    justify-content: center;
    margin-top: 3.5rem;
`
export const InputSearch = styled.input`
    padding: 10px;
    width: 60%;
    outline: none;
    font-size: 1rem;
    border-radius: 10px 0px 0px 10px;
    border: 3px solid transparent;

    &:focus {
        border: 3px solid #4B0082;
    }

    @media (max-width: 500px) {
        width: 70%;
    }
`

export const ButtonSearch = styled.button`
    padding: 10px;
    font-size: 2rem;
    background-color: #4B0082;
    width: 80px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 0px 10px 10px 0px;

    @media (max-width: 500px) {
        width: 60px;
    }

`