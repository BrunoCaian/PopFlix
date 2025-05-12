import styled from "styled-components";


export const LoginContainer = styled.div`
  
  background-color: rgba(0, 0, 0, 0.75);
  padding: 40px 30px;
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  margin: 2rem auto;
  color: #fff;

  @media (min-width: 768px) and (max-width: 1024px) {
    position: absolute;
    width: 600px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }


  
  h2 {
    font-size: 2.5rem;
     min-height: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2.5rem;
`;

// export const LoginInput = styled.input`
//   padding: 0.8rem;
//   border-radius: 8px;
//   border: none;
//   font-size: 1rem;
//   background-color: #1e1a2b; // roxo bem escuro
// border: 1px solid #3a2c55;
//   color: white;

//   &::placeholder {
//     color: #aaa;
//   }
// `;

export const LoginInputWrapper = styled.div`
  position: relative;
  margin-bottom: 0.6rem;
`;

export const LoginInput = styled.input`
  width: 100%;
  padding: 1.2rem 0.8rem 0.4rem;
  background-color: #1f1f2e;
  border: 1.5px solid ${({ $hasError }) => ($hasError ? 'red' : '#777')};
  border-radius: 4px;
  color: white;
  font-size: 1rem;

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? 'red' : '#a66bf2')};
    outline: none;
  }

  &::placeholder {
    color: transparent;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 1rem;
  left: 0.8rem;
  color: ${({ $hasError }) => ($hasError ? 'red' : '#aaa')};
  font-size: 1rem;
  pointer-events: none;
  transition: all 0.2s ease;

  ${LoginInput}:focus + &,
  ${LoginInput}:not(:placeholder-shown) + & {
    top: 0.3rem;
    left: 0.6rem;
    font-size: 0.8rem;
    color: ${({ $hasError }) => ($hasError ? 'red' : '#a66bf2')};
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 1rem;
  margin-top: 0.3rem;
  margin-left: 0.2rem;
  min-height: 1rem;
`;

export const LoginButton = styled.button`
  background-color: #a66bf2;
  border: none;
  color: #fff;
  font-weight: bold;
  padding: 12px;
  border-radius: 4px;
  width: 100%;
  transition: background-color 0.3s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (min-width: 1150px) {
      &:hover {
    background-color: #6b3db2;
      }
  }

  @media (max-width: 1000px) {
    &:active {
      background-color: #6b3db2;
    }
  }
`;

export const LoginButtonGoogle = styled(LoginButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 10px;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;

  @media (min-width: 1150px) {
    &:hover {
      background-color: #fff;
      color: #4b0082;
    }
  }

  @media (max-width: 1000px) {
    &:active {
      background-color: #fff;
      color: #4b0082;
    }
  }

`;

export const LoginMessage = styled.p`
  color: ${({ $error }) => ($error ? "#ff4d4f" : "#4caf50")};
  font-size: 1rem;
  
  
`;

export const LoginRedirect = styled.p`
  margin-top: 3rem;
  font-size: 1rem;

  span {
    color: 	#b288f4;
    cursor: pointer;
    font-weight: bold;

     @media (min-width: 1150px) {
      &:hover {
        text-decoration: underline;
      }
  }

  @media (max-width: 1000px) {
    &:active {
      text-decoration: underline;
    }
  }
  }
`;
