import {createSlice} from '@reduxjs/toolkit';

const ChapterSlice = createSlice({
  name: 'chapter',
  initialState: {
    show: false,
  },
  reducers: {
    showChapterModal(state, action) {
      state.show = true;
    },
    hideChapterModal(state, action) {
      state.show = false;
    },
  },
});

export const {showChapterModal, hideChapterModal} = ChapterSlice.actions;
export default ChapterSlice.reducer;
