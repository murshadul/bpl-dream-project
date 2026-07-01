import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Card = ({player}) => {
    return (
          <div  className="card bg-base-100  shadow-sm">
  <figure>
    <img className='w-[100%]'
      src={player.player_img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUser/>{player.player_name}</h2>
   <div className='flex justify-between items-center'>
     <div className="flex gap-3 items-center">
        <FaFlag/><h2 className='text-xl text-gray-500 font-light'>{player.player_country}</h2>
     </div>
     <button className='btn btn-ghost'>{player.player_type}</button>
   </div>
  <div className="divider"></div>
<h2 className='font-bold'>Rating</h2>
<div className="flex justify-between font-bold items-center">
    <p>{player.batting_style}</p>
    <p className='text-gray-400 text-right'>{player.bowling_style}</p>
</div>

    <div className="card-actions justify-between items-center">
      <p>Price:{player.price}</p>
      <button className='btn'>Chose Player</button>
    </div>
  </div>
</div>
    );
};

export default Card;