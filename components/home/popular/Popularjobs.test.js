import React from 'react';
import 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import Popularjobs from './Popularjobs';


describe('Popularjobs', () => {
    it('Correct popular jobs title', () => {
        const screen = render(<Popularjobs />);
        const title = screen.queryByText("Popular jobs");
        expect(title).toBeDefined();
    });

    it('Correct showall button', () => {
        const screen = render(<Popularjobs />);
        const title = screen.queryByText("Show all");
        expect(title).toBeDefined();
    });

    it('Correct popular cards list', () => {
        const screen = render(<Popularjobs />);
        expect(screen.queryByTestId('popularCardsContainer')).toBeDefined();
    });
})