import { useState } from "react";

const data = [
  { id: "clear", text: "AC" },
  { id: "divide", text: "/" },
  { id: "multiply", text: "*" },
  { id: "seven", text: "7" },
  { id: "eight", text: "8" },
  { id: "nine", text: "9" },
  { id: "subtract", text: "-" },
  { id: "four", text: "4" },
  { id: "five", text: "5" },
  { id: "six", text: "6" },
  { id: "add", text: "+" },
  { id: "one", text: "1" },
  { id: "two", text: "2" },
  { id: "three", text: "3" },
  { id: "equals", text: "=" },
  { id: "zero", text: "0" },
  { id: "decimal", text: "." },
];

function ClickableButton({ id, innerText, style, handleClick }) {
  return (
    <div
      id={id}
      className="calcButton"
      style={style}
      onClick={(e) => handleClick(e.target.innerText)}
    >
      {innerText}
    </div>
  );
}

function App() {
  const [input, setInput] = useState("0");
  const [calculation, setCalculation] = useState("");

  function handleReset() {
    setInput("0");
    setCalculation("");
  }

  function handleEquals() {
    if (calculation.includes("=")) {
      return;
    }
    setCalculation((calculation) => calculation + "=" + eval(calculation));
    setInput(eval(calculation));
  }

  function handleClick(e) {
    if (calculation.includes("=")) {
      if (/\D/.test(e) && e !== ".") {
        setInput(e);
        setCalculation(input + e);
        return;
      } else {
        setInput(e);
        setCalculation(e);
        return;
      }
    }
    if (input === "0" && e === "0") return;
    if (input === "0" && e !== ".") {
      setInput(e);
      setCalculation(e);
      return;
    }
    if (
      /\D/.test(calculation[calculation.length - 2]) &&
      calculation[calculation.length - 2] !== "." &&
      input === "-" &&
      /\D/.test(e) &&
      e !== "."
    ) {
      setInput(e);
      setCalculation(
        (calculation) => calculation.substring(0, calculation.length - 2) + e
      );
      return;
    } else if (
      /\D/.test(e) &&
      e !== "." &&
      e !== "-" &&
      /\D/.test(input) &&
      !input.includes(".")
    ) {
      setInput(e);
      setCalculation(
        (calculation) => calculation.substring(0, calculation.length - 1) + e
      );
      return;
    }
    if (input.includes(".") && e === ".") {
      return;
    }
    if (/\D/.test(e) && e !== ".") {
      setInput(e);
      setCalculation((calculation) => calculation + e);
    } else if (/\D/.test(input) && !input.includes(".")) {
      setInput(e);
      setCalculation((calculation) => calculation + e);
    } else {
      setInput((input) => input + e);
      setCalculation((calculation) => calculation + e);
    }
  }
  const buttons = data.map((item) => {
    let clickFunction = handleClick;
    let buttonStyle = {
      cursor: "pointer",
      border: ".5px solid white",
      backgroundColor: "gray",
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
    };
    if (!parseInt(item.text) && item.text !== "." && item.text !== "0") {
      buttonStyle.backgroundColor = "darkgray";
    }
    if (item.text === "AC") {
      buttonStyle.backgroundColor = "red";
      buttonStyle.gridColumn = "1/3";
      clickFunction = handleReset;
    }
    if (item.text === "=") {
      buttonStyle.backgroundColor = "blue";
      buttonStyle.gridColumn = "4/-1";
      buttonStyle.gridRow = "6/-1";
      clickFunction = handleEquals;
    }
    if (item.text === "0") {
      buttonStyle.gridColumn = "1/3";
    }
    return (
      <ClickableButton
        key={item.id}
        id={item.id}
        innerText={item.text}
        style={buttonStyle}
        handleClick={clickFunction}
      />
    );
  });
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "350px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: "auto auto 75px 75px 75px 75px 75px",
          position: "relative",
          backgroundColor: "black",
          color: "white",
          border: "2px solid black",
        }}
      >
        <div
          id="calc"
          style={{
            gridColumn: "1/-1",
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            color: "orange",
            height: "20px",
            fontSize: "20px",
          }}
        >
          {calculation}
        </div>
        <div
          id="display"
          style={{
            gridColumn: "1/-1",
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            fontSize: "40px",
          }}
        >
          {input}
        </div>
        {buttons}
      </div>
    </div>
  );
}

export default App;
