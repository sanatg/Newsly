import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import NewsScreen from './NewsScreen';
import WeatherScreen from './WeatherScreen';
import TopTabNavigator from './MaterialTopTabNavigator';
export const AppTabNavigator = createBottomTabNavigator({
  News: {
    screen: TopTabNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/newspapericon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "News",
    }
  },
  Weather: {
    screen: WeatherScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/cloudicon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Weather",
    }
  },
});