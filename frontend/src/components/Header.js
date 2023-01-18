import headerImg from "./../img_pub/italy.png";
import "./Header.css";
import headerLogo from "./../img_pub/team_logo.png";

function Header() {
  return (
    <div className="Header">
      <div className="header-img">
        <img src={headerImg} className="header-img-img" alt="header_img" />
      </div>
      <div className="header-logo">
        <img src={headerLogo} className="header-logo-img" alt="header_logo" />
      </div>
    </div>
  );
}

export default Header;
