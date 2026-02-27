import "./Button.css";
export function Button({ children, color }) {
  return (
    <>
      {/* 단항연산자 -> || : or연산자 , 두항의 값 중 true를 반환  */}
      <button className="btn" style={{ backgroundColor: color || "#007bff" }}>
        {children}
      </button>
    </>
  );
}
