import logo from './logoDK.png';
import SocialIcons from './components/icons';
import Intro from './components/intro';
import Projects from './components/projects';

function App() {
  return (
    <div className="m-3">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/* insert socialIcons component */}
      <SocialIcons />
      <Intro />
      <Projects />
      </header>
    </div>
  );
}

export default App;
