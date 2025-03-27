import { Route, Routes } from "react-router-dom";
import * as Styled from "./style";
import Home from "../Home/Home";

const AppContent = () => {
  return (
    <Styled.ContainerMain>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Styled.ContainerMain>
  );
};

export default AppContent;
