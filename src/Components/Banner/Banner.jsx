import React from 'react';
import bgImg from '../../assets/bg-shadow.png'
import mainImg from '../../assets/banner-main.png'
const Banner = () => {
    return (
        <>
            <div
            className='container mx-auto'
            
  style={{ 
    
    backgroundImage: `
    radial-gradient(circle at bottom left, rgba(88,101,242,.6), transparent 35%),
      radial-gradient(circle at top right, rgba(255,153,153,.5), transparent 35%),
    url(${bgImg})`,
    backgroundColor: "#0B0B0F",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50%",
    borderRadius:"10px"
  }}>
  
   <div
   className=' flex flex-col justify-center items-center text-center'>
     <img className='w-[150px] mt-4' src={mainImg} alt="" />
     <p className='text-2xl text-white font-semibold'>Assemble Your Ultimate Dream 11 Cricket Team</p>
     <p className='text-xl font-light text-white'>Beyond Boundaries Beyond Limits</p>
<button className="bg-lime-300 text-black font-bold px-6 py-3 rounded-xl border-4 border-gray-800 hover:bg-lime-400">
  Claim Free Credit
</button>

</div>
</div>
        </>
    );
};

export default Banner;