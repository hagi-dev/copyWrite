import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  response: [],
  error: "",
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
  },
});

const { addText, error } = textSlice.actions;

export const getReponse = (text) =>{
  console.log("se llama ", text);
    return async (dispatch) => {
        await axios.get(`http://localhost:3001/iecho?text=${text}`)
        .then(response => {
          let textRes= response.data.text;
          let palindrome = response.data.palindrome;
          dispatch(error(""));
          dispatch(addText(`Palindrome: ${palindrome}  ---  Text: ${textRes} `));
        })
        .catch(response=> {
          console.log("este es el error",response.response.data.error);
          dispatch(error(response.response.data.error));
        });
    }
}

export default textSlice.reducer;