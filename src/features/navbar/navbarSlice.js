import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    isOpen: true,
    isPreviewWindowOpen: false,
  },
  reducers: {
    toggleNavbar: (state) => {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    },
    openNavbar: (state) => {
      return {
        ...state,
        isOpen: true,
      };
    },
    closeNavbar: (state) => {
      return {
        ...state,
        isOpen: false,
      };
    },
    togglePreviewWindow: (state) => {
      return {
        ...state,
        isPreviewWindowOpen: true,
      };
    },
  },
  extraReducers: {},
});

export const { toggleNavbar, togglePreviewWindow, openNavbar, closeNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
