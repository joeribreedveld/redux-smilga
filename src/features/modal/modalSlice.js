import { createSlice } from "@reduxjs/toolkit";

// Define a slice of state and reducers for the modal feature.
const initialState = {
  isOpen: false,
};

// Create a Redux slice that handles the state of the modal
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

// Export the actions and reducer
export const { openModal, closeModal } = modalSlice.actions;

// Export the reducer
export default modalSlice.reducer;
