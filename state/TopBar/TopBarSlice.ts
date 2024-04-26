import { createSlice } from "@reduxjs/toolkit";

type TopBarState = {
  open: boolean;
};

const initialState: TopBarState = {
  open: false,
};


export const TopBarSlice = createSlice({
  name: 'TopBar',
  initialState,
  reducers: {
    toggleTopBar: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleTopBar } = TopBarSlice.actions;
export default TopBarSlice.reducer;