import React from 'react';

export default class PlayerCard extends React.Component {
    render () {
        const { name, country, searches } = this.props.player;
        return (
            <div>
                <h2>Name: {name}</h2>
                <p>Country: {country}</p>
                <p>Searches: {searches}</p>
            </div>
        );
    }
}