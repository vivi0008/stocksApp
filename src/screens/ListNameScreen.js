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
import { Card, Divider } from "react-native-paper";
import placeData from "../data/placeData.json";

const ListNameScreen = ({ navigation }) => {
    const doBack = () => {
        navigation.goBack();
    };

    const getImage = (imgName) => {
        switch (imgName) {
            case "747":
                return require("../../assets/images/place/747.jpg");
                break;
            case "am":
                return require("../../assets/images/place/am.jpg");
                break;
            case "aommata":
                return require("../../assets/images/place/aommata.jpg");
                break;
            case "berapat":
                return require("../../assets/images/place/berapat.jpg");
                break;
            case "chok":
                return require("../../assets/images/place/chok.gif");
                break;
            case "infinity":
                return require("../../assets/images/place/infinity.jpg");
                break;
            case "kaitak":
                return require("../../assets/images/place/kaitak.jpg");
                break;
            case "koduk":
                return require("../../assets/images/place/koduk.jpg");
                break;
            case "proin":
                return require("../../assets/images/place/proin.jpg");
                break;
            case "tepa":
                return require("../../assets/images/place/tepa.jpg");
                break;
            case "tip":
                return require("../../assets/images/place/tip.jpg");
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
                        รายชื่อบริษัทที่ให้บริการ
                    </Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ marginHorizontal: 20 }}>
                        {placeData.map((e, index) => {
                            return (
                                <Card
                                    style={{ marginVertical: 10 }}
                                    key={index}
                                >
                                    <Card.Content
                                        style={{
                                            backgroundColor: "black",
                                            paddingBottom: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontFamily: "kanitRegular",
                                                fontSize: 18,
                                                textAlign: "center",
                                                color: "white",
                                            }}
                                        >
                                            {e.name}
                                        </Text>
                                    </Card.Content>
                                    <Card.Content
                                        style={{ marginVertical: 10 }}
                                    >
                                        <Text
                                            style={{
                                                fontFamily: "kanitRegular",
                                            }}
                                        >
                                            ที่อยู่ : {e.address}
                                        </Text>

                                        <Text
                                            style={{
                                                fontFamily: "kanitRegular",
                                                marginTop: 5,
                                            }}
                                        >
                                            เบอร์โทรศัพท์ : {e.telephone}
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily: "kanitRegular",
                                                marginVertical:10
                                            }}
                                        >
                                            website : {e.website}
                                        </Text>
                                        <Image
                                            source={getImage(e.image)}
                                            resizeMethod="auto"
                                            resizeMode="stretch"
                                            style={styles.imgStock}
                                        />
                                    </Card.Content>
                                </Card>
                            );
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default ListNameScreen;
