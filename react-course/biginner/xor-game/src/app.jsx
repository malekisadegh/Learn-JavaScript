import React from 'react';
import './styles/index.css';
import Game from './components/game'

function App() {

    const text = 'Board Game';

    return (
        <div className="App">
            <h1> {text} </h1>
            <Game></Game>
        </div>
    );
}

export default App;