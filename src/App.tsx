import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Theme } from "./components/Theme";

function App() {
  return (
    <div className="App">
      <Header />
      <Theme />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
