import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
  isVisible: boolean;
  children: React.ReactNode;
  [x: string]: any;
};
const initialState: ModalState = {
  isVisible: false,
  children: null,
};

export const ModalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    openModal: (state, action: { payload: React.ReactNode }) => {
      state.isVisible = true;
      state.children = action.payload;
    },
    closeModal: (state) => {
      state.isVisible = false;
      state.children = null;
      console.log(state);
    },
  },
});

export const { openModal, closeModal } = ModalSlice.actions;
export default ModalSlice.reducer;
