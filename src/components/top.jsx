const Top = () => {

  let menuClick = document.getElementById("manuclick");
  let cancel = document.getElementById("cancel");
  let btn = document.getElementById("btn");

  const handleClick = () => {
    menuClick.style.display = "flex";
    btn.style.display = "none";
    cancel.style.display = "inline";
  };

  const handleClickb = () => {
    menuClick.style.display = "none";
    btn.style.display = "inline";
    cancel.style.display = "none";
  };

  return (
    <div>
      <nav>
        <div>
          <h3>· our reels</h3>
          <a className="link" href="/">
            <h1>empathy</h1>
          </a>
          <div className="manu">
            <h3>Home</h3>
            <div className="btnn">
              <i
                className="fa-solid fa-bars"
                id="btn"
                onClick={handleClick}
              ></i>
              <i
                className="fas fa-times"
                id="cancel"
                onClick={handleClickb}
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Top;
