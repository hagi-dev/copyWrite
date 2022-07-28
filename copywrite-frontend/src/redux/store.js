import { configureStore } from "@reduxjs/toolkit";

import textReducer from "./slice"

const store = configureStore({
    reducer:{
        text: textReducer,
    }
});

export default store;