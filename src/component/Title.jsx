export function Title({ title, text, children }) {
  return (
    <>
      <h2>{title || ""}</h2>
      <p>{text || ""}</p>
      {children}
    </>
  );
}
