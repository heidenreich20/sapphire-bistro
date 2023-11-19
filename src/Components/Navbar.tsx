import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='z-20 backdrop-blur-sm bg-base-100/[0.7] fixed top-0 flex justify-between w-10/12 py-5'>
      <div className='flex items-center gap-2'>
        <img className='w-8 h-8 aspect-square' src={logo} alt="" />
        <p className='font-heading text-text font-bold'>Sapphire Bistro</p>
      </div>
      <ul className="flex gap-12 font-heading justify-end">
        <li className="relative">
          <a href="#menu">Menu</a>
        </li>
        <li className="text-secondary relative">
          <a href="#reservations">Reservations</a>
        </li>
        <li className="relative">
          <a href="#carrousel">About us</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar