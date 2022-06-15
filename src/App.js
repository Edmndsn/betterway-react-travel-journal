import "./App.css";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import data from "./data.js";

export default function App() {
  const destinationData = data.map(item => {
    return <Hero key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Navbar />
      {destinationData}
    </div>
  );
}
