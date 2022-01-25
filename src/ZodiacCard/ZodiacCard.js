import { Fragment } from 'react/cjs/react.production.min'
import './ZodiacCard.css'

export default function ZodiacCard(props) {
  return (
    <fragment className='zodiac-card'>
      <p>
        {/* {console.log(props.name)} */}
        {props.name.charAt(0).toUpperCase() + props.name.slice(1) + ' ' + props.dates}
      </p>
      <img src={`./images/${props.name}.png`} />
    </fragment>
  )
}
{
  /* in this component,  use the `name` and `dates` props to render the name and dates of the sign, as well as load the correct image  from the public directory */
}
