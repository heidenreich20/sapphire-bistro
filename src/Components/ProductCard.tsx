import { useState } from 'react'
import corner from '../assets/corner.svg'

type props = {
  image: string,
  price: string,
  body: string,
  title: string,
  prevSlide: string,
  nextSlide: string,
  currentSlide: string
}

const ProductCard = ({ image, price, body, title }: props) => {
  const [show, setShow] = useState(false)

  return (
    <div className='carousel-item relative w-full items-end info-container h-96 md:w-[24%]' >
      <img className='pointer-events-none object-cover h-full w-full -z-20' src={image} alt={`${title}`} />
      <div className='info-container overflow-hidden flex flex-col justify-end h-full absolute transition-opacity duration-200 ease-linear'>
        <div className={`${show ? 'translate-y-[0%]' : 'translate-y-[100%]'} pb-10 p-2 transition-transform duration-150 ease-out flex flex-col bg-[#2e2626] info-container`}>
          <div className='flex justify-between'>
            <img className='w-6 h-6 -rotate-90' src={corner} alt="decorative corners" />
            <span className='font-body italic'>{price}</span>
          </div>
          <p className='text-main-text italic mb-2 cursor-default w-4/5 m-auto leading-5 text-shadow'>{body}</p>
          <div className='flex ml-auto'>
            <img className='w-6 h-6 rotate-90' src={corner} alt="decorative corners" />
          </div>
        </div>
      </div>
      {!show
        ? (
          <button onClick={() => setShow(!show)} className='absolute pb-1 show-more flex flex-col w-full bg-gradient-to-t from-base-100/[0.7] items-center'>
            <svg className='w-6 h-6 transition-all duration-150 ease-linear fill-main-text' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z" fill="inherit"></path> </g></svg>
            <p className='font-body z-40 text-main-text'>Show more</p>
          </button>

        )
        : (
          <button onClick={() => setShow(!show)} className='absolute pb-1 show-more flex flex-col w-full bg-gradient-to-t from-base-100/[0.7] items-center'>
            <svg className='w-6 h-6 transition-all duration-150 ease-linear rotate-180 fill-main-text' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z" fill="inherit"></path> </g></svg>
            <p className='font-body text-main-text'>Show less</p>
          </button>
        )}
    </div >
  )
}

export default ProductCard