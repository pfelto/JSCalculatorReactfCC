import { useState } from "react";

const data = [
  { id: "clear", text: "AC" },
  { id: "divide", text: "/" },
  { id: "multiply", text: "x" },
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

  function handleClick(e) {
    console.log(e);
    if (e === "AC") {
      setInput("0");
      setCalculation("");
      return;
    }
    if (input === "0" && e === "0") return;
    if (
      (input === "0" && e !== ".") ||
      input === "/" ||
      input === "x" ||
      input === "-" ||
      input === "+" ||
      e === "/" ||
      e === "x" ||
      e === "-" ||
      e === "+"
    ) {
      setInput(e);
      setCalculation((calculation) => calculation + e);
      return;
    }
    setInput((input) => input + e);
    setCalculation((calculation) => calculation + e);
  }
  const buttons = data.map((item) => {
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
    }
    if (item.text === "=") {
      buttonStyle.backgroundColor = "blue";
      buttonStyle.gridColumn = "4/-1";
      buttonStyle.gridRow = "6/-1";
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
        handleClick={handleClick}
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
          id="display"
          style={{
            gridColumn: "1/-1",
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            color: "orange",
            fontSize: "25px",
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
          {input === "" ? "0" : input}
        </div>
        {buttons}
      </div>
    </div>
  );
}

export default App;
