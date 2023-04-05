import { useEffect, useState } from "react";
import { MainContext } from "./context";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const data = {
    theme,
    setTheme,
  };
  return (
    <MainContext.Provider value={data}>
      <Header />
      <Footer />
    </MainContext.Provider>
  );
};
export default App;
