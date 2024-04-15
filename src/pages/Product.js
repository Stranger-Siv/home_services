import React from "react";
import Footer from "../components/Footer";
import image from "../assets/ar2.jpeg"
import { MdOutlineShoppingCart } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Product = () => {
    return (
        <div className="relative  bg-richblack-900 ">
            <div className="flex flex-row gap-[120px] mt-10 mr-[135px] h-[600px]">
                <div className="flex flex-col h-[1200px]">
                    <h1 className=" text-richblack-100 ml-[135px] text-4xl">Smart Locks</h1>
                    <button className="border-2  text-richblack-100 text-md w-[140px] py-[7px] px-[9px] ml-[135px] mt-[80px] rounded-lg ">View Service</button>
                </div>
                <img src={image} className="w-[850px] h-[550px] rounded-lg" />
            </div>
            <div className="flex flex-row">
                <div className="  text-richblack-100 rounded-lg ml-[31%] h-[600px] mr-7">
                    <div className="border-[1px] text-white h-[80%] border-b-0 rounded-lg rounded-b-none p-6">
                        <div className="flex flex-row gap-20">
                            <div>
                                <h1 className=" text-richblack-100 text-500 text-3xl ">Full Home Painting</h1>
                                <h2 className="text-500 mt-6 text-2xl">Full home painting & <br /> waterproofing</h2>
                                <h2 className="text-lg mt-2">Ratings 4.0  </h2>
                                <h2 className="text-md ">Starts at $99</h2>

                                <p className="mt-10"> - Full home painting with our <br />most  expert employees quick <br /> and cost effectively</p>
                            </div>
                            <div>
                                <img src={image} className="w-[140px] h-[140px] rounded-lg mt-10 relative z-0" />
                                <button className="border-2  text-richblack-100  text-md w-[80px] py-[5px] px-[5px] rounded-lg ml-8 mt-2 z-10 ">Add</button>
                            </div>
                        </div>
                        
                        
                        <div className="mt-10">------------------------------------------------------------------</div>
                    </div>
                </div>
                <div>
                    <div className="border-[1px] text-white h-[30%] w-[300px] rounded-lg p-6 ">
                        <MdOutlineShoppingCart className="w-[60px] h-[50px] ml-[95px] mt-7"/>
                        <h1 className="ml-[45px] mt-2">No items in your cart</h1>
                    </div>

                    <div className="border-[1px] text-white h-[30%] w-[300px] rounded-lg p-6 mt-6">
                        <h1 className="text-xl mb-5">HS Promise</h1>
                        <h1 className="text-md"> +- Verified Professionals</h1>
                        <h1 className="text-md"> +-  Hassle Free Booking</h1>
                        <h1 className="text-md"> +-  Transparent Pricing</h1>

                    </div>
                </div>
            </div>


            <Footer />
        </div>

    )
}

export default Product