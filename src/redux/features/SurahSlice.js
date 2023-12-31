import {createSlice} from '@reduxjs/toolkit';

const SurahSlice = createSlice({
  name: 'surah',
  initialState: {
    show: false,
  },
  reducers: {
    showSurahModal(state, action) {
      console.log('surah');
      state.show = true;
    },
    hideSurahModal(state, action) {
      state.show = false;
    },
  },
});

export const {showSurahModal, hideSurahModal} = SurahSlice.actions;
export default SurahSlice.reducer;
