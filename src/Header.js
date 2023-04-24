import { useState } from 'react'
import logo from './assets/logo.jpg'
import { Link } from 'react-router-dom'
import MenuItem from './components/MenuItem'
import { MenuOutlined } from '@material-ui/icons'

const Header = () => {

  const [active, setActive] = useState();

  const showMenu = () => {
    setActive(!active)
  }

  return (
    <header className='fixed bg-gray-800 ont-extrabold text-white w-full text-black flex justify-between p-4 items-center'>
      {/* font-bold bg-black py-4 text-white */}
        <Link to='/' className=''>
          <img className='w-24'
            src={logo}
            alt='logo'
          />
        </Link>
        <nav>

          <div className='absolute right-6 md:hidden top-6 scale-150'>
            <MenuOutlined onClick={showMenu} 
            className='scale-150 cursor-pointer'/>
          </div>

          <ul className='hidden md:flex gap-8 p-6'>
            <li><Link to='/news'>NEWS</Link></li>
            <li><Link to='/matches'>MATCHES</Link></li>
            <li><Link to='/players'>PLAYERS</Link></li>
            <li><Link to='/shop'>SHOP</Link></li>
            <li><Link to='/clubinfo'>CLUB INFO</Link></li>
            <li><Link to='/sportingtv'>SPORTING TV</Link></li>
          </ul>

          <MenuItem showMenu={showMenu} active={active}/>

        </nav>
    </header>
  )
}

export default Header