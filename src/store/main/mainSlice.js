import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    main:[]
}

export const mainSlice = createSlice({
    name: 'planes'
})

export const selectAllData = state => state.main;