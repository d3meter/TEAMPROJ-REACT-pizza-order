import headerImg from './../img_pub/italy.png';
import './Header.css';
import headerLogo from './../img_pub/team_logo.png'

function Header() {
  return(
    <div className="Header">
      <img src={headerImg} className="header-img" alt="header_imgo" />
      <img src={headerLogo} className="header-logo" alt="header_logo" />
    </div>
  );
}

export default Header;