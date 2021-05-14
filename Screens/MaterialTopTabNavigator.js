import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Header,Icon} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';
import NewsScreen from './NewsScreen';
import BusinessNewScreen from './BusinessNewScreen';
import SportsNewScreen from './SportsNewScreen';
function HomeScreen() {
  return (
    <View>
<NewsScreen/>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
     <BusinessNewScreen/>
    </View>
  );
}
function SettingsScreen2() {
  return (
    <View>
      <SportsNewScreen/>
    </View>
  );
}

/*const Tab = createMaterialTopTabNavigator();

export default class MyTab extends React.Component {
  //function MyTabs()
  //{
  render()
  {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
  }
*/

const Tab = createMaterialTopTabNavigator();
export default class TopTabNavigator extends React.Component {  
  BellIcon=()=>{
    return (
      <View>
        <Icon name='logout'color='#fff'
          onPress={() =>    firebase.auth().signOut().then(() => {
            // Sign-out successful.
            this.props.navigation.navigate('WelcomeScreen')
          }).catch((error) => {
            // An error happened.
                      var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage);
          })}/>
      </View>
    )
  }

  render() {
    return (
      <NavigationContainer>
        <Header
  placement="left"
  centerComponent={{ text: 'Newsly', style: { color: '#fff',fontSize: 20,} }}
  rightComponent={<this.BellIcon/>}
/>
        <Tab.Navigator>
          <Tab.Screen name="Tech News" component={HomeScreen} />
          <Tab.Screen name="Business" component={SettingsScreen} />
          <Tab.Screen name="Sports" component={SettingsScreen2} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
