import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { toast } from "react-toastify";
import { loginWithGoogle } from "../../services/authService";
import googleIcon from '../../assets/googleIcon.png'
import { validateEmail, validatePassword } from "../../utils/validators";
import { Oval } from "react-loader-spinner";

import {
  ErrorText,
  InputLabel,
  LoginButton,
  LoginButtonGoogle,
  LoginContainer,
  LoginForm,
  LoginInput,
  LoginInputWrapper,
  LoginMessage,
  LoginRedirect
} from "../Signin/styles";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    general: ''
  });

  const navigate = useNavigate();


  const handleSignup = async (e) => {
    e.preventDefault();
    setFormErrors({ email: '', password: '', general: '' });
    setLoading(true)

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      toast.success("Cadastro concluído! Bem-vindo 👋");
       navigate('/')

    } catch (error) {
      let errorMessage = '';
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Este email já está registrado. Tente fazer login.';
          setFormErrors(prev => ({ ...prev, general: errorMessage }));
          break;
        case 'auth/invalid-email':
          errorMessage = 'Email inválido. Por favor, verifique o endereço de email.';
          setFormErrors(prev => ({ ...prev, email: errorMessage }));
          break;
        case 'auth/weak-password':
          errorMessage = 'A senha é muito fraca. Por favor, escolha uma senha mais forte.';
          setFormErrors(prev => ({ ...prev, password: errorMessage }));
          break;
        default:
          errorMessage = 'Erro de cadastro: ' + error.message;
          setFormErrors(prev => ({ ...prev, general: errorMessage }));
      };
    } finally {
      setLoading(false)
    }
  };


  const handleSignupWithGoogle = async () => {
    try {
      await loginWithGoogle();
      toast.success("Cadastro com Google realizado! 🚀")
      navigate('/')

    } catch (error) {
      let errorMessage = '';
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          errorMessage = 'A janela de autenticação do Google foi fechada antes de completar o login. Tente novamente.';
          setFormErrors(prev => ({ ...prev, general: errorMessage }));
          break;
        case 'auth/cancelled-popup-request':
          errorMessage = 'A solicitação de login foi cancelada. Já há um login em andamento.';
          setFormErrors(prev => ({ ...prev, general: errorMessage }));
          break;
        case 'auth/account-exists-with-different-credential':
          errorMessage = 'Já existe uma conta com este email, mas ela está registrada com outro método de login. Tente usar o método correspondente.';
          setFormErrors(prev => ({ ...prev, general: errorMessage }));
          break;
        case 'auth/invalid-credential':
          errorMessage = 'O login com Google falhou. Tente novamente mais tarde.';
          setFormErrors(prev => ({ ...prev, general: errorMessage }));
          break;
        default:
          errorMessage = 'Erro ao tentar se cadastrar com Google: ' + error.message;
          setFormErrors(prev => ({ ...prev, general: errorMessage }));
          
      }
    };
  }


  function validateEmailField() {
      setFormErrors(prev => ({ ...prev, email: validateEmail(email) ? '' : 'Informe um email válido.' }));
    }
  
    function validatePasswordField() {
      setFormErrors(prev => ({ ...prev, password: validatePassword(password) ? '' : 'A senha deve ter pelo menos 6 caracteres.' }))
    }
  
  return (
    <LoginContainer>
      <h2>Cadastrar</h2>
      <LoginMessage $error style={{
        visibility: formErrors.general ? 'visible' : 'hidden',
        opacity: formErrors.general ? 1 : 0,
        height: '2rem',
        transition: 'opacity 0.3s ease, visibility 0s linear 0.3s'
      }}>
        {formErrors.general || 'placeholder'}
      </LoginMessage>

      <LoginForm onSubmit={handleSignup}>
        <LoginInputWrapper>
          <LoginInput
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmailField}
            $hasError={!!formErrors.email}
          />
          <InputLabel $hasError={!!formErrors.email}>Email</InputLabel>
          {formErrors.email && <ErrorText>{formErrors.email}</ErrorText>}
        </LoginInputWrapper>

        <LoginInputWrapper>
          <LoginInput
            type="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePasswordField}
            $hasError={!!formErrors.password}
          />
          <InputLabel $hasError={!!formErrors.password}>Senha</InputLabel>
          {formErrors.password && <ErrorText>{formErrors.password}</ErrorText>}
        </LoginInputWrapper>

        <LoginButton type="submit" disabled={loading || !email || !password}>
          {loading
            ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Oval visible={true}
                height="25"
                width="25"
                color="#fff"
                ariaLabel="oval-loading"
              />
            </div>
            : 'Cadastrar'}
        </LoginButton>
        <LoginButtonGoogle onClick={handleSignupWithGoogle}>
          <img src={googleIcon} alt="ícone do google" style={{ width: '20px' }} />
          Cadastrar com Google
        </LoginButtonGoogle>
      </LoginForm>

      <LoginRedirect>Já tem uma conta? <span onClick={() => navigate("/signin")}>Faça login!</span></LoginRedirect>
    </LoginContainer>
  );
}