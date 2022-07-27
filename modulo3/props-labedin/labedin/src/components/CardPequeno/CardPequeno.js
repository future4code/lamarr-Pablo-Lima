import React from 'react'
import './CardPequeno.css'

function CardPequeno(props) {
  return (
    <div className="bigcard-container">
      <div>
        <img src={props.imagem} />
        <p>pabloborek@hotmail.com</p>
        <p>Rua labenu</p>
      </div>
    </div>
  )
}

export default CardPequeno
