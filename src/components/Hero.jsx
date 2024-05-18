import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../assets/hero/women.png'
import Image2 from '../assets/hero/shopping.png'
import Image3 from '../assets/hero/sale.png'
import Slider from 'react-slick';
const ImageList = [
    {
      id: 1,
      img: Image1,
      title: "Upto 50% off on all Men's Wear",
      description:
        "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Image2,
      title: "30% off on all Women's Wear",
      description:
        "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Image3,
      title: "70% off on all Products Sale",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "ease-in-out",
      pauseOnHover: false,
      pauseOnFocus: true,
    };

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
       <div className="h-[600px] w-[600px] bg-primary/40 absolute -top-1/2  right-0 rounded-3xl rotate-45 -z[8]">
        
       </div>
       <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
            {
                ImageList.map((item,index)=>(
                    <div className=' '>
                    <div className=' grid grid-cols-1 sm:grid-cols-3 ml-20'>
                    <div className='order-1 sm:order-2 relative z-10'>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl'>{item.title}</h1>
                        <p className='mb-3 text-inherit-200 text-slate-500'>{item.description}</p>
                        <button className='bg-gradient-to-r from-red-500 to-orange-500 border  mx-auto py-2 px-3 text-white rounded-lg'>Order Now</button>
                 
                    </div>
                    <div className='order-2 sm:order-1'>
                        <img src={item.img} alt="" className='w-[300px] h-[300px]' />
                    </div>
        
                </div>
                </div>
                ))
            }

        </Slider>
     
       </div>
    </div>
  )
}
