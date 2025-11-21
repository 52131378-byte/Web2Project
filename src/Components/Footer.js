import'..Assets/Footer.css';
import {FaInstagram , FaFacebbok , FaWhatsapp} from 'react-icons/fa'
export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                <p>© 2025 SmileBar. All right reserved </p>
                <div className="social-icons">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                    </a>
                     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                     <FaFacebbok/>
                     </a>
                      <a href="https://www.wa.me/1234567890.com" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp/>
                      </a>
                </div>
            </div>
        </footer>
    )
}