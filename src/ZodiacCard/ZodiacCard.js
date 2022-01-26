import './ZodiacCard.css'

export default function ZodiacCard(props) {
  return (
    <section className='zodiac-card'>
      <img src={`./images/${props.name}.png`} />
      <p className='name'>
        {/* {console.log(props.name)} */}
        {props.name}
      </p>
      <p>
        {props.dates}
      </p>
    </section>
  )
}
