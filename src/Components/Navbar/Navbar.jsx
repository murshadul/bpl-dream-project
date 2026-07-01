import React from 'react';
import logoImg from '../../assets/logo.png'
const Navbar = ({coin}) => {
    return (
        <div className=' container mx-auto'>
           <div className=" shadow-sm flex justify-between bg-gray-300 text-center items-center">
  <div className="">
    <a className="btn btn-ghost text-xl"><img className='w-1/2' src={logoImg} alt="" /></a>
  </div>
  <div className='flex justify-evenly gap-6'>
    <p className='font-bold text-{14px} text-black-200'>Home</p>
    <p className='font-bold text-{14px} text-black-200'>Fixture</p>
    <p className='font-bold text-{14px} text-black-200'>Team</p>
    <p className='font-bold text-{14px} text-black-200'>Schedule</p>
  </div>
  <div className="">
    <button className=" btn-ghost text-2xl font-bold">$
     {coin} Coin
    </button>
  </div>
</div>  
        </div>
    );
};

export default Navbar;