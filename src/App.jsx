import './App.css'
import Home from './Components/Home/Home.jsx'
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/SideBar/Header';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Header />
      <Home/>
    </div>
  )
}

export default App
