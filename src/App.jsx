import {
  Info,
  Nav,
  Portfolio,
  AboutMe,
  Social,
  Contact,
  ProfileCard,
  LogoCard,
} from "./components";
import SakuraPetals from "./containers/Background/SakuraPetals";
import petalImage from "./assets/petal.png";
import "./App.css";

const App = () => (
  <>
    <div className="gradient-bg">
      <SakuraPetals petalImage={petalImage} petalCount={50} />
      <Nav />
      <main className="App">
        <Info />
        <AboutMe />
        <Portfolio />
        <Social />
        <Contact />
        <ProfileCard />
        {/* <LogoCard /> */}
      </main>
    </div>
  </>
);

export default App;
