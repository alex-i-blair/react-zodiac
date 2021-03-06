import React from 'react'
import backgroundImg from '../background.png'
import './Main.css'
import ZodiacCard from '../ZodiacCard/ZodiacCard.js'

export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {/* import the ZodiacCard component */}
      {/* get the zodiac array from props */}
      {/* {console.log(props.zodiacs)} */}

      {props.zodiacs.map((zodiac, i) => {
        return (
          <ZodiacCard
            name={zodiac.name}
            dates={zodiac.dates}
            key={zodiac.name + i}
          />
        )
      })
      }
      {/* for each item in the `zodiacs` array props, render a ZodiacCard component, passing in the name and the dates as props to the ZodiacCard component */}
      {/* remember that when you map over an array and render out a list, each item in the list needs a unique 'key' prop */}
    </main>
  )
}
