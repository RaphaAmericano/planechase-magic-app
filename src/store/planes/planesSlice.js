import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    database:[],
    activePlane: {},
    historicPlanes:[]
}

export const setActivePlaneThunk = createAsyncThunk(
    'planes/setActivePlane',
    (params, { dispatch }) => {
        console.log(params)
        // dispatch(setActivePlane(params))
        return params
    }
)

export const planesSlice = createSlice({
    name: 'planes',
    initialState,
    reducers: {
        setDatabase:(state, action) => {
            state.database = [...action.payload ]
        },
        setActivePlane:(state, action) => {
            state.activePlane = action.payload
        },
        setHistoricPlane:(state, action) => {
            state.historicPlanes = [...state.historicPlanes, action.payload]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setActivePlaneThunk.fulfilled, (state) => {
            console.log(state)
        })
    }
});

export const { setDatabase, setActivePlane, setHistoricPlane } = planesSlice.actions;

export const selectPlanesDatabase = state => state.planes.database;

export const selectActivePlane = state => state.planes.activePlane;

export default planesSlice.reducer;