//Davey Struss contributed

class Team extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shots: 0,
      score: 0,
    };

    this.shotSound = new Audio("./assets/audio/dribble.wav");
    this.scoreSound = new Audio("./assets/audio/jackie-yea.wav");
  }

  shotHandler = () => {
    let score = this.state.score;
    this.shotSound.play();

    if (Math.random() > 0.5) {
      score += 1;

      setTimeout(() => {
        this.scoreSound.play();
      }, 2500);
    }

    this.setState((state, props) => ({
      shots: state.shots + 1,
      score,
    }));
  };

  render() {
    let shotPercentageDiv;

    if (this.state.shots) {
      const shotPercentage = Math.round(
        (this.state.score / this.state.shots) * 100
      );
      shotPercentageDiv = (
        <div>
          <strong>Shooting%: {shotPercentage}</strong>
        </div>
      );
    }
    return (
      <div className="Team">
        <h2>{this.props.name}</h2>

        <div className="identity">
          <img src={this.props.logo} alt={this.props.name} />
        </div>

        <div>
          <strong>Shots:</strong> {this.state.shots}
        </div>

        <div>
          <strong>Score:</strong> {this.state.score}
        </div>

        {shotPercentageDiv}

        <button onClick={this.shotHandler}>Shoot!</button>
      </div>
    );
  }
}

function Game(props) {
  return (
    <div className="Game">
      <h1>Welcome to {props.venue}</h1>
      <div className="stats">
        <Team
          name={props.visitingTeam.name}
          logo={props.visitingTeam.logoSrc}
        />

        <div className="verses">
          <h1>VS</h1>
        </div>

        <Team name={props.homeTeam.name} logo={props.homeTeam.logoSrc} />
      </div>
    </div>
  );
}

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: "./assets/image/raccoon2.png",
  };
  const huskies = {
    name: "Brownsville Huskies",
    logoSrc: "./assets/image/huskydab2.png",
  };
  const bunnies = {
    name: "Baltimore Bunnies",
    logoSrc: "./assets/image/bunny.png",
  };
  const bears = {
    name: "Gratiot Bears",
    logoSrc: "./assets/image/bear.png",
  };

  return (
    <div className="App">
      <Game
        venue="Madison Square Garden"
        homeTeam={huskies}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={bears} />
    </div>
  );
}

// An App component under which all other components will be added

// Render the App
ReactDOM.render(<App />, document.getElementById("root"));
