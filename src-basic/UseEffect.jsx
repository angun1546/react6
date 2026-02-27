import { useEffect } from "react";
export function UseEffect() {
  console.log(useEffect);
  // useEffect(()=>{},[])
  // 의존성 배열, dependency array
  useEffect(() => {
    console.log("🚒🚑-컴포넌트 마운트시 딱 한번만 실행");
  }, []);

  useEffect(() => {
    console.log("렌더링 될때마다");
  });

  let test = "임시값";
  useEffect(() => {
    console.log("test가 바뀔때마다");
  }, [test]);

  // cleanup => 컴포넌트 언마운트시
  useEffect(() => {
    console.log("마운트");
    return () => console.log("정리함수");
  }, []);

  return (
    <>
      <div>UseEffect</div>
    </>
  );
}
