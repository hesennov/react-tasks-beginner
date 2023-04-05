import { MainContext, useContext } from "../context";

const Header = () => {
  const { theme, setTheme } = useContext(MainContext);
  return <div>Current theme = {theme} </div>;
};
export default Header;
