import logo from '../assets/logo-medium.webp'

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-alt text-main-text">
      <aside>
        <img className='w-16 aspect-[1.2/1]' src={logo} alt="company logo" />
        <p>Sapphire Bistro<br />Redefining Culinary Excellence</p>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
    </footer>


  )
}

export default Footer