import { configureStore } from "@reduxjs/toolkit";
import count from "./slice/countSlice";

export const store = configureStore({
    reducer: {
        count,
    },
})