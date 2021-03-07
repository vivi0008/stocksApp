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

const SafetyScreen = ({ navigation }) => {
    const data = navigation.state.params.data;

    const doBack = () => {
        navigation.goBack();
    };

    const getImage = (imgName) => {
        switch (imgName) {
            case "shoes":
                return require("../../assets/images/shoes.jpg");
                break;
            case "gloves":
                return require("../../assets/images/gloves.jpg");
                break;
            case "hat":
                return require("../../assets/images/hat.jpg");
                break;
            case "eyeglass":
                return require("../../assets/images/eyeglass.jpeg");
                break;
            case "ears":
                return require("../../assets/images/ears.jpg");
                break;
            case "mask":
                return require("../../assets/images/mask.jpg");
                break;
            case "belt":
                return require("../../assets/images/belt.jpg");
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
                        {data.name}
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

export default SafetyScreen;
