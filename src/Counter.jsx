import { useState } from "react";
export function Counter() {
  const [num, fnN] = useState(0);
  console.log(num);
  
  

  return (
    <>
      <h1>{num}</h1>
      <button onClick={() => fnN(num + 1)}>좋아요</button>
      <button onClick={() => fnN(num <= 0 ? 0 : num - 1)}>싫어요</button>
      <button onClick={() => fnN(num > 0 ? num - 1 : 0)}>싫어요</button>
    </>
  );
}
