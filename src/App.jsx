import './App.css'
import { Route } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Header from './Components/SideBar/Header';
import Result from './Components/Result/Result';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={Home} />
      <Route exact path="/result" component={Result} />
      <Footer/>
    </div>
  )
}

export default App
