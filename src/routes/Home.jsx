import { useThemeContext } from "../context/ThemeContext"


const Home = () => {


   const { theme, toggleTheme } = useThemeContext()


  return (
    <div>
        <h1>Pagina Inicial</h1>
        <p>O tema atual é {theme}</p>
        <button onClick={toggleTheme} >Mudar tema</button>
    </div>
  )
}

export default Home