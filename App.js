import React, { useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import MainApp from "./src";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IntroScreen from "./src/screens/IntroScreen";
import { AppProvider, AppContext } from "./src/context/AppContext";

const Render = () => {
    const app = useContext(AppContext)
    return (
        <React.Fragment>
            {app?.appIntro?<MainApp />:<IntroScreen/>}
        </React.Fragment>
    );
};

const App = () => {
    const [fontsLoad, setFontsLoad] = useState(false);
    const [showApp, setShowApp] = useState(false);
    const app = useContext(AppContext);
    const getFonts = async () => {
        await Font.loadAsync({
            kanitRegular: require("./assets/fonts/Kanit-Regular.ttf"),
            kanitBold: require("./assets/fonts/Kanit-Bold.ttf"),
            kanitSemiBold: require("./assets/fonts/Kanit-SemiBold.ttf"),
        });
        setFontsLoad(true);
    };

    const checkFirst = async () => {
        await AsyncStorage.getItem("first_time").then((value) => {
            setShowApp(!!value);
            if (!!value) {
                app.setAppIntro(false);
            }
        });
    };

    if (fontsLoad) {
        checkFirst()
        return (
            <AppProvider>
                <Render />
            </AppProvider>
        );
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoad(true)}
                onError={console.warn}
            />
        );
    }
};

export default App;
