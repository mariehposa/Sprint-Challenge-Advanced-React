import React from 'react';
import { PlayerStyle } from './Styles';
import { LocalStorage } from '../Hooks/LocalStorage';

export default function PlayerCard(props) {
    const { name, country, searches } = props.player;
    const [playerName, setPlayerName] = LocalStorage('name', "");
    const [countryName, setCountryName] = LocalStorage('country', 'value')
    return (
        <PlayerStyle onClick={() => {
            setPlayerName(name);
            setCountryName(country);
        }}>
            <h2>Name: {name}</h2>
            <p>Country: {country}</p>
            <p>Searches: {searches}</p>
        </PlayerStyle>
    );
}