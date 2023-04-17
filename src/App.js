import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
