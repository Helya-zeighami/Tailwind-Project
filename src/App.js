import './App.css';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Analytics from "./components/analytics";
import NewsLetter from "./components/newsLetter";
import Cards from "./components/cards";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <NewsLetter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
