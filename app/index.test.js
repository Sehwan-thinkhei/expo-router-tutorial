import React from 'react';
import 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './index';

describe('Home', () => {
  it('Correct Home display', () => {
    const screen = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );
    const json = screen.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Correct left header button', () => {
    const screen = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );
    expect(screen.queryByTestId('leftHeaderBtn')).toBeDefined();
  });

  it('Correct right header button', () => {
    const screen = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );
    expect(screen.queryByTestId('rightHeaderBtn')).toBeDefined();
  });
});
