import React, { Component } from "react";


export default class App extends Component {
  state = {
    Movie: ["SpoiderMon"],
  };

  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };

  addNewItem = () => {
    let { Movie, input } = this.state;
    Movie.push(input);
    this.setState({Movie: Movie});
  };

  render() {
    return (
      <div>
        <input 
          type="text"
          onChange={this.saveInput}
        />
        <button onClick={this.addNewItem}> Add Item </button>
        <ol>
          {this.state.Movie.map((subItems, Index ) => {
            return <li key={Index}> {subItems}</li>
          })}
        </ol>
      </div>
    );
  }
}