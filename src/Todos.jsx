import { useState } from "react";
import "./Todo.css";
export function Todos() {
  const [val, setVal] = useState("");
  const [li, setLi] = useState([]); // start with an array

  const addLi = () => {
    if (val === "") return; // ignore empty
    setLi([...li, val]);
    setVal("");
  };
  const del = (idx) => {
    setLi(li.filter((e, i) => i !== idx));
  };

  return (
    <div className="container">
      <div className="input-box">
        <input
          type="text"
          className="input-field"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button className="add-btn" onClick={addLi}>
          add
        </button>
        <button className="add-btn" onClick={() => del(li.length - 1)}>
          delete last
        </button>
      </div>
      <ul className="list-box">
        <li className="list-item">item1</li>
      </ul>
      <ul>
        {li.map((el, idx) => {
          return (
            <li key={idx} className="list-item">
              {el} <button onClick={() => del(idx)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
