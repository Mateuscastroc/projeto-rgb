import './App.css';
import {useState} from "react";
import Panel from './Components/Panel/Panel'

function App() {
  const [red, setStateRed] = useState (0);
  const [green, setStateGreen] = useState (0);
  const [blue, setStateBlue] = useState (0);
  return (
    <>
      <div className="App">
        <h1 style={{"margin": "0px","background-color": "blue", "color": "white"}}>Projeto RGB | Exercicio React</h1>
      </div>
      <div style={{"display": "flex", 
      "flex-direction": "column",
      "position": "relative",
      "max-width": "300px",
      "margin-left": "10%"}}>
        <Panel backGroundColor={{red: red, green: green, blue: blue}}></Panel>
        <strong>Red: </strong>{red}
          <input value={red} onChange={({target})=> setStateRed(parseInt(target.value))} type="range" min={0} max={255}></input>
        <strong>Green: </strong>{green}
          <input value={green} onChange={(target) => setStateGreen(parseInt(target.target.value))} type="range" min={0} max={255}></input>
        <strong>Blue:</strong>{blue}
          <input value={blue} onChange={({target})=>setStateBlue(parseInt(target.value))} type="range" min={0} max={255}></input>
      </div>
    </>
  );
}

export default App;
