
import Header from './componants/Header/Header'
import Hero from './componants/Hero/Hero'
import './App.css'
import Companies from './componants/Companies/Companies'
import Residencies from './componants/Residencies/Residencies'
import Value from './componants/Value/Value'
import Contact from './componants/Contact/Contact'
import GetStarted from './componants/GetStarted/GetStarted'
import Footer from './componants/Footer/Footer'

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
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default App
