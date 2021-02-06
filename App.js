
import React, { Component } from 'react';

import {
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';


import {
  createDrawerNavigator,
 

} from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";
import {

  createStackNavigator,

} from 'react-navigation-stack';

import Signin from  './components/signin';
import Signup from  './components/signup';
import ChangePassword from './components/changepassword';
import Clicks from './components/click';
import Review from './components/review';
import Bussiness from './components/bussiness';
import Special from './components/special';
import Request from './components/request';
import RequesItem from './components/requesitem';
import Payment from './components/payment';

class NavigationDrawerStructure extends Component {

  toggleDrawer = () => {
  
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          
          <Image
            source={require('./assets/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}


const FirstActivity_StackNavigator = createStackNavigator({
  
  First: {
    screen: Bussiness,
    navigationOptions: ({ navigation }) => ({
      title: 'Bussines',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});


const Eight_StackNavigator = createStackNavigator({
  
  Eight: {
    screen: Request,
    navigationOptions: ({ navigation }) => ({
      title: 'Bussines',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});
const six_StackNavigator = createStackNavigator({
  
  Six: {
    screen: Signup,
    navigationOptions: ({ navigation }) => ({
      title: 'Sign up',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});

const ten_StackNavigator = createStackNavigator({
  
  Six: {
    screen: Payment,
    navigationOptions: ({ navigation }) => ({
      title: 'Payment',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});


const seven_StackNavigator = createStackNavigator({
  
  Six: {
    screen: Special,
    navigationOptions: ({ navigation }) => ({
      title: 'Special',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});


const Screen2_StackNavigator = createStackNavigator({
  
  Second: {
    screen: Signin,
    navigationOptions: ({ navigation }) => ({
      title: 'Signin',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});


const Screen3_StackNavigator = createStackNavigator({

  Third: {
    screen: ChangePassword,
    navigationOptions: ({ navigation }) => ({
      title: 'ChangePassword',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});


const Fouth_StackNavigator = createStackNavigator({
  
  Fourth: {
    screen: Clicks,
    navigationOptions: ({ navigation }) => ({
      title: 'Clicks',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Fifth_StackNavigator = createStackNavigator({
  
  Fourth: {
    screen: Review,
    navigationOptions: ({ navigation }) => ({
      title: 'Review',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});
const Nine_StackNavigator = createStackNavigator({
  
  Nine: {
    screen: RequesItem,
    navigationOptions: ({ navigation }) => ({
      title: 'Review',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});
const DrawerNavigatorExample = createDrawerNavigator({

  Screen1: {

    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Signin',
    },
  },

  Screen2: {
 
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Signup',
    },
  },

  Screen3: {
    
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'ChangePassword',
    },
    
  },

  Screen4: {
    
    screen: Fouth_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Click',
    },
    
  },
  Screen5: {
    
    screen: Fifth_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Review',
    },
     
  },
  Screen6: {
    
    screen: six_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Bussines',
    },
  },
  Screen7: {
    
    screen: seven_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Special',
    },
  },
  Screen8: {
    
    screen: Eight_StackNavigator,
    navigationOptions: {
      drawerLabel: 'request',
    },
  },
  Screen9: {
    
    screen: Nine_StackNavigator,
    navigationOptions: {
      drawerLabel: 'requestItem',
    },
  },
  Screen10: {
    
    screen: ten_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Payment',
    },
  },
});
export default createAppContainer(DrawerNavigatorExample);
