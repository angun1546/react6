import { useState } from "react";
import "./Todo.css";
export function Todo() {
  const [val, setVal] = useState("");
  const [li, setLi] = useState("");
  const [lis, setLis] = useState([]);

  const addLi = () => {
    setLi(val);
    setVal("");
  };
  const addLis = () => {
    setLis([...lis,val]);
  };
  return (
    <div className="container">
      <div className="input-box">
        <input type="text" className="input-field" value={val} onChange={(e) => setVal(e.target.value)} />
        <button className="add-btn" onClick={addLi}>
          수정
        </button>
        <button className="add-btn" onClick={addLis}>
          추가
        </button>
      </div>
      <ul className="list-box">
        <li className="list-item">{li}</li>
      </ul>
      <ul className="list-box">
        <li className="list-item">{lis}</li>
      </ul>
    </div>
  );
}
