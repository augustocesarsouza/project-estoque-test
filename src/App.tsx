import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import userService from "./Components/Service/UserService/UserService";
import { User } from "./Components/Interfaces/Entity/User.";

function App() {
  const [count, setCount] = useState(0);

  const onClickCount = async () => {
    setCount((prev) => prev + 1);

    const userId = "";
    const resp = await userService.getByIdInfoUser(userId);

    if (resp && resp.isSucess) {
      const user = resp.data as User;
      console.log(user);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onClickCount}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
