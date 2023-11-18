import background from '../assets/bistro-background-alternative.png'

const Bio = () => {
  return (
    <section className='w-5/6 relative mx-auto'>
      <img className='absolute w-full h-full' src={background} alt="restaurant dim background" />
      <article className='w-full min-h-full text-center py-12 flex-col gap-5 relative bg-base-100/[0.8] m-auto text-lg font-body text-main-text'>
        <div className='flex bio gap-5 leading-6 flex-col w-1/3 m-auto'>
          <h3 className="text-xl font-semibold text-secondary">Welcome to Sapphire Bistro</h3>
          <p>Welcome to Sapphire Bistro, a <strong className='text-secondary'>culinary sanctuary</strong> where each dish is a masterpiece crafted with passion and expertise.<br/> Nestled in the heart of a vibran cityscape, our restaurant beckons with an <strong className='text-secondary'>irresistible blend</strong> of flavors and ambiance that promises an unforgettable dining experience.</p>
          <p>Relish the <strong className='text-secondary'>warm, inviting atmosphere</strong> as you dine amidst elegant decor and soothing melodies.<br /> Whether it's a romantic dinner, a casual gathering with friends, or a special occasion, Sapphire Bistro caters to every palate and occasion with <strong className='text-secondary'>unparalleled finesse</strong>.</p>
          <p>Join us on a culinary journey that transcends boundaries, where every bite tells a story and every visit becomes a <strong className='text-secondary'>cherished memory</strong>. Experience the magic of Sapphire Bistro – where exquisite flavors and impeccable service converge to create <strong className='text-secondary'>moments worth savoring</strong>.</p>
        </div>
      </article>
    </section>
  )
}

export default Bio