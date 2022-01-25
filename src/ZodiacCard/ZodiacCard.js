import { Fragment } from 'react/cjs/react.production.min'
import './ZodiacCard.css'

export default function ZodiacCard(props) {
  return (
    <fragment className='zodiac-card'>
      <img src={`./images/${props.name}.png`} />
      <p className='name'>
        {/* {console.log(props.name)} */}
        {props.name}
      </p>
      <p>
        {props.dates}
      </p>
    </fragment>
  )
}
{
  /* in this component,  use the `name` and `dates` props to render the name and dates of the sign, as well as load the correct image  from the public directory */
}
