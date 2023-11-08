import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Login(){
    return(
        <div class="login-container">
            <div class="form-container">
                <h2><FontAwesomeIcon icon="fa-solid fa-coffee" size="lg" />
                    Giriş Yap</h2>
                <form method="post">
                    <input type="text" name="kullanici_adi" placeholder="Kullanıcı Adı" required/>
                    <input type="password" name="sifre" placeholder="Şifre" required/>
                    <button type="submit">Giriş Yap</button>
                </form>
            </div>
        </div>
    )
}
export default Login;