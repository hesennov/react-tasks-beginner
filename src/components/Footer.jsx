import { MainContext, useContext } from "../context";

const Footer = () => {
  const { theme, setTheme } = useContext(MainContext);

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <button onClick={switchTheme}>change theme</button>
    </div>
  );
};
export default Footer;
