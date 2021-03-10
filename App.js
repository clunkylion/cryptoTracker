import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CoinsStack from './src/components/coins/CoinStack';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritesStack from './src/components/favorites/FavoritesStack';
import colors from './src/resources/colors';
const Tabs = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          tintColor: '#fefefe',
          style: {
            backgroundColor: colors.blackPearl,
          },
        }}>
        <Tabs.Screen
          component={CoinsStack}
          name="Coins"
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={require('./src/assets/bank.png')}
              />
            ),
          }}
        />
        <Tabs.Screen
          component={FavoritesStack}
          name="Favorites"
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={require('./src/assets/star.png')}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
