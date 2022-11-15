import React from 'react'
import Frame1 from '../../assets/Frame1.svg'
import Frame2 from '../../assets/Frame2.svg'
import Frame3 from '../../assets/Frame3.svg'


const Mbtoken = () => {
  return (
    <section className='w-full bg-meta'>
        <div className='py-4 md:py-[10px] px-12 lg:px-[100px] flex flex-col space-y-4 md:space-y-0 gap-2 md:flex-row items-center justify-center md:justify-between'>
           <img src={Frame3} alt="mbtoken" />
           <img src={Frame2} alt="metamask" />
           <img src={Frame1} alt="opensea" />
        </div>
    </section>
  )
}

export default Mbtoken