import styles from './App.module.css';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero'
import { About } from './components/about/About'
import { Experience } from './components/exp/Experience'
import { Skills } from './components/skills/Skills'

function App() {

  return <div className = {styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Skills/>
  </div>
}

export default App
