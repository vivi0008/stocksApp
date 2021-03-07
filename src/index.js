import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './screens/HomeScreen'
import RoomTypeScreen from './screens/RoomTypeScreen'
import SafetyScreen from './screens/SafetyScreen'
import KeepToolScreen from './screens/KeepToolScreen'
import ListNameScreen from './screens/ListNameScreen'

const navigator = createStackNavigator(
    {
        Home:{
            screen:HomeScreen,
            navigationOptions:{
                headerShown:false
            }
        },
        Type:{
            screen:RoomTypeScreen,
            navigationOptions:{
                headerShown:false
            }
        },
        Safety:{
            screen:SafetyScreen,
            navigationOptions:{
                headerShown:false
            }
        },
        Keep:{
            screen:KeepToolScreen,
            navigationOptions:{
                headerShown:false
            }
        },
        List:{
            screen:ListNameScreen,
            navigationOptions:{
                headerShown:false
            }
        }
    },{
        initialRouteName:'Home',
    }
)

export default createAppContainer(navigator)