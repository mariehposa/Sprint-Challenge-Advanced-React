import React from 'react';
import PlayerCard from './Components/PlayerCard';

export default class PlayerList extends React.Component {
    render () {
        return (
            <div>
                {
                    this.props.player.map(play => <PlayerCard player={play} /> ) 
                }
            </div>
        );
    }
}