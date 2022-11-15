import React from 'react'
import Card from './Card'

const Adventure = () => {
  return (
    <section className="h-full py-[3rem] md:py-[5rem] mx-auto">
        <div className='w-full mx-auto px-8 md:px-12 max-w-[1220px]'>
            <div>
                <h1 className='font-bold text-center text-2xl md:text-5xl text-black'>Inspiration for your next adventure</h1>
            </div>

            <div className='mt-[2rem] md:mt-[3rem]'>
               <Card />
            </div>
        </div>
    </section>
  )
}

export default Adventure