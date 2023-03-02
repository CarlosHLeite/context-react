import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useThemeContext } from './context/ThemeContext'


function App() {

    const { theme } = useThemeContext()
 

  return (
    <div className={`App ${theme === 'dark' ? "dark-theme": ""}`}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
