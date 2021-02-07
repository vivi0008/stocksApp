import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntIcon from "react-native-vector-icons/AntDesign";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
const HomeScreen = () => {

    return (
        <LinearGradient
            colors={["black","#ffffff"]}
            style={styles.root}
        >
            <SafeAreaView style={styles.root}>
                <View style={styles.container}>
                    <Text style={styles.textHeader}>คลังสินค้า</Text>
                </View>
                <View style={styles.contentBg}>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        margin: 24,
        marginBottom:18
    },
    textHeader: {
        fontFamily: "kanitSemiBold",
        color: "white",
        fontSize: 36,
    },
    contentBg: {
        backgroundColor: "white",
        flex: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        marginTop: 28,
        padding: 12,
        height: HEIGHT,
    },
})

export default HomeScreen