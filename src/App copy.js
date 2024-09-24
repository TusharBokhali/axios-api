
import React, { useState } from 'react';
import './App.css';

function App() {
  const [realArray, setArray] = useState(Array(9).fill('')); 
  const [emptys, setEmpty] = useState(0); 
  const numArrays = [1, 2, 3, 4, 5, 6, 7, 8];
  const [subname, setSubname] = useState('Start');

  

 function starting() {
    let copy = Array(9).fill(''); 
    let rand = () => Math.floor(Math.random() * 9); 
    let i = 0;

  console.log(i);
  
    while (i < numArrays.length) {
      let index = rand();
      if (copy[index] === '') {
        copy[index] = numArrays[i++];
      }
    }

    setSubname('Reset');
    setEmpty(copy.indexOf('')); 
    setArray(copy); 
  }


  function control(index) {
    if(subname === 'Start'){
      alert("Click The Start Button!!");
      return
    }
    let checkPos = [emptys - 1, emptys + 1 ,emptys + 3 , emptys-3];
    if(checkPos.includes(index)){
      let dub = [...realArray]
      dub[emptys] = dub[index]
      dub[index]= "";
      setArray(dub);
      setEmpty(index);
    }
    
  }
  let data =  realArray.toString()
   let win = '1,2,3,4,5,6,7,8';
   
    if(data.includes(win)){
      alert("Winners!!");
    }
  return (
    <div className="container">
      <div className="Game-Ui">
        <div className="Design">
          {realArray.map((el, index) => (
            <button key={index} onClick={() => control(index)}>
              {el}
            </button>
          ))}
        </div>
        <div>
          <h1 onClick={starting}>{subname}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
