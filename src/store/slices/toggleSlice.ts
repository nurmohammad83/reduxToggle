import { createSlice } from "@reduxjs/toolkit";

export interface ToggleState {
  value: boolean;
}

const initialState: ToggleState = {
  value: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    themToggled: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { themToggled } = toggleSlice.actions;

export default toggleSlice.reducer;
