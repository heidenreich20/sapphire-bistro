import logo from '../assets/logo-small.webp'

const Navbar = () => {
  return (
    <nav className='z-20 w-full px-8 text-main-text gap-5 backdrop-blur-sm bg-base-100/[0.7] fixed top-0 flex justify-between py-5'>
      <div className='flex items-center gap-2'>
        <img className='w-8 h-8' src={logo} alt="company logo" />
        <p className='font-heading md:block hidden text-text font-bold'>Sapphire Bistro</p>
      </div>
      <ul className="flex items-center gap-6 md:gap-12 md:text-base text-sm font-heading justify-end">
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