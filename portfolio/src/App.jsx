import "./App.css";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
    </>
  );
}

export default App;
