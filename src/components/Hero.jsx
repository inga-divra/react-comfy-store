import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4]

const Hero = () => {
    return <div className='grid lg:grid-cols-2 gap-24 items-center'>
        <div>
            <h1 className='capitalize max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
                we are changing the way people shop
            </h1>
            <p className='mt-8 max-w-xl text-lg leading-8'>
                Discover a new way of shopping where comfort meets style. We aim to make every step,
                from browsing to buying, seamless and enjoyable. Join us on this journey to redefine
                home furnishing, one cozy piece at a time.
            </p>
            <div className='mt-10'>
                <Link to='/products' className='btn btn-primary uppercase'>
                    Our products
                </Link>
            </div>
        </div>
        <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
            {carouselImages.map((image) => {
                return <div key={image} className='carousel-item'>
                    <img className='rounded-box h-full w-80 object-cover' src={image} alt='hero-carousel-img' />
                </div>
            })}
        </div>
    </div>
}

export default Hero