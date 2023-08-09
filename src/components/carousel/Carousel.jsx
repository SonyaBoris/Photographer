"use client"

import React from "react";
import Slider from "react-slick";
import Image from "next/image";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './page.module.css';


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return ( 
    <div className={styles.container}>      
        <Slider {...settings}>
          <div>
            <Image src="https://sun9-19.userapi.com/impg/cFLSk_2d3JHHfnh2V_oCcky2dXuxzjVMRh_afg/qhYpqcNeD18.jpg?size=1440x2160&quality=95&sign=e2c31837d20f8391529525519645681e&type=album"  
            width={400} 
            height={600} 
            alt="фотография" />            
          </div>
          <div>
          <Image src="https://sun9-4.userapi.com/impg/QsceQWdLvxnichRN_EIKbKl2C_zLEM7Smb9T7A/cU9ZInRiXo0.jpg?size=1440x2160&quality=95&sign=59423b9642cf9e3ad4b0fe06f9cece39&type=album" 
            width={400} 
            height={600} 
            alt="фотография" />
          </div>
          <div>
          <Image src="https://sun9-36.userapi.com/impg/ADGrTbxCIpkcb9HGWAQmwnI-TkcDxmScxa_KuQ/ZsJzWWbJ4_o.jpg?size=1440x2160&quality=95&sign=09250f0581cac348f16a09d88f3350ad&type=album" 
            width={400} 
            height={600} 
            alt="фотография" />
          </div>
          <div>
          <Image src="https://sun9-69.userapi.com/impg/Sb8xberZJy0Uo-OZwVst5T9GeAfmpykyX-BOHQ/-y3E_mQQsO4.jpg?size=1440x2160&quality=95&sign=893b3cdb742c25e4f912c7473534a65d&type=album" 
            width={400} 
            height={600} 
            alt="фотография" />
          </div>
          <div>
          <Image src="https://sun9-44.userapi.com/impg/Kn2cE3CrZEAmCFaL2l8GzzRHsKJM4PkjXiaKcA/zXIY77iGz3s.jpg?size=1440x2160&quality=95&sign=6e590b1efe240724f803002071d3fb4e&type=album" 
            width={400} 
            height={600} 
            alt="фотография" />
          </div>
          <div>
          <Image src="https://sun9-75.userapi.com/impg/ElgjptW2NLcBye_8gLjyojdTzcKseloY-JdpMA/PB5DtKeEj4A.jpg?size=1280x1920&quality=95&sign=254cd87e678a7c306f41acb4a3d5d16d&type=album" 
            width={400} 
            height={600} 
            alt="фотография" />
           </div>
        </Slider>
      </div>
   );
}
 
export default Carousel;