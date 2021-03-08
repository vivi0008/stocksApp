import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../Style";
import AntDesign from "react-native-vector-icons/AntDesign";

const KeepToolScreen = ({ navigation }) => {
    const data = navigation.state.params.data;

    const doBack = () => {
        navigation.goBack();
    };

    const getImage = (imgName) => {
        switch (imgName) {
            case "helpkeep":
                return require("../../assets/images/keepTool/helpkeep.jpg");
                break;
            case "camera":
                return require("../../assets/images/keepTool/camera.jpg");
                break;
            case "car":
                return require("../../assets/images/keepTool/car.jpg");
                break;
            case "chanwang":
                return require("../../assets/images/keepTool/chanwang.jpg");
                break;
            case "fan":
                return require("../../assets/images/keepTool/fan.jpg");
                break;
            case "helpkeep":
                return require("../../assets/images/keepTool/helpkeep.jpg");
                break;
            case "kaikung":
                return require("../../assets/images/keepTool/kaikung.jpg");
                break;
            case "parate":
                return require("../../assets/images/keepTool/parate.gif");
                break;
            case "roll":
                return require("../../assets/images/keepTool/roll.jpg");
                break;
            case "tarap":
                return require("../../assets/images/keepTool/tarap.jpg");
                break;
            case "tung":
                return require("../../assets/images/keepTool/tung.jpg");
                break;
            case "weight":
                return require("../../assets/images/keepTool/weight.jpg");
                break;
            case "bundai":
                return require("../../assets/images/keepTool/bundai.jpg");
                break;
            default:
                return require("../../assets/images/shoes.jpg");
        }
    };

    return (
        <LinearGradient
            colors={["black", "#6e767e", "#ffffff"]}
            style={styles.root}
        >
            <SafeAreaView style={styles.root}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => doBack()}>
                        <AntDesign name="arrowleft" size={32} color="white" />
                    </TouchableOpacity>
                    <Text
                        style={[
                            styles.textHeader,
                            { fontSize: 24, marginTop: 5 },
                        ]}
                    >
                        {data.title}
                    </Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View
                        style={[
                            styles.contentBg,
                            {
                                borderBottomLeftRadius: 12,
                                borderBottomRightRadius: 12,
                            },
                        ]}
                    >
                        <Text style={styles.textContent}>
                            {"\t"}
                            {data.detail}
                        </Text>
                        <Image
                            source={getImage(data.image)}
                            resizeMethod="auto"
                            resizeMode="stretch"
                            style={styles.imgStock}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default KeepToolScreen;
