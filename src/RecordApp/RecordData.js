import React, { Component } from "react";

export default class RecordData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      title: this.props.title,
      director: this.props.director
    };
    this.handleChange = this.handleChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete() {
    const { onDelete, title } = this.props;
    onDelete(title);
  }
  onEdit() {
    this.setState({ isEdit: true });
  }
  onEditSubmit(evt) {
    evt.preventDefault();
    this.props.onEditSubmit(this.props.title, this.props.director);
    this.setState({ isEdit: false });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  render() {
    const { title, director } = this.props;
    return (
      <div className="row">
        {this.state.isEdit ? (
          <form onSubmit={this.onEditSubmit}>
            <div className="form-group">
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
        ) : (
          <>
            <div className="col">{title}</div>
            <div className="col">{director}</div>
            <button onClick={this.onEdit}>Edit</button>
            <button onClick={this.onDelete}>Delete</button>
          </>
        )}
      </div>
    );
  }
}
