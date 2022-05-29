import React, {useState} from 'react';
import Figure from './components/Figure';
import WrongLetters from './components/wrongLetters';
import './App.css';


export default function Hangman() {
    
    
    const word = "HANGMAN";
    const alphabets = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const [gameOver, setGameOver] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [correctGuesses, setCorrectGuesses] = useState([]) 
    const [wrongLetters, setWrongLetters] = useState([])   

    const maskedWord = word.split('').map(letter => 
    correctGuesses.includes(letter) ? letter : "_").join(" ");

    return  <div>
            <p>{maskedWord}</p>
     
            <p>Select an alphabet</p>
            {alphabets
            .map((alphabet, index) => 
            <button key={index} onClick={() => {
                if (!maskedWord.includes("_") || wrongLetters.length === 6) {
                    <p> GAME OVER !!</p>
                } else
                {
                if (word.includes(alphabet)) {
                    if(!correctGuesses.includes(alphabet))
                    setCorrectGuesses([...correctGuesses, alphabet])
                }
                else{
                    if(!wrongLetters.includes(alphabet))
                    setWrongLetters([...wrongLetters, alphabet])
                }
            }
            }}>{alphabet}</button>)}
            {!maskedWord.includes("_") && <p>You won!</p>}
            {wrongLetters.length === 6 && <p>Sorry, you have lost</p>}
            

            <div className='game-container'>
                <Figure wrongLetters = {wrongLetters}/>
                <p>Wrong alphabets selected:{wrongLetters}</p>
            </div>
            </div>

            
}