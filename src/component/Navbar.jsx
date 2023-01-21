import React, { useState } from 'react';
import './Navbar.css'
import { HiOutlineHome } from "react-icons/hi";
import { SlUser } from "react-icons/sl";
import { SlBookOpen } from "react-icons/sl";
import { BsPencil } from "react-icons/bs";
import { SlGraph } from "react-icons/sl";
import { TfiHeart } from "react-icons/tfi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { DiPhotoshop } from "react-icons/di";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2"
import { IoCloseOutline } from "react-icons/io5"


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [show, setShow] = useState(false)
  const [view, setView] = useState(true)

  const handleShowNavbar = () => {
    setShowNavbar(true)
    setShow(true)
    setView(false)
  }
  const handleCloseNavbar = () => {
    setShowNavbar(false)
    setShow(false)
    setView(true)
  }

  return (
    <div className='navContainer d-flex'>
      {view && <button className='open' onClick={handleShowNavbar}>
        <HiOutlineBars3BottomLeft />
      </button>}
      {show && <button className='open' onClick={handleCloseNavbar}>
        <IoCloseOutline />
      </button>}
      <div className={`navbars  ${showNavbar && 'active'}`}>

        <ul>
          <li>
            <HiOutlineHome />
            <a href="">Home</a>
          </li>

          <li>
            <SlUser />
            <a href="">User Photos</a>
          </li>

          <li>
            <SlBookOpen />
            <a href="">Documentation</a>
          </li>

          <li>
            <BsPencil />
            <a href="">Change Log</a>
          </li>

          <li>
            <SlGraph />
            <a href="">Stats & Graphs</a>
          </li>

          <li>
            <TfiHeart />
            <a href="">Donate</a>
          </li>

          <li>
            <AiOutlineCopyrightCircle />
            <a href="">Copyright Notice</a>
          </li>

          <li>
            <DiPhotoshop />
            <a href="">PhotoShop Extention</a>
          </li>

        </ul>
      </div>

    </div>
  );
}

export default Navbar;
