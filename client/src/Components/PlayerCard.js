import React from 'react';
import { PlayerStyle } from './Styles';

export default class PlayerCard extends React.Component {
    render () {
        const { name, country, searches } = this.props.player;
        return (
            <PlayerStyle>
                <h2>Name: {name}</h2>
                <p>Country: {country}</p>
                <p>Searches: {searches}</p>
            </PlayerStyle>
        );
    }
}