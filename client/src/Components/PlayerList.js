import React from 'react';
import PlayerCard from './PlayerCard';
import { ParentStyle } from './Styles';

export default class PlayerList extends React.Component {
    render () {
        return (
            <ParentStyle>
                {
                    this.props.player.map(play => <PlayerCard key={play.name} player={play} /> ) 
                }
            </ParentStyle>
        );
    }
}