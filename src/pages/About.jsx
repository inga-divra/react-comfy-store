const About = () => {
    return <>
        <div className='flex flex-wrap gap-2 sm:gap-x-6 
        items-center justify-center'>
            <h1 className='text-4xl font-bold leading-none 
            tracking-tight sm:text-6xl'>
                We love
            </h1>
            <div className='stats bg-primary shadow'>
                <div className='stat'>
                    <div className='stat-title text-primary-content text-4xl 
                    font-bold tracking-widest'>
                        comfy
                    </div>
                </div>
            </div>
        </div>
        <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
            At Comfy, we believe that your home should be a sanctuary—a place where comfort meets style. Our mission is to provide high-quality, affordable furniture and home accessories that help you create the perfect living space. Whether you're furnishing your first apartment, updating your home, or just looking for that perfect piece to complete your room, we've got you covered.
        </p>
        <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
            Our stores and online platform are designed to provide a seamless shopping experience, where you can explore a wide range of products that blend style with practicality. We understand that your home reflects your personality, and we are here to help you express it with pieces that are both stylish and functional.
        </p>
    </>
};
export default About;