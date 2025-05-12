import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithEmail, loginWithGoogle } from "../../services/authService";
import { toast } from "react-toastify";
import googleIcon from '../../assets/googleIcon.png'
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
} from "./styles";
import { Oval } from "react-loader-spinner";
import { validateEmail, validatePassword } from '../../utils/validators';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    general: ''
  });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setFormErrors({ email: '', password: '', general: '' });
    setLoading(true);


    if (!email || !password) {
      setFormErrors(prev => ({ ...prev, general: 'Email e senha são obrigatórios!' }))
      setLoading(false);
      return;
    }

    try {
      await loginWithEmail(email, password);
      toast.success("Login realizado com sucesso!")
      navigate('/')
      
    } catch (error) {
      let errorMessage = '';
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Email inválido. Por favor, verifique o endereço de email.';
          setFormErrors(prev => ({ ...prev, email: errorMessage }));
          break;
        case 'auth/user-disabled':
          errorMessage = 'Este usuário foi desativado.';
          setFormErrors(prev => ({ ...prev, general: errorMessage }));
          break;
        case 'auth/user-not-found':
          errorMessage = 'Usuário não encontrado. Verifique o email ou cadastre-se.';
          setFormErrors(prev => ({ ...prev, general: errorMessage }));
          break;
        case 'auth/wrong-password':
          errorMessage = 'Senha incorreta. Por favor, tente novamente.';
          setFormErrors(prev => ({ ...prev, password: errorMessage }));
          break;
        case 'auth/invalid-credential':
          errorMessage = 'Credenciais inválidas. Por favor, verifique os dados inseridos.';
          setFormErrors(prev => ({ ...prev, general: errorMessage }));
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Muitas tentativas de login. Tente novamente em alguns minutos.'
          setFormErrors(prev => ({ ...prev, general: errorMessage }));
          break
        default:
          errorMessage = 'Erro de login: ' + error.message;
          setFormErrors(prev => ({ ...prev, general: errorMessage }));
      }
    } finally {
      setLoading(false);
    }
  };


  const handleGoogleLogin = async () => {
    setFormErrors({ email: '', password: '', general: '' });
    setLoading(true);

    try {
      await loginWithGoogle();
      toast.success("Login com Google realizado! 🚀")
      navigate('/')
    } catch (error) {
      let errorMessage = '';
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          errorMessage = 'A janela do Google foi fechada antes da autenticação.';
          setFormErrors(prev => ({ ...prev, general: errorMessage }));
          break;
        case 'auth/cancelled-popup-request':
          errorMessage = 'Já há uma solicitação de login em andamento.';
          setFormErrors(prev => ({ ...prev, general: errorMessage }));
          break;
        case 'auth/account-exists-with-different-credential':
          errorMessage = 'Já existe uma conta com este email, mas usando outro método de login.';
          setFormErrors(prev => ({ ...prev, general: errorMessage }));
          break;
        default:
          errorMessage = 'Erro ao fazer login com Google: ' + error.message;
          setFormErrors(prev => ({ ...prev, general: errorMessage }));
      }

    } finally {
      setLoading(false);
    }
  };


  function handleValidateEmail() {
    setFormErrors(prev => ({ ...prev, email: validateEmail(email) ? '' : 'Informe um email válido.' }));
  }

  function handleValidatePassword() {
    setFormErrors(prev => ({ ...prev, password: validatePassword(password) ? '' : 'A senha deve ter pelo menos 6 caracteres.' }))
  }


  return (
    <LoginContainer>
      <h2>Entrar</h2>
      <LoginMessage $error style={{
        visibility: formErrors.general ? 'visible' : 'hidden',
        opacity: formErrors.general ? 1 : 0,
        height: '2rem',
        transition: 'opacity 0.3s ease, visibility 0s linear 0.3s; e'
      }}>
        {formErrors.general || 'placeholder'}
      </LoginMessage>

      <LoginForm onSubmit={handleLogin}>
        <LoginInputWrapper>
          <LoginInput
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleValidateEmail}
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
            onBlur={handleValidatePassword}
            $hasError={!!formErrors.password}
          />
          <InputLabel $hasError={!!formErrors.password}>Senha</InputLabel>
          {formErrors.password && <ErrorText>{formErrors.password}</ErrorText>}
        </LoginInputWrapper>

        <LoginButton type="submit" disabled={loading}>
          {loading
            ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Oval visible={true}
                height="25"
                width="25"
                color="#fff"
                ariaLabel="oval-loading"
              />
            </div>
            : 'Entrar'}
        </LoginButton>
        <LoginButtonGoogle type="button" onClick={handleGoogleLogin} disabled={loading}>
          <img src={googleIcon} alt="ícone do google" style={{ width: '20px' }} />
          Entrar com Google
        </LoginButtonGoogle>
      </LoginForm>

      <LoginRedirect>
        Não tem uma conta? <span onClick={() => navigate("/signup")}>Cadastre-se</span>
      </LoginRedirect>
    </LoginContainer>

  );
}
