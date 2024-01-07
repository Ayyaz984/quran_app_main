import {createSlice} from '@reduxjs/toolkit';

const HeaderSlice = createSlice({
  name: 'header',
  initialState: {show: false},
  reducers: {
    toggleHeader(state, action) {
      state.show = !state.show;
    },
  },
});

export const {toggleHeader} = HeaderSlice.actions;
export default HeaderSlice.reducer;
