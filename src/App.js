import "./App.css";
import Body from "./components/Body/Body";
import NftCollection from "./components/Body/NftCollection";
import Header from "./components/Header/Header";
export default function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <Header />
      <NftCollection />
    </div>
  );
}
