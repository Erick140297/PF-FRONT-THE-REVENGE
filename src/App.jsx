import './App.css'
import { Route } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Header from './Components/SideBar/Header';
import Result from './Components/Result/Result';
import Profile from './Components/Profile/Profile'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <div className="otracosa">
      <Header />
      <Home/>
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={Home} />
      <Route exact path="/result" component={Result} />
      <Route exact path="/profile" component={Profile} />
      <Footer/>
      </div>
    </div>
  )
}

export default App
