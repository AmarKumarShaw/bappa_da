import './App.css';
import Navbar from './components/Navbar';
import GlobalStyle from './GlobalStyled';
import Header from './components/Header';
import Card from './components/Card';
import Notes from "./components/Notes";
import About from "./components/About";
import Footer from "./components/Footer"
import Copywright from './components/Copywright';

function App() {
  return (
    <div className="App">
    <GlobalStyle />
      <Navbar />
      <Header />
      <Notes />
      <About />
      <Footer />
      <Copywright />
    </div>
  );
}

export default App;
