import React from 'react'
import { NavigationDots, SocialMedia } from '../components'


// AppWrap is a higher order component
// It wraps around our sections, giving them ids we can scroll to, class names, and social media icons
const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    
    <div id={idName} className={`app__container ${classNames}`}> 
      <SocialMedia />

      <div className='app__wrapper app__flex'>
        <Component />

        <div className='copyright'>
          <p className='p-text'>McQuain ©2023</p>
          
        </div>
      </div>

      <NavigationDots active={idName}/> 
      {/* "idName" so we know what section we are currently on */}

    </div>
  )
}

export default AppWrap