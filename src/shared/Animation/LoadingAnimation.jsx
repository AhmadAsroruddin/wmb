/* eslint-disable no-unused-vars */
import React from 'react'
import Lottie from 'lottie-react'
import animation from '../../assets/loading-animation.json'

function LoadingAnimation() {
  return (
    <div className='d-flex justify-content-center my-5'>
        <span style={{ width : 300}}>
            <Lottie animationData={animation} />
        </span>
    </div>
  )
}

export default LoadingAnimation
