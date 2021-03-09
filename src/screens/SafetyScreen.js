import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../Style";
import safetyData from "../data/safetyData.json";

const RoomTypeScreen = ({ navigation }) => {
    const goSafetyDetail = (value) => {
        navigation.navigate("SafetyDetails", { data: value });
    };

    return (
        <LinearGradient
            colors={["black", "#6e767e", "#ffffff"]}
            style={styles.root}
        >
            <SafeAreaView style={styles.root}>
                <View style={styles.container}>
                    <Text
                        style={[
                            styles.textHeader,
                            { fontSize: 24, marginTop: 5 },
                        ]}
                    >
                        อุปกรณ์เซฟตี้มีอะไรบ้าง ?
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
                        {safetyData.map((e, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => goSafetyDetail(e)}
                                >
                                    <Text
                                        style={[
                                            styles.textContent,
                                            {
                                                marginVertical: 10,
                                                textDecorationLine: "underline",
                                                color: "blue",
                                            },
                                        ]}
                                    >
                                        {e.id}. {e.name}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default RoomTypeScreen;
