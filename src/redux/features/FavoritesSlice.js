import {createSlice} from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    show: false,
    favorites: [],
  },
  reducers: {
    setFavorite(state, action) {
      let pageNo = action.payload;
      if (state.favorites.length) {
        let ind = state.favorites.indexOf(pageNo);
        if (ind > -1) {
          state.favorites.splice(ind, 1);
        } else {
          state.favorites.push(pageNo);
        }
      } else {
        state.favorites.push(pageNo);
      }
    },
    removeFavorite(state, action) {
      let pageNo = action.payload;
      let index = state.favorites.indexOf(pageNo);

      state.favorites.splice(index, 1);
    },

    showFavoriteModal(state, action) {
      state.show = true;
    },

    hideFavoriteModal(state, action) {
      state.show = false;
    },
  },
});
export const {
  setFavorite,
  removeFavorite,
  showFavoriteModal,
  hideFavoriteModal,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
