import React from 'react'
import Particle from '../Components/Common/Particle'

function Error() {
  return (
    <div className='flex items-center justify-center h-full w-full'>
        <Particle/>
        <h1 className='text-center font-bold text-5xl text-green-400'>Page Not Found</h1>
    </div>
  )
}

export default Error