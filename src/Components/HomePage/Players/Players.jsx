import React from 'react';
import { use } from 'react';
import AvailablePlayers from '../../AvailablePlayers/AvailablePlayers';

const Players = ({PlayersPromise}) => {
    const data=use(PlayersPromise);
    const Players=data;
  
    return (
        <div className='container mx-auto'>
            <AvailablePlayers Players={Players}></AvailablePlayers>
        </div>
    );
};

export default Players;