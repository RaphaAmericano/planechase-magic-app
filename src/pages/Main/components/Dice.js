// import './Dice.scss';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectDiceSide } from '../../../store/dice/diceSlice';


const Scene = styled.div`
    width: 200px;
    height: 200px;
    margin: 20px;
    perspective:600px;
`

const Cube = styled.div`
    width:200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    transition: transform 1s;
    ${({ side }) => {
        switch(side){
            case 1:
                return `transform: translateZ(-100px) rotateY(   0deg);`;
            case 2:
                return `transform: translateZ(-100px) rotateY(-180deg);`;
            case 3:
                return `transform: translateZ(-100px) rotateY( -90deg);`;
            case 4:
                return `transform: translateZ(-100px) rotateY(  90deg);`;
            case 5:
                return `transform: translateZ(-100px) rotateX( -90deg);`;
            case 6:
                return `transform: translateZ(-100px) rotateX(  90deg);`;
            default:
                
        }
    }}
`
const CubeFace = styled.div`
    ${({ face }) => {
        switch(face){
            case 1:
                return `transform: rotateY(0deg) translateZ(100px);`;
            case 2:
                return `transform: rotateY(180deg) translateZ(100px);`;
            case 3:
                return `transform: rotateY( 90deg) translateZ(100px);`;
            case 4:
                return `transform: rotateY(-90deg) translateZ(100px);`;
            case 5:
                return `transform: rotateX( 90deg) translateZ(100px);`;
            case 6:
                return `transform: rotateX(-90deg) translateZ(100px);`;
            default:
                return ``;
        }
    }}
    font-family: Beleren Bold;
    position: absolute;
    width: 200px;
    height: 200px;
    border: 4px solid #000;
    line-height: 200px;
    font-size: 40px;
    font-weight: bold;
    color: #000;
    text-align: center;
    background-color: red;
    i {
        color: #000;
    }
`

export default function Dice(){
    const side = useSelector(selectDiceSide);

    return <Scene>
        <Cube side={side}>
            <CubeFace face={1}><i className="ms ms-chaos ms-cost ms-shadow"></i></CubeFace>
            <CubeFace face={2}>2</CubeFace>
            <CubeFace face={3}>3</CubeFace>
            <CubeFace face={4}><i className="ms ms-planeswalker ms-cost ms-shadow"></i></CubeFace>
            <CubeFace face={5}>5</CubeFace>
            <CubeFace face={6}>6</CubeFace>
        </Cube>
    </Scene>
}