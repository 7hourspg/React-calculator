import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [arr, setArr] = useState([]);
  const [arr2, setArr2] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [operator, setOperator] = useState();
  const [data, setData] = useState(null);
  const [value1, setvalue1] = useState();
  const [value2, setvalue2] = useState();

  const handleString = (num) => {
    return isTrue ? setArr2([...arr2, num]) : setArr([...arr, num]);
  };

  useEffect(() => {
    setvalue1(
      Math.floor(arr.reduce((partialSum, a) => partialSum + a, arr ? "" : "0"))
    );
    setvalue2(
      Math.floor(
        arr2.reduce((partialSum, a) => partialSum + a, arr2 ? "" : "0")
      )
    );
  }, [arr2, data]);

  useEffect(() => {
    if (operator === 1 && 2 && 3 && 4) {
      setIsTrue(true);
    }
  }, [operator]);

  // logic for Enter Button

  const handleEnter = () => {
    if (operator === 1) {
      function add() {
        if (data === null) {
          return setData(value1 + value2), setArr([]), setArr2([]);
        } else {
          return setData(data + value2), setArr2([]);
        }
      }
      add();
    }
    if (operator === 2) {
      function Minus() {
        if (data === null) {
          return setData(value1 - value2), setArr([]), setArr2([]);
        } else {
          return setData(data - value2), setArr2([]);
        }
      }
      Minus();
    }
    if (operator === 3) {
      function Divide() {
        if (data === null) {
          return setData(value1 / value2), setArr([]), setArr2([]);
        } else {
          return setData(data / value2), setArr2([]);
        }
      }
      Divide();
    }
    if (operator === 4) {
      function Multiply() {
        if (data === null) {
          return setData(value1 * value2), setArr([]), setArr2([]);
        } else {
          return setData(data * value2), setArr2([]);
        }
      }
      Multiply();
    }
  };

  return (
    <>
      <div className="container">
        <h1>React Calculator</h1>
        {data}

        <div className="box1">
          <button onClick={() => handleString("1")}>1</button>
          <button onClick={() => handleString("2")}>2</button>
          <button onClick={() => handleString("3")}>3</button>
          <button onClick={() => handleString("4")}>4</button>
          <button onClick={() => handleString("5")}>5</button>
        </div>
        <div className="box1">
          <button onClick={() => handleString("6")}>6</button>
          <button onClick={() => handleString("7")}>7</button>
          <button onClick={() => handleString("8")}>8</button>
          <button onClick={() => handleString("9")}>9</button>
          <button onClick={() => handleString("0")}>0</button>
        </div>
        <div className="box3">
          <button onClick={() => setOperator(1)}>+</button>
          <button onClick={() => setOperator(2)}>-</button>
          <button onClick={() => setOperator(3)}>/</button>
          <button onClick={() => setOperator(4)}>*</button>
          <button onClick={() => handleEnter()}>Enter</button>
        </div>
        <div className="box3">
          <button onClick={() => setData(0)}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
