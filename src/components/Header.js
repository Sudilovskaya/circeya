function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width={119} src="/img/logo.svg" alt="logo"/>
        </div>
        <div className="header__phone">
          <a href="tel:+74954954954">
            <img src="/img/phone-icon.png" className="header__phone-icon" alt="logo"/>
            <span className="header__phone-number">+7 (495) 495-49-54</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
