function Card(props) {
  return (
    <div className="main__card">
      <div className="main__picture">
        <img src={ props.images } className="main__image"/>
      </div>
      <div className="main__text">
        <p className="main__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p className="main__subtitle">Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/><br/>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
  );
}

export default Card;
