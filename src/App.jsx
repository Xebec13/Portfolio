import { LandingPage,Nav} from "./components";

import petalImage from "./assets/petal.png";
import SakuraPetals from "./components/Background/SakuraPetals";
import "./App.css";

const App = () => (
  <>
    <SakuraPetals petalImage={petalImage} petalCount={30} />
    <main className="App flex-center"> 
    <LandingPage />
    <Nav />
    </main>
  </>
);

export default App;
