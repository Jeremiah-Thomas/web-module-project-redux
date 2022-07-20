import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeFavorite } from "../actions/favoritesActions";

const FavoriteMovieList = (props) => {
  const favorites = props.favorites;

  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <Link
              className="btn btn-light savedButton"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span
                onClick={() => {
                  props.removeFavorite(movie.id);
                }}
              >
                <span className="material-icons">remove_circle</span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (stateFromStore) => {
  return {
    favorites: stateFromStore.favoritesReducer.favorites,
  };
};

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);
