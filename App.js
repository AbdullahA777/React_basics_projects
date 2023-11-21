import React, { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("0");
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const updatedListItems = [];
    for (let i = 1; i < 11; i++) {
      updatedListItems.push(
        <li key={i} className="list-group-item">
          {input} x {i} = {input * i}
        </li>
      );
    }
    setListItems(updatedListItems);
  }, [input]);

  return (
    <>
      <div className="container text-center my-3 fs-4">
        <h2>Mathematic Table Generator</h2>
        <input
        className="my-3"
          type="number"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Enter a Number"
        />
        <ul className="list-group " style={{ width: 300, wordSpacing: 20, margin: "auto" }}>
          {listItems}
        </ul>
      </div>
    </>
  );
}

export default App;
