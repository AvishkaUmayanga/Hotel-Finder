import React, { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function Number({ n }) {
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const { number } = useSpring({
    from: { number: 0 },
    reset: isVisible, 
    number: isVisible ? n : 0,
    delay: 300,
    config: { mass: 1, tension: 20, friction: 15 },
  });

  return <animated.div ref={ref}>{number.to((val) => val.toFixed(0))}</animated.div>;
}



export default function FunFact() {
  return (
    <div className='w-full h-auto bg-cover border bg-funBg'>
      <div className='relative top-0 left-0 bottom-0 w-full h-full bg-[#17a3b8af]'>
        <div className=' 2xl:px-[200px] xl:px-[120px] lg:px-[100px] md:px-[50px] px-[30px]'>
            <div className='flex flex-col items-center gap-20 py-40 text-white max-md:py-24'>
              <div>
                <h3 className='text-3xl font-bold text-center lg:text-4xl'>Some fun facts</h3>
            </div>
            <div className='grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 max-lg:gap-y-20 max-md:gap-y-10'>
              <div className='flex flex-col gap-4 text-center'>
                <h3 className='text-3xl font-semibold max-md:text-2xl'><Number n={100000}/></h3>  
                <h5 className='text-xl max-md:text-lg'>Happy Customers</h5>
              </div>
              <div className='flex flex-col gap-4 text-center'>
                <h3 className='text-3xl font-semibold max-md:text-2xl'><Number n={100}/></h3>  
                <h5 className='text-xl max-md:text-lg'>Destination Places</h5>
              </div>
              <div className='flex flex-col gap-4 text-center'>
                <h3 className='text-3xl font-semibold max-md:text-2xl'><Number n={156}/></h3>  
                <h5 className='text-xl max-md:text-lg'>Hotels</h5>
              </div>
              <div className='flex flex-col gap-4 text-center'>
                <h3 className='text-3xl font-semibold max-md:text-2xl'><Number n={503}/></h3>  
                <h5 className='text-xl max-md:text-lg'>Restaurant</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
