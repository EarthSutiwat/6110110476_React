import React from 'react';
import './App.css';
import WordCard from './WordCard';
import Attempt from './Attempt'

const word = "Hello";

function App() {
    
    return ( 
    <div>
            <h1 style={{textAlign: "center"}}> Choose Character to make a word (You can try 4 times)</h1>
            <WordCard  value={word}  />
            
            
    </div>
    );
}

export default App;