import { createSlice } from "@reduxjs/toolkit";
import { getRandomNumber } from "../../services/numbers.service";
import { setActivePlane, setHistoricPlane } from "../planes/planesSlice";
const initialState = {
    side: 1
};

export const diceSlice = createSlice({
    name: 'dice',
    initialState,
    reducers:{
        setSide:(state, action) => {
            state.side = action.payload
        }
    } 
});
export const { setSide } = diceSlice.actions;

export const rollDice = () => (dispatch, getState) => {
    const { planes: { activePlane } } = getState();
    const random = getRandomNumber(1,7);
    dispatch(setSide(random));
    dispatch(setHistoricPlane(activePlane));
    dispatch(setActivePlane({number: random}));
}

export const selectDiceSide = (state) => state.dice.side;

export default diceSlice.reducer;