import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Main.scss';

import Dice from './components/Dice';
import RollButton from './components/RollButton';
import { selectPlanesDatabase, setDatabase } from '../../store/planes/planesSlice';

export function Main() {
    const dispatch = useDispatch();
    // const data = useSelector(selectPlanesDatabase);

    useEffect(() => {
        fetch("https://api.scryfall.com/cards/search?q=type%3Aplane")
            .then(res => res.json())
            .then(res => {

                dispatch(setDatabase(res.data));
            })
    },[])

    return <div className="main-container">
            <Dice />
            <RollButton />
            {/* {data.map((item, index) => <img key={index} src={item.image_uris.normal}/> )} */}
        </div>
    
}