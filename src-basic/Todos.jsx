import { useState, useEffect } from "react";
import "./Todo.css";
export function Todos() {
  const [val, setVal] = useState("");

  useEffect(() => {
    console.log("🛹🚜🚡🛴-마운트 될 때실행");
  }, []);

  useEffect(() => {
    console.log("😀😀😁🤣-렌더링시 실행");
  });

  useEffect(() => {
    console.log("🍳입력중");
  }, [val]);

  const [li, setLi] = useState([]);
  const addLi = () => {
    setLi([...li, val]);
  };
  const del = (idx) => {
    setLi(
      li.filter((e, i) => {
        return e !== idx; //인덱스 번호가 다른것만 남김
      }),
    );
  };

  return (
    <div className="container">
      <div className="input-box">
        <input type="text" className="field" value={val} onChange={(e) => setVal(e.target.value)} />
        <button className="add-btn" onClick={addLi}>
          add
        </button>
      </div>
      <ul className="list-box">
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
