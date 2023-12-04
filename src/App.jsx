import { useEffect, useState } from "react";

function App() {
  const [ diceValue, setDiceValue ] = useState([1, 1]);
  const [ show, setShow ] = useState(false);
  const images = ["./assets/images/dice-01.svg", "./assets/images/dice-02.svg", "./assets/images/dice-03.svg", "./assets/images/dice-04.svg", "./assets/images/dice-05.svg", "./assets/images/dice-06.svg"];
  
  const buttonHandler = () => {
    const dice = document.querySelectorAll("img");
    dice.forEach( die => die.classList.add("shake"));    
    
    setTimeout(()=>{      
      dice.forEach(die => die.classList.remove("shake"));

      const diceOneValue = Math.floor(Math.random() * 6) + 1;
      const diceTwoValue = Math.floor(Math.random() * 6) + 1;

      let newSetDiceValue = [ diceOneValue, diceTwoValue ];      
      setDiceValue(newSetDiceValue);
      
      setShow(true);    
    }, 1000)    
  }
  
  useEffect(() => {
    buttonHandler()
  }, [])

  return (
    <>
      <div className="container">
        <h2 className="title">Roll the Dice</h2>
        <p className="sub-title">Click the button and observe the background color! 😊 </p>
        
        <div className="dice-wrapper">
          <div>
            <img src={images[diceValue[0] - 1]} alt="dice image" />
          </div>
          <div>
            <img src={images[diceValue[1] - 1]} alt="dice image" />
          </div>
        </div>
        {
          show && 
          <p className="result">Your roll is: {diceValue[0] + diceValue[1]}</p>
        }

        <button onClick={buttonHandler}>Roll the Dice</button>
      </div>
    </>
  )
}

export default App;
