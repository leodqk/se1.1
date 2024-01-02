import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBar: {
    open: false,
    type: "CONTACT",
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSideBar(state, action) {
      state.sideBar.open = !state.sideBar.open;
    },
    updateSideBarType(state, action) {
      state.sideBar.type = action.payload.type;
    },
  },
});

export default slice.reducer;

export function ToggleSideBar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toggleSideBar());
  };
}

export function UpdateSideBarType(type) {
  return async (dispatch, getState) => {
    dispatch(
      slice.actions.updateSideBarType({
        type,
      })
    );
  };
}
