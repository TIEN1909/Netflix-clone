import React, { useEffect, useState } from 'react'
import NETFLIX from './assets/netflix-logo.png'
import './nav.css'
function Nav() {
    const [show, setShow] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 100){
                setShow(true)
            }else setShow(false)
        });
        // return()=>{
        //     window.removeEventListener('scroll')
        // }
    },[])
  return (
    <div className={`nav ${show && "show__black"}`} >
        <img 
            className='nav__logo'
            src={NETFLIX}
            alt="netflix-logo"
        />
        <img
            className='nav__avt'
            src='https://www.designmantic.com/blog/wp-content/uploads/2016/07/Netflix-Revamps-Logo.jpg'
            alt="netflix-avt"
        />
    </div>
  )
}

export default Nav