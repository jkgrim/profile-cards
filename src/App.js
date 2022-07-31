import "./App.css";
import ProfileCards from "./ProfileCards";

function App() {
  const cards = [
    {
      name: "card-1",
      description: "card-1 description",
    },
    {
      name: "card-2",
      description: "card-2 description",
    },
    {
      name: "card-3",
      description: "card-3 description",
    },
    {
      name: "card-4",
      description: "card-4 description",
    },
    {
      name: "card-5",
      description: "card-5 description",
    },
    {
      name: "card-6",
      description: "card-6 description",
    },
    {
      name: "card-7",
      description: "card-7 description",
    },
    {
      name: "card-8",
      description: "card-8 description",
    },
    {
      name: "card-9",
      description: "card-9 description",
    },
    {
      name: "card-10",
      description: "card-10 description",
    },
  ];

  return (
    <div className="App">
      <div className="navbar-container">
        <div className="logo">Profile Cards</div>

        <div className="nav-links-wrapper">
          <a className="nav-button" href="#">
            Nav button
          </a>
          <a className="nav-button" href="#">
            Nav button
          </a>
          <a className="nav-button" href="#">
            Nav button
          </a>
          <a className="nav-button" href="#">
            Nav button
          </a>
        </div>

        <div className="username">User Name</div>
      </div>

      <div className="card-root">
        {cards.map((card) => {
          return (
            <ProfileCards
              name={card.name}
              description={card.description}
              footer={card.footer}
            />
          );
        })}
      </div>

      <div className="footer-container">
        <div className="footer-nav-wrapper">
          <a className="nav-button" href="#">
            Nav button
          </a>
          <a className="nav-button" href="#">
            Nav button
          </a>
          <a className="nav-button" href="#">
            Nav button
          </a>
          <a className="nav-button" href="#">
            Nav button
          </a>
        </div>

        <div className="copyright-info">
          &copy; 2022 Grimshaw. &copy;1996 - 2022 <br />A Display/Flexbox
          inc./Align Items inc. TM,
          <br /> &reg; Grimshaw.
        </div>
      </div>
    </div>
  );
}

export default App;
