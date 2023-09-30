// Write your code here.
const element = (
  <div className="container">
    <h1 className="heading"> Congratulation </h1>
    <div className="inside-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="inside-heading">Kiran V </h1>
      <p className="paragraph">
        {" "}
        Vishnu institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
