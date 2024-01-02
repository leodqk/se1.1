import { createSlice } from "@reduxjs/toolkit";

import axios from "../../utils/axios";

const initialState = {
  isLoggedin: false,
  token: "",
  isLoading: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLoggedin = action.payload.isLoggedin;
      state.token = action.payload.token;
    },
    signOut(state, action) {
      state.isLoggedin = false;
      state.token = "";
    },
  },
});

export default slice.reducer;

export function LoginUser(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/login",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);

        dispatch(
          slice.actions.logIn({
            isLoggedin: true,
            token: response.data.token,
          })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export function LogoutUser() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.signOut());
  };
}

export function ForgotPassword(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/forgot-password",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function NewPassword(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "auth/reset-password",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(
          slice.actions.logIn({
            isLoggedin: true,
            token: response.data.token,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
}