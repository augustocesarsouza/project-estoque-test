import * as Styled from "./styled";
import userService from "../../Components/Service/UserService/UserService";
import { User } from "../../Components/Interfaces/Entity/User.";
import { useRef } from "react";

const Home = () => {
  const inputTextIdRef = useRef<HTMLInputElement | null>(null);

  const onClickCount = async () => {
    ///
  };

  const onClickGetUser = async () => {
    const input = inputTextIdRef.current as HTMLInputElement;
    const userId = input.value;

    const resp = await userService.getByIdInfoUser(userId);

    if (resp && resp.isSucess) {
      const user = resp.data as User;
      console.log(user);
    }
  };

  const onClickCreateAccount = async () => {
    const input = inputTextIdRef.current as HTMLInputElement;
    const userId = input.value;
    console.log(userId);

    const user = {
      id: userId,
      name: "Augusto Cesar",
      lastName: "Souza Santana",
    };

    const resp = await userService.create(user);

    if (resp && resp.isSucess) {
      const user = resp.data as User;
      console.log(user);
    }
  };

  return (
    <Styled.ContainerMain>
      <h1>Vite React</h1>
      <input type="text" ref={inputTextIdRef} />
      <div>
        <button onClick={onClickCount}>count is 1</button>
        <button onClick={onClickGetUser}>Pegar user</button>
        <button onClick={onClickCreateAccount}>criar conta</button>
      </div>
    </Styled.ContainerMain>
  );
};

export default Home;
