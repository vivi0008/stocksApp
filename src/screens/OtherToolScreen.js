import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../Style";
import keepTool from '../data/keepTool.json'

const OtherToolScreen = ({navigation}) => {

    const goKeepTool = (value) =>{
        navigation.navigate("KeepDetails", {data: value});
    };

    return (
        <LinearGradient
            colors={["black", "#6e767e", "#ffffff"]}
            style={styles.root}
        >
            <SafeAreaView style={styles.root}>
                <View style={styles.container}>
                    <Text style={[styles.textHeader, {fontSize:24, marginTop:5}]}>อุปกรณ์อื่นๆ มีอะไรบ้าง ?</Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={[styles.contentBg, {borderBottomLeftRadius : 12, borderBottomRightRadius:12}]}>
                        {keepTool.map((e, index) => {

                            return (
                                <TouchableOpacity key={index} onPress={() => goKeepTool(e)}>
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
                                        {e.id}. {e.title}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default OtherToolScreen