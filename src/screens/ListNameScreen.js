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
                                <Card style={{ marginVertical: 10 }} key={index}>
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
                                                color:'white'
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
                                                marginTop: 5,
                                            }}
                                        >
                                            website : {e.website}
                                        </Text>
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
