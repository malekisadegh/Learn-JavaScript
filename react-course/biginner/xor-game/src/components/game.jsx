import { useState, createContext } from "react";
import {gameContext} from "../factories/gameContext"
import Board from "./board";

const Game = () => {
    const [winner, setWinner] = useState(null);
    
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinner(squares[a]);
                break;
            }
        }
    }

    return (
        <>
            <gameContext.Provider value={winner}>
                <h4>XOR game</h4>
                <div className="game">
                    <div className="game-board">
                        {/* <Board calculateWinner={calculateWinner} winner={winner} /> */}
                        <Board calculateWinner={calculateWinner} />
                    </div>
                    {
                        winner &&
                        <div className="game-info">
                            <div>the winner of game is
                                <strong className="text-danger"> {winner}</strong>
                            </div>
                        </div>
                    }

                </div>
            </gameContext.Provider>
        </>
    )

}

export default Game;