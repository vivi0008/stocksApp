import * as React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./screens/HomeScreen";
import TypeScreen from "./screens/TypeScreen";
import SafetyScreen from "./screens/SafetyScreen";
import OtherToolScreen from './screens/OtherToolScreen'
import ListNameScreen from './screens/ListNameScreen'

import TypeDetails from "./components/TypeDetails";
import SafetyDetails from "./components/SafetyDetails";
import KeepToolDetails from './components/KeepToolDetails'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
        //Props to open/close the drawer
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => toggleDrawer()}>
                {/*Donute Button Image */}
                <Image
                    source={{
                        uri:
                            "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
                    }}
                    style={{ width: 25, height: 25, marginLeft: 5 }}
                />
            </TouchableOpacity>
        </View>
    );
};

function firstScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="HomePage">
            <Stack.Screen
                name="HomePage"
                component={HomeScreen}
                options={{
                    title: "หน้าหลัก", //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: "black",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontFamily: "kanitRegular",
                    },
                }}
            />
        </Stack.Navigator>
    );
}

function secondScreenStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="TypePage"
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerStructure navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: "black", //Set Header color
                },
                headerTintColor: "#fff", //Set Header text color
                headerTitleStyle: {
                    fontWeight: "bold", //Set Header text style
                    fontFamily: "kanitRegular",
                },
            }}
        >
            <Stack.Screen
                name="TypePage"
                component={TypeScreen}
                options={{
                    title: "ประเภท", //Set Header Title
                }}
            />
            <Stack.Screen
                name="TypeDetails"
                component={TypeDetails}
                options={{
                    headerShown: false,
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}

function thirdScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="SafetyPage">
            <Stack.Screen
                name="SafetyPage"
                component={SafetyScreen}
                options={{
                    title: "อุปกรณ์เซฟตี้", //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: "black",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontFamily: "kanitRegular",
                    },
                }}
            />

            <Stack.Screen
                name="SafetyDetails"
                component={SafetyDetails}
                options={{
                    headerShown: false,
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}

function fourthScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="OtherPage">
            <Stack.Screen
                name="OtherPage"
                component={OtherToolScreen}
                options={{
                    title: "อุปกรณ์อื่น ๆ", //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: "black",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontFamily: "kanitRegular",
                    },
                }}
            />

            <Stack.Screen
                name="KeepDetails"
                component={KeepToolDetails}
                options={{
                    headerShown: false,
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}

function fivethScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="ListPage">
            <Stack.Screen
                name="ListPage"
                component={ListNameScreen}
                options={{
                    title: "รายชื่อบริษัทที่ให้บริการ", //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: "black",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontFamily: "kanitRegular",
                    },
                }}
            />
        </Stack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: "black",
                    itemStyle: { marginVertical: 5 },
                }}
            >
                <Drawer.Screen
                    name="HomePage"
                    options={{ drawerLabel: "คลังสินค้า" }}
                    component={firstScreenStack}
                />
                <Drawer.Screen
                    name="SecondPage"
                    options={{ drawerLabel: "ประเภทคลังสินค้า" }}
                    component={secondScreenStack}
                />
                <Drawer.Screen
                    name="ThirdPage"
                    options={{ drawerLabel: "อุปกรณ์เซฟตี้" }}
                    component={thirdScreenStack}
                />
                <Drawer.Screen 
                name="fourthPage"
                options={{drawerLabel:"อุปกรณ์อื่น ๆ"}}
                component={fourthScreenStack}
                />
                <Drawer.Screen 
                name="fivethPage"
                options={{drawerLabel:"รายชื่อบริษัทที่ให้บริการ"}}
                component={fivethScreenStack}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;
