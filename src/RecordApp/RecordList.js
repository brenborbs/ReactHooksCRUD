import React, { Component } from "react";
import RecordForm from "./NewRecordForm";
import RecordData from "./RecordData";
import "./record-list.css";

// const movies = [
//   {
//     title: "Transformers 2",
//     director: "Micheal Bay"
//   },
//   {
//     title: "Predator",
//     director: "Steve Smith"
//   }
// ];

// localStorage.setItem("movies", JSON.stringify(movies));

class RecordList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
      // JSON.parse(localStorage.getItem("movies"))
    };
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  componentWillMount() {
    const movies = this.getMovies();
    this.setState({ movies });
  }

  getMovies() {
    return this.state.movies;
  }
  // onAdd(title, director) {
  //   const movies = this.getMovies();

  //   movies.push({
  //     title,
  //     director
  //   });
  //   this.setState({ movies });
  // }
  onAdd(newMovie) {
    this.setState({
      movies: [...this.state.movies, newMovie]
    });
  }
  onDelete(title) {
    const movies = this.getMovies();
    const filteredMovies = movies.filter(movie => {
      return movie.title !== title;
    });
    this.setState({ movies: filteredMovies });
  }
  onEditSubmit(title, director) {
    let movies = this.getMovies();
    movies = movies.map(movie => {
      if (movie.title === title) {
        movie.title = title;
        movie.director = director;
      }
      return movie;
    });
    console.log(movies);

    this.setState({ movies });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Input</h5>
                <RecordForm onAdd={this.onAdd} />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Table Record</h5>
                <div className="container">
                  <div className="row">
                    <div className="col">Title</div>
                    <div className="col">Director</div>
                  </div>
                  <hr />
                  {this.state.movies.map(movie => {
                    return (
                      <RecordData
                        key={movie.title}
                        title={movie.title}
                        director={movie.director}
                        onDelete={this.onDelete}
                        onEditSubmit={this.onEditSubmit}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecordList;
