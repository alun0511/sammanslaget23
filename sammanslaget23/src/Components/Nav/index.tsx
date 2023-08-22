import { NavStyled } from "./styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prototype from "../../Prototype";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Prototype">Prototype</a>
        </li>
      </ul>
    </NavStyled>
  );
};

export default Nav;
