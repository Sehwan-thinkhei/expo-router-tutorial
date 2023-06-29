import React from 'react';
import 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import Nearbyjobs from './Nearbyjobs';


describe('Nearbyjobs', () => {
    it('Correct nearby jobs title', () => {
        const screen = render(<Nearbyjobs />);
        const title = screen.queryByText("Nearby job");
        expect(title).toBeDefined();
    });

    it('Correct showall button', () => {
        const screen = render(<Nearbyjobs />);
        const title = screen.queryByText("Show all");
        expect(title).toBeDefined();
    });
})