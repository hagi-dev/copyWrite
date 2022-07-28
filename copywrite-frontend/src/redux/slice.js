import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  response: [],
  error: "",
  loader: false,
};

const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    addText(state, action) {
      return {
        ...state,
        response: [...state.response, action.payload],
      };
    },
    error(state, action) {
      return {
        ...state,
        error: action.payload,
      };
    },
    loaderChange(state, action) {
      return {
        ...state,
        loader: action.payload,
      };
    },
  },
});

export const { addText, error ,loaderChange} = textSlice.actions;

export const getReponse = (text) => {
  return async (dispatch) => {
    await axios
      .get(`https://guarded-sea-96841.herokuapp.com/iecho?text=${text}`)
      .then((response) => {
        let textRes = response.data.text;
        let palindrome = response.data.palindrome;
        dispatch(error(""));
        dispatch(loaderChange(false));
        dispatch(addText(`Palindrome: ${palindrome}  ---  Text: ${textRes} `));
      })
      .catch((response) => {
        dispatch(loaderChange(false));
        dispatch(error(response.response.data.error));
      });
  };
};

export default textSlice.reducer;
