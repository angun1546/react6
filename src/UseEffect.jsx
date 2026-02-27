import { useEffect } from "react";
export function UseEffect() {
  console.log(useEffect);
  // useEffect(()=>{},[])
  // 의존성 배열, dependency array
  useEffect(() => {
    console.log("🚒🚑-컴포넌트 마운트시 딱 한번만 실행");
  }, []);


  return (
    <>
      <div>UseEffect</div>
    </>
  );
}
