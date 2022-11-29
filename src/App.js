import "./App.css";

import React, { Component } from "react";
export default class App extends Component {
  state = {
    fullName: "Ayman_Ghorbel",
    bio: "Welcame to My site web",
    imgSrc:
      "https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin-1.jpg",
    profession: "Full-Stack js Developer",
    isVisibole: true,
    counter: 0,
  };
  handleshow = () => this.setState({ isVisibole: !this.state.isVisibole });
  increment = () => this.setState({ counter: this.state.counter + 1 });
  componentDidMount() {
    setInterval(() => {
      this.increment();
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <h4>You stay online {this.state.counter} second</h4>
        <button onClick={this.handleshow}>
          {this.state.isVisibole ? "hide" : "show"}
        </button>
        {this.state.isVisibole && (
          <div>
            <h1>My name is {this.state.fullName}</h1>
            <h2>{this.state.bio}</h2>
            <img
              src={this.state.imgSrc}
              alt=""
              style={{
                marginLeft: "-50px",
                width: "200px",
                height: "200px",
                color: "purple",
                borderRadius: "10px",
              }}
            />
            <h2>I am a {this.state.profession}</h2>
          </div>
        )}
      </div>
    );
  }
}
