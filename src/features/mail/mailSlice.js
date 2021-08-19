import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../api/Axios";

export const getMails = createAsyncThunk("mails/getMails", async () => {
  try {
    const response = await instance("/v3/58770279-0738-4578-a1cf-c56a193fce98");

    return response.data;
  } catch (error) {
    console.log("error occured", error);
  }
});

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    mails: [],
    currentMail: {},
    status: "idle",
  },

  reducers: {
    setCurrentMail: (state, action) => {
      return {
        ...state,
        currentMail: { ...action.payload },
      };
    },
  },
  extraReducers: {
    [getMails.pending]: (state, action) => {
      state.status = "loading";
    },
    [getMails.fulfilled]: (state, action) => {
      state.status = "success";
      state.mails = action.payload;
    },
    [getMails.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export const { setCurrentMail } = mailSlice.actions;
export default mailSlice.reducer;
