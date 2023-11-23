import logo from '../assets/logo-small.webp'

const Navbar = () => {
  return (
    <nav className='z-20 w-full px-8 text-main-text gap-5 backdrop-blur-sm bg-base-100/[0.7] md:fixed flex justify-between py-5'>
      <div className='flex items-center gap-2'>
        <img className='w-8 aspect-[1.2/1]' src={logo} alt="company logo" />
        <p className='font-heading md:block hidden text-text font-bold'>Sapphire Bistro</p>
      </div>
      <ul className="flex items-center gap-6 md:gap-12 md:text-base text-xs font-heading justify-end">
        <li className="relative">
          <a aria-label='menu' href="#menu">Menu</a>
        </li>
        <li className="text-secondary relative">
          <a aria-label='reservations' href="#reservations">Reservations</a>
        </li>
        <li className="relative">
          <a aria-label='about us' href="#carrousel">About us</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar