import './App.css'
import Home from './Components/Home/Home.jsx'
import NavBar from './Components/NavBar/NavBar'

import Footer from './Components/Footer/Footer'

import Header from './Components/SideBar/Header';

function App() {

  return (
    <div className="App">

      <NavBar/>
      <div className="otracosa">
      <Header />
      <Home/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
