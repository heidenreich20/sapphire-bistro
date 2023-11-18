import icon1 from '../assets/fork.png'
import icon2 from '../assets/goal.png'
import icon3 from '../assets/awards.png'

const AboutUs = () => {
  return (
    <div className='bg-base-100 my-12 w-4/6 m-auto rounded-lg p-2'>
      <ul className="flex w-full font-body justify-between">
        <li className="bg-neutral-900/[0.7] p-4 border-b twin-shadow border-b-secondary h-96 overflow-hidden text-ellipsis w-1/4">
          <article className='h-[350px] overflow-hidden'>
            <div className='flex flex-col mb-4 justify-center items-center gap-3'>
              <h3 className="font-body text-main-text font-semibold text-xl">The bistró</h3>
              <img src={icon1} alt="" />
            </div>
            <p className="text-main-text">At our Bistro, every dish tells a story. We embrace flavors from around the world and craft them into culinary masterpieces. Our cozy ambiance invites you to savor each bite while creating unforgettable moments. Join us and experience a symphony of tastes that redefine the art of dining.</p>
          </article>
        </li>
        <li className="bg-neutral-900/[0.7] h-full p-4 border-b twin-shadow border-b-secondary overflow-hidden text-ellipsis w-1/4">
          <article className='h-[350px] overflow-hidden'>
            <div className='flex flex-col mb-4 justify-center items-center gap-3'>
              <h3 className="font-body text-main-text font-semibold text-center text-xl">Our goal</h3>
              <img src={icon2} alt="" />
            </div>
            <p className="text-main-text">Our mission is simple yet profound: to delight your palate and exceed your expectations. We strive to create an environment where passion meets innovation, crafting exceptional dining experiences. From sourcing the finest ingredients to offering impeccable service, we're committed to making your visit memorable.</p>
          </article>
        </li>
        <li className="bg-neutral-900/[0.7] p-4 border-b twin-shadow border-b-secondary h-96 overflow-hidden text-ellipsis w-1/4">
          <article className='h-[350px] overflow-hidden'>
            <div className='flex flex-col mb-4 justify-center items-center gap-3'>
              <h3 className="font-body text-main-text font-semibold text-center text-xl">Awards</h3>
              <img src={icon3} alt="" />
            </div>
            <p className="text-main-text">We're honored to have been recognized for our dedication to culinary excellence. Our commitment to quality and creativity has garnered prestigious accolades, celebrating our innovative dishes, exceptional service, and commitment to exceeding gastronomic boundaries. These awards inspire us to continue raising the bar.</p>
          </article>
        </li>
      </ul>
    </div>
  )
}

export default AboutUs