import {LandingPage} from './components'

import petalImage from './assets/petal.png';
import SakuraPetals from './components/Backgrounds/SakuraPetals';
import "./App.css";

const App = () => (
  <>
  <SakuraPetals petalImage={petalImage} petalCount={30}/>
  <LandingPage/>
  </>
)

export default App;
