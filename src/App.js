import './App.css'
// import { ZodiacCard } from './ZodiacCard/ZodiacCard'
import { zodiac } from './data'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './Main/Main'
/* import the zodiac array */
{
  /* import and use the Header. Main, and Footer components here */
}

function App() {
  return (
    <div className="App">
      <Header firstName="Alex" lastName="Blair"/>
      {/* the Header component needs a string passed in as the `name` prop */}
      <Main zodiacs={zodiac} />
      {/* the Footer component needs a year passed in as the `year` prop */}
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
      <Footer year='3045' />
    </div>
  )
}

export default App
