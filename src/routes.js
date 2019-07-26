import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      // Mandando como função faz com que de para enviar as props navigation
      // para o componente
      defaultNavigationOptions: ({ navigation }) => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: '#191920',
      },
      cardShadowEnabled: false,
    }
  )
);

export default Routes;
