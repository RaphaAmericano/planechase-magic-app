import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { rollDice } from '../../../store/dice/diceSlice';

const Button = styled.button`
    background:black;
    color:white;
    border:none;
    margin:auto 0;
    font-size:1.5em;
    margin-top:1em;
    width:200px;
    cursor: pointer;
`;

export default function RollButton(){
    const dispatch = useDispatch();
    return <Button onClick={() => dispatch(rollDice())}>Rolar o dado</Button>
}