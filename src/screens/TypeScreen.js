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
import {Divider} from 'react-native-paper'
import styles from "../Style";
import AntDesign from 'react-native-vector-icons/AntDesign'
import typeData from '../data/typeData.json'
import thaiData from '../data/thaiData.json'

const TypeScreen = ({navigation}) => {

    const goTypeDetail = (value) => {
        navigation.navigate("TypeDetails", { data: value });
    };

    return (
        <LinearGradient
            colors={["black", "#6e767e", "#ffffff"]}
            style={styles.root}
        >
            <SafeAreaView style={styles.root}>
                <View style={styles.container}>
                    <Text style={[styles.textHeader, {fontSize:24, marginTop:5}]}>ประเภทของคลังสินค้ามีอะไรบ้าง ?</Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={[styles.contentBg, {borderBottomLeftRadius : 12, borderBottomRightRadius:12}]}>
                        <Text style={styles.textContent}>
                            {"\t"}
                            สามารถแบ่งตามจุดมุ่งหมายในจุดประสงค์ประกอบกิจการ
                            ได้แก่ ...
                        </Text>
                        {typeData.map((e, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.typeButton}
                                    onPress={() => goTypeDetail(e)}
                                >
                                    <Text
                                        style={[
                                            styles.textContent,
                                            {
                                                textDecorationLine: "underline",
                                                color: "blue",
                                            },
                                        ]}
                                    >
                                        {e.title}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                        <Divider
                            style={{
                                backgroundColor: "gray",
                                position: "relative",
                            }}
                        />
                        <Text
                            style={[
                                styles.contentHeader,
                                { fontSize: 24, paddingTop: 20 },
                            ]}
                        >
                            ประเภทของคลังสินค้าใน{"\n"}ประเทศไทย
                        </Text>
                        <Text style={styles.textContent}>
                            ประเภทของคลังสินค้า ในประเทศไทยมี 3 ประเภทได้แก่ ...
                        </Text>
                        {thaiData.map((e, index) => {
                            return (
                                <View key={index}>
                                    <Text
                                        style={[
                                            styles.textContent,
                                            {
                                                fontSize: 18,
                                                fontWeight: "bold",
                                                textDecorationLine: "underline",
                                            },
                                        ]}
                                    >
                                        {e.title}
                                    </Text>
                                    {e.detail.map((g, index) => {
                                        return (
                                            <Text
                                                style={styles.textContent}
                                                key={index}
                                            >
                                                {"\t"}
                                                {g.title}
                                            </Text>
                                        );
                                    })}
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default TypeScreen