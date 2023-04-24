import React from 'react'
import ClubInfo from './ClubInfo'
import Matches from './Matches'
import News from './News'
import Players from './Players'
import Shop from './Shop'
import Sporting from './Sporting'

const IndexPage = () => {
  return (
    <div className='py-16'>
        <ClubInfo />
        <Matches />
        <News />
        <Players />
        <Shop />
        <Sporting />
    </div>
  )
}

export default IndexPage