import React from "react";
import ReactDOM from "react-dom";

class Shades extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      greys: ['one', 'two'],
      visibility: false
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    })
  }
  render() {
    return (
      <div>
          <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'THEY SAY': 'Go back'}
          </button>
          {this.state.visibility && <Boxes />}
          {!this.state.visibility && (
          <div>
            {this.state.greys.map((grey) => <p key={grey}>{grey}</p>)}
          </div>
          )}
      </div>
    );
  }
}

class Boxes extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row" id="two-divs-screen">
            <div className="black s6 ml-auto mr-auto">
              <p id="left">LIFE IS NOT</p>
            </div>
            <div className="white s6 ml-auto mr-auto">
              <p id="right">BLACK</p>
              <p className="and">&</p>
              <p className="wht">WHITE</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Shades />, document.getElementById('root'));