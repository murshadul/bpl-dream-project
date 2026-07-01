import React from 'react';
import { use } from 'react';
import AvailablePlayers from '../AvailablePlayers';

const Players = ({PlayersPromise}) => {
    const data=use(PlayersPromise);
    const Players=data;
  
    return (

        <div className='container mx-auto'>
<div className="flex justify-between text-2xl m-6 items-center">
    <h2>
        Available Plyers
    </h2>
    <div className="">
        <button className="btn rounded-r-none rounded-l-xl bg-[#FFD75A]">Availabe</button>
        <button className="btn rounded-l-none rounded-r-xl">Selected</button>
    </div>
</div>

            <AvailablePlayers Players={Players}></AvailablePlayers>
        </div>
    );
};

export default Players;