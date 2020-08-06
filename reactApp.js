class Team extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      shots: 0,
      score: 0
    }
  }

  shotHandler =() => {
    let score = this.state.score

    if(Math.random() > 0.5) {
      score += 1
    }

    this.setState((state, props) =>({
      shots: state.shots + 1,
      score
    }))
  }
  
  render() {
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

        <button onClick={this.shotHandler}>Shoot!</button>
      </div>
    )
  }
}

function App (props) {
  return (
    <div className="App">
      <div className="stats">
      <Team 
        name="Russiaville Raccoons" 
        logo="./assets/image/raccoon2.png"
      />

      <div className="verses">
        <h1>VS</h1>
      </div>

      <Team
        name="Brownsville Huskies" 
        logo="./assets/image/huskydab2.png"
        />
      </div>
    </div>
  )
}






// An App component under which all other components will be added

  
  
  
  // Render the App
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

