import React from 'react';

import Card from '../Ui/Card';

const AvailablePlayers = ({Players,setCoin,coin,setSelectedPlayers,selectedPlayers}) => {
//  console.log(Players);
    return (
       

 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
{
    Players.map((player,index)=>{
        return <Card selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} player={player} coin={coin} setCoin={setCoin} key={index}></Card>
    })
}

            
        </div>

      
    );
};

export default AvailablePlayers;