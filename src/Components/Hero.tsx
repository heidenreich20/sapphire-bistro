const Hero = () => {
  return (
    <section className='flex flex-col justify-center gap-24 items-center h-4/5 hero-background w-fit mx-auto my-auto md:m-auto'>
      <div className="flex flex-col justify-center items-center text-center w-2/3 md:w-1/2">
        <h1 className="flex text-3xl md:text-5xl text-main-text leading-normal font-heading">
          Indulge in Culinary Bliss at 'Sapphire Bistro'
        </h1>
        <h2 className="flex text-xl text-secondary font-heading mt-6"> Where Flavors Come Alive!</h2>
      </div>
      <a aria-label="see more" href="#carrousel" className="flex items-center justify-center h-8 w-8 font-bold text-3xl animate-bounce hover:border-secondary hover:text-secondary transition-colors ease-linear duration-100 p-8 border-2 rounded-full border-text">&#8595;</a>
    </section>
  )
}

export default Hero