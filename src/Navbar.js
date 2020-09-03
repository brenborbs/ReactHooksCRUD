import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse", // pass to styles className
    links: [
      {
        id: 1,
        path: "/",
        text: "home"
      },
      {
        id: 2,
        path: "/recordList",
        text: "RecordList"
      },
      {
        id: 3,
        path: "/hooksMovie",
        text: "HooksMovie"
      },
      { id: 4, path: "/players", text: "PlayersFilter" }
    ]
  };
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({
          navbarOpen: false,
          css: "collapse navbar-collapse"
        })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show"
        });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <Link to="/" className="navbar-brand">
          Brand Here
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          {/* <span className="navbar-toggler-icon" /> */}
          <i className="fas fa-bars" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize ">
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* cannot be seen in smaller screens */}
        <div className="navbar-icons d-none d-lg-flex">
          <div className="navbar-icon mx-2">
            <button className="btn btn-outline-warning">Sign in</button>
          </div>
          <div className="navbar-icon mx-2">
            <button className="btn btn-success">Register</button>
          </div>
        </div>
      </nav>
    );
  }
}
