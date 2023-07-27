import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Splash} from '@screens/Splash';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Splash" component={Splash} />
    </Navigator>
  );
}
