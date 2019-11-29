import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import PlayerCard from '../PlayerCard';

let tools;

beforeEach(() => {
    rtl.cleanup();

    const player = {
        name: "Maryam Adedeji",
        id: 123,
        country: "Nigeria",
        searches: "50"
    }

    tools = rtl.render(<PlayerCard player={player} />)
});

describe('PlayerCard Component', () => {
    it('can debug the output', () => {
        //tools.debug();
    });

    it('shows the correct user', () => {
        const elementWithMaryam = tools.queryByText(/Maryam/i)
        expect(elementWithMaryam).toBeInTheDocument();
    })

    it('shows correct searches', () => {
        const elementWithSearches = tools.queryByText(/50/i);
        expect(elementWithSearches).toBeInTheDocument();
    });

    it('shows correct country', () => {
        const elementWithCountry = tools.queryByText(/nigeri/i);
        expect(elementWithCountry).toBeInTheDocument();
    });
})