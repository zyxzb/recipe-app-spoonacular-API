import Pages from "./pages/Pages";
import Category from './components/Category';
import Search from './components/Search';
import NavLogo from "./components/NavLogo";

function App() {
  return (
    <div className="App">
        <NavLogo/>
        <Search/>
        <Category/>
        <Pages/>
    </div>
  );
}

export default App;
