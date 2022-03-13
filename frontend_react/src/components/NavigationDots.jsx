import React from 'react'

const NavigationDots = ({ active }) => { //active tells us which section is active
  return (
    <div className='app__navigation'>
      {['Home', 'About', 'Skills', 'Work', 'Testimonial', 'Contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  )
}

export default NavigationDots