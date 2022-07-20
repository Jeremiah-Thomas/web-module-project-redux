import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      console.log(state);
      return { ...state, displayFavorites: !state.displayFavorites };

    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((movie) => {
          return movie.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
