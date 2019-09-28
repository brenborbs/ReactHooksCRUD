import React, { Component } from "react";

export default class Player extends Component {
  state = {
    players: [
      { name: "Mark Teer Stegen" },
      { name: "Nelson Semedo" },
      { name: "Gerrard Pique" },
      { name: "Ivan Rakitic" },
      { name: "Sergio Busquets" },
      { name: "Denis Suarez" },
      { name: "Coutinho" },
      { name: "Luis Suarez" },
      { name: "Lionel Messi" },
      { name: "Dembele" },
      { name: "Malcom" }
    ],
    player: ""
  };
  onChangeHandler = e => {
    this.setState({
      player: e.target.value
    });
    // console.log(this.state.player);
  };

  renderList = () => {
    return this.state.players
      .filter(player =>
        player.name.toLowerCase().includes(this.state.player.toLowerCase())
      )
      .map(searchedPlayers => {
        return (
          <tr key={searchedPlayers.name}>
            <td>{searchedPlayers.name}</td>
          </tr>
        );
      });
  };

  render() {
    const { player } = this.state;
    return (
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <div className="col-sm-6 table-col table-responsive">
            <input
              className="form-control"
              type="text"
              value={player}
              onChange={this.onChangeHandler}
              style={{ marginBottom: "20px" }}
              placeholder="Enter player name here..."
            />
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="text-center">Soccer Players</th>
                </tr>
              </thead>
              <tbody>{this.renderList()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
