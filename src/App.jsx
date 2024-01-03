
import Header from './componants/Header/Header'
import Hero from './componants/Hero/Hero'
import './App.css'
import Companies from './componants/Companies/Companies'
import Residencies from './componants/Residencies/Residencies'
import Value from './componants/Value/Value'

function App() {

  return (
    <div className='App'>
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value/>
    </div>
  )
}

export default App
