import * as Styled from "./styled";
import userService from "../../Components/Service/UserService/UserService";
import { User } from "../../Components/Interfaces/Entity/User.";

const Home = () => {
  const onClickCount = async () => {
    ///
  };

  const onClickGetUser = async () => {
    const userId = "8f92f258-0d5a-4855-9c5b-e2633de33e82";
    const resp = await userService.getByIdInfoUser(userId);
    console.log(resp);

    if (resp && resp.isSucess) {
      const user = resp.data as User;
      console.log(user);
    }
  };

  const onClickCreateAccount = async () => {
    const user = {
      id: "",
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
      <div>
        <button onClick={onClickCount}>count is 1</button>
        <button onClick={onClickGetUser}>Pegar user</button>
        <button onClick={onClickCreateAccount}>criar conta</button>
      </div>
    </Styled.ContainerMain>
  );
};

export default Home;
