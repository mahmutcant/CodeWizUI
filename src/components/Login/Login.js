import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useForm } from 'react-hook-form';
import { loginService } from '../../services/chat-service';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/actions';
function Login() {
    const { register: login, handleSubmit: handleSubmitLogin } = useForm();
    const navigate = useNavigate();
    
    const loginSubmit = (data) => {
            loginService(data)
            .then(data => {
                localStorage.setItem("token", data.token); navigate('/layout');
            }
            ).catch()
    };

    return (
        <div className="login-container">
            <div className="form-container">
                <h2>Giriş Yap</h2>
                <form method="post">
                    <input type="text" name="kullanici_adi" {...login('username', { required: true })} placeholder="Kullanıcı Adı" required />
                    <input type="password" name="sifre" {...login('password', { required: true })} placeholder="Şifre" required />
                    <button type="submit" onClick={handleSubmitLogin(loginSubmit)}>Giriş Yap</button>
                </form>
            </div>
        </div>
    )
}
export default Login;