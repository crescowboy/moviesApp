import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useMovies} from './presentation/hooks/useMovies';
import {Navigation} from './presentation/navigation/Navigation';

export const App = () => {
  const {} = useMovies();
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};