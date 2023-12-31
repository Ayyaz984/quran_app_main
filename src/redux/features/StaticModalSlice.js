import {createSlice} from '@reduxjs/toolkit';

const StaticModalSlice = createSlice({
  name: 'staticModal',
  initialState: {
    aboutShow: false,
    instructionShow: false,
  },
  reducers: {
    showAboutModal(state, action) {
      (state.aboutShow = true), (state.instructionShow = false);
    },
    showInstructionModal(state, action) {
      (state.aboutShow = false), (state.instructionShow = true);
    },
    hideAboutModal(state, action) {
      state.aboutShow = false;
      state.instructionShow = false;
    },
    hideInstructionModal(state, action) {
      state.aboutShow = false;
      state.instructionShow = false;
    },
  },
});

export const {
  showAboutModal,
  showInstructionModal,
  hideAboutModal,
  hideInstructionModal,
} = StaticModalSlice.actions;
export default StaticModalSlice.reducer;
