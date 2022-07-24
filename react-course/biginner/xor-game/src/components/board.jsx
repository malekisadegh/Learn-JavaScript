import Square from "./square"
import { React, useState, useContext, useRef } from "react";
import { gameContext } from "../factories/gameContext"

const Board = (props) => {

    const [squares, setSquares] = useState([...Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(false);
    const winner = useContext(gameContext)
    const InputRef = useRef();

    const status = 'Next player: X';
    //const squares = [...Array(9).fill(null)];

    const handleChangeSqStatus = (v, i) => {
        if (winner) {
            alert('Game is ower');
            return
        };
        const _squares = squares.slice();
        if (!_squares[i]) {
            _squares[i] = xIsNext ? 'X' : 'O';
        }
        setSquares(_squares)
        setXIsNext(!xIsNext)
        props.calculateWinner(_squares);
        InputRef.current.value = 'the next is ' + (xIsNext ? 'X' : 'O')
    }

    return (
        <>
            <input ref={InputRef}></input>
            {
                !winner &&
                <p>The next player is <strong className="text-warning">{xIsNext ? 'X' : 'O'}</strong></p>
            }

            <div className="board-game">
                {
                    squares.map(

                        (o, i) => <Square key={i} number={i} value={squares[i]} handleChangeSqStatus={handleChangeSqStatus} />

                    )
                }

            </div>
        </>
    )
}

export default Board;