import React from 'react'
import image1 from '../assets/image1.avif'
import Footer from '../components/Footer'
import nn1 from "../assets/n&n1.jpg"
import nn2 from "../assets/n&n2.jpeg"
import nn3 from "../assets/n&n3.jpeg"
import mbs1 from "../assets/mbs1.jpeg"
import mbs2 from "../assets/mbs2.jpeg"
import mbs3 from "../assets/mbs3.jpeg"
import mbs4 from "../assets/mbs4.jpeg"
import sw1 from "../assets/sw1.jpeg"
import sw3 from "../assets/sw3.jpeg"
import qhr1 from "../assets/qhr1.jpeg"
import qhr2 from "../assets/qhr2.jpeg"
import qhr3 from "../assets/qhr3.jpeg"
import qhr4 from "../assets/qhr4.jpeg"
import ar2 from "../assets/ar2.jpeg"
import ar3 from "../assets/ar3.jpeg"
import ar4 from "../assets/ar4.jpeg"
import mm1 from "../assets/mm1.jpeg"
import mm2 from "../assets/mm2.jpeg"
import g1 from "../assets/g1.jpeg"
import m2 from "../assets/m2.jpeg"
import m3 from "../assets/m3.jpeg"
import m4 from "../assets/m4.jpeg"
import { Link } from 'react-router-dom'


const Dashboard = () => {
  function clickHandler (event){
    const src = event.currentTarget.querySelector('img').src;
    const productName = event.currentTarget.querySelector('h1').textContent;
    console.log(productName);
    console.log(src);

  }
  return (
    <div className='bg-richblack-900 '>
      <div className='flex text-white text-3xl ml-[135px] mr-[135px]'>
        <div className='mt-10'>
          <h1 className='text-richblack-200'>New and noteworthy</h1>
          <div className='flex flex-row gap-5 '>
            <Link to="/productPage" >
              <div onClick={clickHandler}>
                <img src={image1} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer'/>
                <h1 className='text-richblack-100 text-xl mt-5 '>Smart Locks</h1>
              </div>
            </Link>
            <Link to="/productPage" >
              <div onClick={clickHandler}>
                <img src={nn1} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Water Purifier</h1>
              </div>
            </Link>
            <Link to="/productPage" >
              <div onClick={clickHandler}>
                <img src={nn2} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Home Painting</h1>
              </div>
            </Link>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={nn3} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Furniture Assembly</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex text-white text-3xl ml-[135px] mr-[135px]'>
        <div className='mt-10'>
          <h1 className='text-richblack-200'>Most booked services</h1>
          <div className='flex flex-row gap-5 '>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={mbs1} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Bathroom Cleaning</h1>
              </div>
            </Link>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={mbs2} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Sofa Cleaning</h1>
              </div>
            </Link>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={mbs3} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>AC Service</h1>
              </div>
            </Link>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={mbs4} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Pedicure</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex text-white text-3xl ml-[135px] mr-[135px]'>
        <div className='mt-10'>
          <h1 className='text-richblack-200'>Salon for women</h1>
          <div className='flex flex-row gap-5 '>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={sw1} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Waxing</h1>
              </div>
            </Link>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={mbs4} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Pedicure</h1>
              </div>
            </Link>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={sw3} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Facial & Cleanup</h1>
              </div>
            </Link>

          </div>
        </div>
      </div>
      <div className='flex text-white text-3xl ml-[135px] mr-[135px]'>
        <div className='mt-10'>
          <h1 className='text-richblack-200'>Quick home repairs</h1>
          <div className='flex flex-row gap-5 '>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={qhr1} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Tap Repair</h1>
              </div>
            </Link>
            <Link to="/productPage">
              <div onClick={clickHandler} >
                <img src={qhr2} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Fan Repair</h1>
              </div>
            </Link>
            <Link to="/productPage">
              <div onClick={clickHandler} >
                <img src={qhr3} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Switch/Socket Replacement</h1>
              </div>
            </Link>
            <Link to="/productPage">
              <div onClick={clickHandler} >
                <img src={qhr4} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Drill & Hang</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex text-white text-3xl ml-[135px] mr-[135px]'>
        <div className='mt-10'>
          <h1 className='text-richblack-200'>AC & appliance repair</h1>
          <div className='flex flex-row gap-5 '>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={mbs3} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>AC Repair</h1>
              </div>
            </Link>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={ar2} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Washing Machine Repair</h1>
              </div>
            </Link>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={ar3} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>refrigerator Repair</h1>
              </div>
            </Link>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={ar4} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Microwave Repair</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex text-white text-3xl ml-[135px] mr-[135px]'>
        <div className='mt-10'>
          <h1 className='text-richblack-200'>Message for men</h1>
          <div className='flex flex-row gap-5 '>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={mm2} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Pain Relief</h1>
              </div>
            </Link>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={mm1} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Stress Relief</h1>
              </div>
            </Link>

          </div>
        </div>
      </div>

      <div className='flex text-white text-3xl ml-[135px] mr-[135px] mb-[100px]'>
        <div className='mt-10'>
          <h1 className='text-richblack-200'>Salon for kids & men</h1>
          <div className='flex flex-row gap-5 '>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={g1} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Haircut Grooming</h1>
              </div>
            </Link>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={m2} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Facial & Cleanup</h1>
              </div>
            </Link>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={m3} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Pedicure & Menicure</h1>
              </div>
            </Link>
            <Link to="/productPage">
              <div onClick={clickHandler}>
                <img src={m4} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
                <h1 className='text-richblack-100 text-xl mt-5 '>Hair Color & Hair Spa</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Dashboard
