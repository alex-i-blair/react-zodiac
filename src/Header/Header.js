import React from 'react'
import './Header.css'

export default function Header(props) {
  return <header>Alchemy Astrology, by {props.firstName} {props.lastName}</header>
}
