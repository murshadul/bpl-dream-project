import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({selectedPlayers,setSelectedPlayers,coin,setCoin}) => {
    // console.log(selectedPlayers,"selectedPlayers");
    const handleDeleteSelectedPlayers=(players)=>{
const filterSelectedPlayers=selectedPlayers.filter((selectedPlay)=>selectedPlay.player_name!==players.player_name);
setSelectedPlayers(filterSelectedPlayers);
setCoin(coin + players.price)
    }
    return (
       <div >
      <div className="space-y-2">
           {
            selectedPlayers.map((players,index)=>{
                return <div key={index} className="flex justify-between items-center border p-3 rounded-2xl">
                
                <div className="flex gap-4 items-center  text-center ">
                <img className='w-[100px]' src={players.player_img} alt="players.player_name" />
                <div className="">
                <h2 className='text-2xl font-bold'>{players.player_name}</h2>
                <p className='text-l text-start font-light'>{players.player_type}</p>
                </div>
                </div>
                <button  onClick={()=>handleDeleteSelectedPlayers(players)}  className="btn bg-red-300 hover:bg-green-200"><MdDelete /></button>
                
                
                </div>
            })
        }
      </div>
       </div>
    );
};

export default SelectedPlayers;