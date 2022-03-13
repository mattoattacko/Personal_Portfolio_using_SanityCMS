import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { SiUpwork } from 'react-icons/si'


const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href='https://www.linkedin.com/in/matthew-mcquain/' target='_blank' rel='noreferrer'>
          <AiFillLinkedin />
        </a>
      </div> 
      <div>
        <a href='https://github.com/mattoattacko' target='_blank' rel='noreferrer'>
          <FiGithub />
        </a>
      </div> 
      <div>
        <a href='https://www.upwork.com/freelancers/~01f6206ecf6bf14e26' target="_blank" rel='noreferrer'> 
          <SiUpwork /> 
        </a>
      </div>
    </div>
  )
}

export default SocialMedia