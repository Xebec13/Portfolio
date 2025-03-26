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

import "./App.css";

const App = () => (
  <>
    <Nav />
    <main className="App">
     <Info/>
     <LogoCard />
     <ProfileCard/>
     <Social/>
     <Portfolio/>
     <AboutMe/>
     <Contact/>
    </main>
  </>
);

export default App;
