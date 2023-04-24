import React from 'react'
import player1 from '../assets/1680876470198.jpg'
import player2 from '../assets/1680876470277.jpg'
import player3 from '../assets/1680876470358.jpg'
import player4 from '../assets/1680876470437.jpg'
import player5 from '../assets/1680876470516.jpg'
import player6 from '../assets/1680876470594.jpg'
import player7 from '../assets/1680876470674.jpg'

const Players = () => {
  return (
    <div className=''>
      <h1 className='font-bold text-center'>Players</h1>
      <img src={player1} alt='player'/>
      <img src={player2} alt='player'/>
      <img src={player3} alt='player'/>
      <img src={player4} alt='player'/>
      <img src={player5} alt='player'/>
      <img src={player6} alt='player'/>
      <img src={player7} alt='player'/>
    </div>
  )
}

export default Players