import Pages from "./pages/Pages";
import Category from './components/Category';
import Search from './components/Search';
import NavLogo from "./components/NavLogo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <NavLogo/>
        <Search/>
        <Category/>
        <Pages/>
        <Footer/>
    </div>
  );
}

export default App;
