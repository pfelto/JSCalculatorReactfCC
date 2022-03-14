function App() {
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
          gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr",
          position: "relative",
          backgroundColor: "black",
          color: "white",
          border: "2px solid black",
          textAlign: "center",
        }}
      >
        <div
          id="display"
          style={{
            gridColumn: "1/-1",
            textAlign: "end",
            border: "1px solid white",
          }}
        >
          Display
        </div>
        <div
          id="clear"
          style={{
            gridColumn: "1/3",
            border: "1px solid white",
          }}
        >
          AC
        </div>
        <div id="division" style={{ border: "1px solid white" }}>
          /
        </div>
        <div id="multiplication" style={{ border: "1px solid white" }}>
          X
        </div>
        <div id="7" style={{ border: "1px solid white" }}>
          7
        </div>
        <div id="8" style={{ border: "1px solid white" }}>
          8
        </div>
        <div id="9" style={{ border: "1px solid white" }}>
          9
        </div>
        <div id="subtraction" style={{ border: "1px solid white" }}>
          -
        </div>
        <div id="4" style={{ border: "1px solid white" }}>
          4
        </div>
        <div id="5" style={{ border: "1px solid white" }}>
          5
        </div>
        <div id="6" style={{ border: "1px solid white" }}>
          6
        </div>
        <div id="addition" style={{ border: "1px solid white" }}>
          +
        </div>
        <div id="1" style={{ border: "1px solid white" }}>
          1
        </div>
        <div id="2" style={{ border: "1px solid white" }}>
          2
        </div>
        <div id="3" style={{ border: "1px solid white" }}>
          3
        </div>
        <div
          id="equal"
          style={{
            border: "1px solid white",
            gridColumn: "4/-1",
            gridRow: "5/-1",
          }}
        >
          =
        </div>
        <div id="0" style={{ gridColumn: "1/3", border: "1px solid white" }}>
          0
        </div>
        <div id="decimal" style={{ border: "1px solid white" }}>
          .
        </div>
      </div>
    </div>
  );
}

export default App;
