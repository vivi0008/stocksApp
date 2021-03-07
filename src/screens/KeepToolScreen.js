import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Dimensions
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../Style";
import AntDesign from 'react-native-vector-icons/AntDesign'

const KeepToolScreen = ({navigation}) => {

    const data = navigation.state.params.data

    const doBack = () =>{
        navigation.goBack()
    }
    return (
        <LinearGradient
            colors={["black", "#6e767e", "#ffffff"]}
            style={styles.root}
        >
            <SafeAreaView style={styles.root}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => doBack()}>
                    <AntDesign name="arrowleft" size={32} color="white"/>
                    </TouchableOpacity>
                    <Text style={[styles.textHeader, {fontSize:24, marginTop:5}]}>{data.title}</Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={[styles.contentBg, {borderBottomLeftRadius : 12, borderBottomRightRadius:12}]}>
                        <Text style={styles.textContent}>{"\t"}{data.detail}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default KeepToolScreen