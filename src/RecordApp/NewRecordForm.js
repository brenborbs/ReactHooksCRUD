import React, { Component } from "react";

export default class NewRecordForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", director: "" };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(evt) {
    evt.preventDefault();
    this.props.onAdd({ ...this.state });
    this.setState({ title: "", director: "" });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="title">title</label>
          <input
            name="title"
            type="text"
            className="form-control"
            placeholder="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="director">director</label>
          <input
            name="director"
            type="text"
            className="form-control"
            placeholder="director"
            onChange={this.handleChange}
            value={this.state.director}
          />
        </div>

        <button className="" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
