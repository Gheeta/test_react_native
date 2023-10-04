import {createSlice} from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    previews: [],
  },
  reducers: {
    setPreviews: (state, action) => {
      state.previews = action.payload;
    },
  },
});

export const {setPreviews} = settingsSlice.actions;

export default settingsSlice.reducer;
