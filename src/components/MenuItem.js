import { Close } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'


const MenuItem = ({ showMenu, active }) => {
  return (
    <div className='transition-all ease-in duration-300'>
        <ul className={active ? 'flex-col transition-all duration-500 ease-in flex items-right text-lg fixed inset-0 left-1/4 uppercase bg-gray-800 font-extrabold text-white  gap-8 justify-center p-8 md:hidden' : 'hidden'}>
            <div className='absolute right-6 md:hidden top-6 scale-150'>
              <Close onClick={showMenu} 
              className='cursor-pointer'/>
            </div>
            <li><Link to='/news'>NEWS</Link></li>
            <li><Link to='/matches'>MATCHES</Link></li>
            <li><Link to='/players'>PLAYERS</Link></li>
            <li><Link to='/shop'>SHOP</Link></li>
            <li><Link to='/clubinfo'>CLUB INFO</Link></li>
            <li><Link to='/sportingtv'>SPORTING TV</Link></li>
        </ul>

    </div>
  )
}

export default MenuItem