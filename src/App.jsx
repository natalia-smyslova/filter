import Portfolio from './components/Portfolio'
import projects from './data/projects';
import './css/styles.css';

function App() {
  return (
    <Portfolio list={projects}/>
  )
}

export default App
