import React from 'react'

const IntroOverlay = () => {
  return (
    <div className='pointer-events-none'>
      <div className='top w-screen h-[55vh] absolute'>
        <div className='overlay-top'></div>
        <div className='overlay-top'></div>
        <div className='overlay-top'></div>
      </div>
      <div className='bottom w-screen h-[45vh] absolute bottom-0 z-30'>
        <div className='overlay-bottom'></div>
        <div className='overlay-bottom'></div>
        <div className='overlay-bottom'></div>
      </div>
    </div>
  )
}

export default IntroOverlay