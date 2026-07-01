import React, { useState } from 'react';
import { use } from 'react';
import AvailablePlayers from '../AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({PlayersPromise,setCoin,coin}) => {
    const data=use(PlayersPromise);
    const Players=data;
 const [selectedPlayers,setSelectedPlayers]=useState([]);
    const [selectedType,setSelectedType]=useState("avaliable")
  
    return (

        <div className='container mx-auto'>
<div className="flex justify-between text-2xl m-6 items-center">
   {selectedType==="available"?<h2>
        Available Players
    </h2>:<h2>Selected Players(2/6)</h2>} 
    <div className="">
        <button
        onClick={()=>setSelectedType("available")}
        className={`btn rounded-r-none rounded-l-xl ${selectedType==="available"?"bg-[#FFD75A]":""}`}>Avaliable</button>
        <button
        onClick={()=>setSelectedType(
       "Selected"     
        )}
        className={`btn rounded-l-none rounded-r-xl ${selectedType==="Selected"?"bg-[#FFD75A]":""}`}>Selected(0)</button>
    </div>
</div>

            {selectedType==="Selected"?<SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>:<AvailablePlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} Players={Players} coin={coin} setCoin={setCoin}></AvailablePlayers>}
        </div>
    );
};

export default Players;