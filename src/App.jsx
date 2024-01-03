
import Header from './componants/Header/Header'
import Hero from './componants/Hero/Hero'
import './App.css'
import Companies from './componants/Companies/Companies'

function App() {

  return (
    <div className='App'>
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies/>
    </div>

  )
}

export default App
