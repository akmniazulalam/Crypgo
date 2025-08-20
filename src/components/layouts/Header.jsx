import React from 'react'
import logo from "/src/assets/Frame 13.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className='bg-primary'>
        <div className="max-w-[1200px] m-auto">
          <div className="py-8 flex items-center justify-between">
            <Link to={"/"}>
              <img src={logo} alt={"Frame 13.png"} />
            </Link>
            <div>
              <ul className="flex items-center gap-x-8">
                <Link to={"/"}><li className='font-dmSans font-medium text-base text-white'>Features</li></Link>
                <Link to={"/"}><li className='font-dmSans font-medium text-base text-white'>Benefits</li></Link>
                <Link to={"/"}><li className='font-dmSans font-medium text-base text-white'>Services</li></Link>
                <Link to={"/"}><li className='font-dmSans font-medium text-base text-white'>Why Crypgo</li></Link>
                <Link to={"/"}><li className='font-dmSans font-medium text-base text-white'>FAQs</li></Link>
              </ul>
            </div>
            <button className='py-[11px] px-5 bg-btnC rounded-[12px] font-dmSans font-semibold text-base text-primary cursor-pointer'>Get template</button>
          </div>
        </div>
      </section>
  )
}

export default Header