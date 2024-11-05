import React from 'react'
import Images from '../images'
const Header = () => {
  return (
   <>
  <header>
    <div className="container-fluid">
    <div className="d-flex align-items-center justify-content-between py-2">
    <div className="logo">
      <a href="javascript:void()">
      <img src={Images.logo  } alt="Youth Shining Association" />
      </a>
    </div>

    <nav>
      <ul className='d-flex'>
        <li><a href="#">About</a></li>
        <li><a href="#">Mission & Vision</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Legal Status</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    </div>
    </div>
  </header>
   </>
  )
}

export default Header
