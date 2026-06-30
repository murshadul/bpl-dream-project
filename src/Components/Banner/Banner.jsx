import React from 'react';
import bgImg from '../../assets/bg-shadow.png'
import mainImg from '../../assets/banner-main.png'
const Banner = () => {
    return (
        <>
            <div
            className=''
            
  style={{ 
    
    backgroundImage: `
    radial-gradient(circle at bottom left, rgba(88,101,242,.6), transparent 35%),
      radial-gradient(circle at top right, rgba(255,153,153,.5), transparent 35%),
    url(${bgImg})`,
    backgroundColor: "#0B0B0F",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
    borderRadius:"10px"
  }}>
  
   <div
   className='flex flex-col justify-center items-center'>
     <img className='w-[150px] mt-4' src={mainImg} alt="" /></div>
     <p></p>

</div>
        </>
    );
};

export default Banner;