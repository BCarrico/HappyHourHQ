import React, {useState} from 'react';


import HeroImage from '../../images/Hero1600x500.png';
import HeroMobileImage from '../../images/Hero800x800.png'
function HeroHome() {

  const getWidth = () => window.innerWidth 
|| document.documentElement.clientWidth 
|| document.body.clientWidth;

function useCurrentWidth() {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  React.useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return width;
}

function getHeroImage(width){
  if (width >= 800){
    return HeroImage
  } else {
    return HeroMobileImage
  }
}
 
let width = useCurrentWidth()
  return (
    
    <div className='relative z-[-10]'>
      <div className="w-full min-h-[50vh] bg-cover bg-no-repeat p-0 flex flex-col flex-grow" style={{backgroundImage: `url(${getHeroImage(width)})`}}>
        <div className='absolute inset-0 bg-gray-800 bg-opacity-50'></div>
        {/* Hero content */}
                  <div className="absolute flex justify-center flex-col items-center inset-0 text-center pb-12 md:pb-16">
                    <h1 className="text-5xl md:text-6xl mt-[5%] font-extrabold text-gray-200 leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Less Searching, <span className="text-sky-400">More Happy!</span></h1>
                    <div className="max-w-3xl mx-auto">
                      <p className="text-xl text-gray-200 mb-8" data-aos="zoom-y-out" data-aos-delay="150">One stop for discovering the best deals and times for happy hours near you.</p>
                      <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                        <div>
                          <a className="btn text-white bg-sky-600 hover:bg-sky-900 w-2/5 mb-4 sm:w-auto sm:mb-0" href="">Explore Here</a>
                        </div>
                        <div>
                          <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-2/5 sm:w-auto sm:ml-4" href="/signup">Sign Up</a>
                        </div>
                      </div>
                    </div>
                  </div>
      </div>
    </div>
  );
}

export default HeroHome;