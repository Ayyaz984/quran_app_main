import {createSlice} from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState: {
    show: false,
    bookmarks: [],
  },
  reducers: {
    setBookmark(state, action) {
      let pageNo = action.payload;
      if (state.bookmarks.length) {
        let ind = state.bookmarks.indexOf(pageNo);
        if (ind > -1) {
          state.bookmarks.splice(ind, 1);
        } else {
          state.bookmarks.push(pageNo);
        }
      } else {
        state.bookmarks.push(pageNo);
      }
    },
    removeBookmark(state, action) {
      let pageNo = action.payload;
      let index = state.bookmarks.indexOf(pageNo);

      state.bookmarks.splice(index, 1);
    },

    showBookmarkModal(state, action) {
      state.show = true;
    },

    hideBookmarkModal(state, action) {
      state.show = false;
    },
  },
});
export const {
  setBookmark,
  removeBookmark,
  showBookmarkModal,
  hideBookmarkModal,
} = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
