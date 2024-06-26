import coq from '../assets/dish1-high.webp'
import beef from '../assets/dish2-high.webp'
import lobster from '../assets/dish3-high.webp'
import risotto from '../assets/dish4.avif'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <section id='menu' className="w-5/6 xl:w-4/6 m-auto my-32">
      <h2 className='font-heading text-secondary mb-10 text-2xl md:text-3xl font-bold text-center'>What we offer</h2>
      <article className='carousel justify-between md:gap-0 gap-5 '>
        <ProductCard
          currentSlide='slide1'
          prevSlide='#slide4'
          nextSlide='#slide2'
          image={coq}
          title='Coq au Vin'
          price='45$'
          body='Indulge in a classic French delight with our Coq au Vin. Tender chicken braised in rich red wine, infused with savory aromatics, bacon, mushrooms, and pearl onions. Each succulent bite offers a harmonious blend of flavors, a testament to traditional French culinary finesse.'
        />
        <ProductCard
          currentSlide='slide2'
          prevSlide='#slide1'
          nextSlide='#slide3'
          image={beef}
          title='Beef Wellington'
          price='70$'
          body='Embark on a culinary journey with our Beef Wellington, an epitome of culinary artistry. Revel in the tenderness of prime beef fillet enveloped in layers of earthy mushroom duxelles and encased in golden, flaky puff pastry. A symphony of flavors awaits with each slice.'
        />
        <ProductCard
        currentSlide='slide3'
        prevSlide='#slide2'
        nextSlide='#slide4'
          image={lobster}
          title='Lobster Thermidor'
          price='90$'
          body='Treat yourself to the epitome of luxury dining with our Lobster Thermidor. Succulent lobster meat bathed in a velvety blend of brandy-infused cream sauce, accented with mustard and cheese, then delicately broiled to perfection. A decadent homage to the seas finest flavors.'
        />
        <ProductCard
        currentSlide='slide4'
        prevSlide='#slide3'
        nextSlide='#slide1'
          image={risotto}
          title='Truffle Risotto'
          price='55$'
          body='Experience luxury on your plate with our Truffle Risotto. Immerse yourself in creamy Arborio rice infused with the alluring essence of truffles, harmonized with a delicate blend of Parmesan, butter, and aromatic herbs. Every spoonful is a celebration of sophistication and indulgence.'
        />
      </article>
      <h3 className='w-3/4 m-auto mt-10 text-center italic font-semibold leading-5'>From the classic indulgence of Beef Wellington to the luxurious Truffle Risotto, our offerings redefine fine dining. Savor the elegance of Coq au Vin's traditional French allure or elevate your palate with the opulence of Lobster Thermidor. Join us and experience a gastronomic journey of sophistication and indulgence.</h3>
      <svg className='fill-secondary w-full m-auto mt-6 h-12' version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200" width="1200" height="200">
        <title>Proyecto nuevo</title>
        <g id="&lt;Group&gt; copy">
          <path id="&lt;Path&gt;" className="s0" d="m638.5 75c-6.6-6.1-26.5 17.5-27.6 19.9 3.1-21.3-9.9-55.5-9.9-53.8 0-1.7-13 32.5-9.9 53.8-1.1-2.4-21-26-27.6-19.9-7.4 6.9 4.6 14.7 8 17.8 1.9 1.8 4.1 3.8 6.4 5.8 8.7 8.1 15.1 19.6 18.2 32.7 2.6 10.9 4.9 21.4 4.9 21.4 0 0 2.3-10.5 4.8-21.4 3.1-13.1 9.6-24.6 18.3-32.7 2.3-2 4.4-4 6.4-5.8 3.4-3.1 15.3-10.9 8-17.8z" />
          <path id="&lt;Compound Path&gt; copy" className="s0" d="m563.5 126.8c-1.4-14.6-20.7-27.5-30.1-31.6-23.4-10.4-45.8-2-64.3 17.1-6.8 7.1-13.3 14.6-20.2 21.2-4.3 3.6-8.7 7.1-13.1 10.3 1.8-3.6 3-7.7 3.2-12 0.2-7.5-3.1-15.3-8.6-18.1q-1.4-0.7-2.8-1c-4.2-0.9-8.7 0.6-12.7 2.6-4.9 2.4-9.7 5.8-14.9 6.6-5.3 0.9-11.3-1.4-13.7-7.5-1.8-4.7-0.9-10.4-2.3-15.3-1.4-4.8-5-8.4-9-8.9-3.9-0.5-8.1 2.1-10.1 6.5-3.9 8.1 0 19.1 5.8 25.2 6.6 6.8 15.5 9.9 23.9 8.3 4.7-1 9.2-3.3 13.9-4.2 2.1-0.4 4.3-0.5 6.5-0.1 3.3 0.7 3.9 6.5 0.8 8.3-17 9.8-37.3 8.8-55.7 3.1-33.5-10.4-65.7-27.3-96.2-47.7-29.8-19.8-57.4-45.4-90-57.7-29.6-11.2-62.6-9.2-87.1 16.7-8.1 8.5-14.2 19-18 30.5-3.3 7.2-6 15.2-8.9 23.1-3.2 6.1-6.5 12.1-10.2 17.8-1.2 1.8-2.7 3.4-4.4 4.4-6.1 3.6-10.1 2.2-15.2-2.1-2-1.7-2.9-4-5.5-4.4-4.3-0.7-8 4.1-8.2 9.4-0.3 7.1 4.7 11.9 9.6 13.5 17 5.5 29.5-16 35.8-32.7q0.5-1.3 0.9-2.6 0.9-1.6 1.8-3.3c-0.7 12.6 1.2 25.7 6.2 38 11.5 28.8 37.2 42.1 61.7 36.6 20.7-4.8 43.3-27.6 42.6-56.6-0.3-11.8-4.4-22.3-10.8-30.7-13.4-17.7-43.2-20.6-47.3 9.8-1.7 12.2 2.9 24.6 13.7 24.8 4.3 0.1 8.7-2 11.3-6.6 4.5-7.5-1.7-16.9 2-24.6 4.7-9.9 12.5-6.8 18-0.1 6.7 7.9 10.4 18.8 8.5 30.3-1.5 9.4-5.6 18.1-11.4 24.2-6.5 6.8-15.2 10.6-23.7 9.4-19.7-3-34.9-26.8-37.4-51-5.2-51.2 37.8-74.7 71.5-65.2 3.6 1 7.2 2.4 10.6 4.1 0.1 0.5 0.4 0.9 0.9 1.1q3.2 1.4 6.3 3.2c13.7 9.1 25.1 23.7 32.3 41.2 4.1 10.1 8.3 23.7 6 35.1-1.9 9.1-9.1 16.2-16.8 13.8q-8.5-3.3-10-14.8c-0.2-1.4-0.2-2.6 0-3.7q0-0.2 0.1-0.3c1.6 12 21 8.4 19.3-8.5-2.3-22.6-31.4-5.1-25.9 21.3 5.4 25.9 29.8 24.3 39.1 6.3 18.7-36.2-12.3-75.4-38.3-92.5 7.3 4.1 14.4 8.6 21.2 13.2 29.6 19.7 56.4 45.4 86.7 63.8q10.1 6.1 20.3 11.4c11.3 5.7 22.2 12 33.8 16.5 19 7.3 39.8 10.5 59.7 5.9 22.3-5.1 39-21.8 57.8-36.6 6.5-5.1 17.3-15.7 25-15.9 4.1-0.1 11.1 4.2 9.8 10.6-1 4.7-6.8 7-4.1 12.5 1.9 3.8 6.7 5.6 10 4.9 8.1-1.7 13.2-12.6 11.6-22.4q-0.3-1.3-0.7-2.5 0.2 0.1 0.3 0.2c2.2 1.8 3.9 5.8 5.1 8.5 0.8 1.7 1.7 3.6 2.1 5.4 0.4 2.1 2.9 6.3 5 6 4.2-0.7 0.9-8.1-0.1-10.5-0.9-2.2-2.9-5.1-5.1-8-1.8-2.3 0.3-5.9 2.6-4.5q0.7 0.5 1.4 0.9c8.6 6.1 11.6 14.6 17 24.2 3.7 6.6 12.1 7.3 11.1-3.6z" />
          <path id="&lt;Compound Path&gt; copy 2" className="s0" d="m647.9 129c5.4-9.6 8.4-18.1 17.1-24.2q0.6-0.5 1.3-0.9c2.3-1.4 4.4 2.2 2.6 4.5-2.2 2.8-4.2 5.8-5.1 8-0.9 2.4-4.3 9.7-0.1 10.4 2.1 0.4 4.6-3.8 5.1-5.9 0.4-1.9 1.2-3.8 2-5.4 1.2-2.7 3-6.8 5.1-8.5q0.1-0.1 0.3-0.3-0.4 1.3-0.6 2.6c-1.7 9.8 3.5 20.7 11.5 22.4 3.3 0.6 8.1-1.2 10-5 2.7-5.4-3.1-7.7-4.1-12.4-1.3-6.4 5.7-10.7 9.8-10.6 7.7 0.2 18.5 10.7 25 15.8 18.8 14.8 35.5 31.6 57.8 36.7 19.9 4.6 40.7 1.3 59.7-5.9 11.6-4.5 22.5-10.8 33.8-16.6q10.3-5.3 20.3-11.3c30.4-18.4 57.1-44.1 86.7-63.9 6.8-4.5 13.9-9.1 21.2-13.1-26 17-57 56.3-38.3 92.5 9.3 18 33.8 19.6 39.1-6.3 5.5-26.5-23.6-43.9-25.9-21.4-1.7 16.9 17.7 20.6 19.3 8.6q0.1 0.1 0.1 0.2c0.2 1.2 0.2 2.4 0.1 3.8q-1.6 11.5-10.1 14.7c-7.7 2.5-14.9-4.6-16.8-13.7-2.3-11.5 1.9-25.1 6-35.1 7.2-17.6 18.6-32.1 32.3-41.3q3.1-1.7 6.3-3.1c0.5-0.2 0.8-0.6 1-1.1 3.4-1.7 6.9-3.1 10.5-4.1 33.7-9.6 76.7 14 71.5 65.2-2.5 24.2-17.7 47.9-37.4 50.9-8.5 1.3-17.2-2.5-23.7-9.4-5.8-6.1-9.9-14.7-11.4-24.1-1.8-11.6 1.8-22.4 8.5-30.3 5.6-6.7 13.4-9.8 18 0 3.7 7.8-2.4 17.1 2 24.7 2.6 4.5 7 6.6 11.4 6.5 10.7-0.2 15.3-12.5 13.6-24.7-4-30.5-33.9-27.5-47.3-9.8-6.3 8.4-10.5 18.8-10.8 30.7-0.7 29 21.9 51.8 42.7 56.5 24.4 5.6 50.1-7.8 61.7-36.5 4.9-12.4 6.8-25.4 6.1-38.1q0.9 1.7 1.8 3.4 0.5 1.3 0.9 2.6c6.3 16.7 18.8 38.2 35.8 32.7 4.9-1.6 10-6.4 9.6-13.5-0.2-5.3-3.9-10.1-8.2-9.4-2.5 0.3-3.5 2.7-5.5 4.3-5.1 4.4-9.1 5.8-15.1 2.2-1.8-1-3.3-2.6-4.5-4.5-3.7-5.6-7-11.6-10.2-17.8-2.9-7.8-5.6-15.9-8.9-23-3.8-11.5-9.9-22-18-30.5-24.5-25.9-57.5-27.9-87.1-16.8-32.6 12.3-60.2 37.9-90 57.8-30.5 20.4-62.7 37.3-96.2 47.7-18.4 5.7-38.7 6.6-55.7-3.2-3.1-1.7-2.5-7.5 0.9-8.2 2.1-0.4 4.3-0.4 6.4 0.1 4.7 0.9 9.2 3.2 13.9 4.2 8.4 1.6 17.4-1.5 23.9-8.4 5.8-6 9.8-17 5.8-25.1-2-4.4-6.1-7-10.1-6.5-4 0.5-7.6 4.1-9 8.9-1.4 4.9-0.5 10.6-2.3 15.3-2.3 6.1-8.4 8.4-13.7 7.5-5.2-0.9-10-4.2-14.9-6.7-4-2-8.5-3.4-12.7-2.5q-1.4 0.3-2.8 1c-5.4 2.8-8.8 10.6-8.5 18.1 0.1 4.3 1.3 8.3 3.1 11.9-4.4-3.1-8.8-6.6-13-10.2-7-6.6-13.5-14.1-20.3-21.2-18.5-19.2-40.9-27.5-64.3-17.2-9.4 4.2-28.7 17-30.1 31.7-1 10.9 7.4 10.2 11.1 3.6z" />
          <path id="&lt;Path&gt; copy" className="s0" d="m638.5 76.5c-6.6-6.2-26.5 17.5-27.6 19.8 3.1-21.3-9.9-55.5-9.9-53.8 0-1.7-13 32.5-9.9 53.8-1.1-2.3-21-26-27.6-19.8-7.4 6.8 4.6 14.6 8 17.8 1.9 1.7 4.1 3.7 6.4 5.8 8.7 8 15.1 19.5 18.2 32.6 2.6 10.9 4.9 21.5 4.9 21.5 0 0 2.3-10.6 4.8-21.5 3.1-13.1 9.6-24.6 18.3-32.6 2.3-2.1 4.4-4.1 6.4-5.8 3.4-3.2 15.3-11 8-17.8z" />
          <path id="&lt;Compound Path&gt;" className="s0" d="m596 141.7c-3.4-17.3-16.5-46-33.2-40.4-1.1 0.4-1.6 2.7-0.6 3.7 9.8 8.8 33.8 36.7 33.8 36.7z" />
          <path id="&lt;Compound Path&gt;" className="s0" d="m639.8 105c1-1 0.5-3.3-0.6-3.7-16.7-5.6-29.8 23.1-33.2 40.4 0 0 24-27.9 33.8-36.7z" />
        </g>
      </svg>
    </section>
  )
}

export default Products