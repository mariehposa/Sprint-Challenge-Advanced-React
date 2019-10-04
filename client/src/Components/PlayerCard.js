import React from 'react';
import { PlayerStyle } from './Styles';
import { LocalStorage } from '../Hooks/LocalStorage';

export default function PlayerCard (props) {
    const { name, country, searches } = props.player;
    const [playerName, setPlayerName] = LocalStorage("name", "")
    return (
        <PlayerStyle onClick={() => setPlayerName(name)}>
            <h2>Name: {name}</h2>
            <p>Country: {country}</p>
            <p>Searches: {searches}</p>
        </PlayerStyle>
    );
}