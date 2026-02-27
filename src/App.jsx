import { useEffect, useState } from "react";
import "./App.css";
export function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const loginHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("isLogin", "ok");
    setIsLogin(true);
    setPw("");
    setEmail("");
  };
  const logoutHandler = (e) => {e.preventDefault();
    localStorage.removeItem("isLogin");
    setIsLogin(false);
  }
  useEffect(() => {
    const storageInfo = localStorage.getItem("isLogin");
    console.log(storageInfo);
  if(storageInfo==="ok"){
    setIsLogin(true)
  }
  }, []);
  return (
    <div className="container">
      <header className="main-header">
        <h1>React Auth</h1>
        {isLogin && (
          <nav className="nav">
            <button className="btn" onClick={logoutHandler}>로그아웃</button>
          </nav>
        )}
      </header>
      <main>
        {
          !isLogin ? (
            <div className="card login">
              <form onSubmit={loginHandler}>
                <div className="control">
                  <label htmlFor="email">email</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="control">
                  <label htmlFor="password">password</label>
                  <input type="password" id="password" value={pw} onChange={(e) => setPw(e.target.value)} />
                </div>
                <div className="action">
                  <button type="submit" className="btn">
                    로그인
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="card home">
              <h1>환영합니다!</h1>
              <p>로그인에 성공하셨습니다.</p>
            </div>
          )
        }
      </main>
    </div>
  );
}
