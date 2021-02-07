import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './screens/HomeScreen'

const navigator = createStackNavigator(
    {
        Home:{
            screen:HomeScreen,
            navigationOptions:{
                headerShown:false
            }
        },
    },{
        initialRouteName:'Home',
    }
)

export default createAppContainer(navigator)