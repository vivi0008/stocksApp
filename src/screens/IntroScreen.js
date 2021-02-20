import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { AppContext } from "../context/AppContext";
import { Avatar } from "react-native-paper";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
const IntroScreen = () => {
    const app = useContext(AppContext);
    const slides = [
        {
            key: 1,
            title: "ยินดีต้อนรับ",
            subTitle:'แอปพลิเคชันคลังสินค้า',
            text:"",
            image: require("../../assets/images/warehouse.png"),
            backgroundColor:'#51a7a1'
        },
        {
            key: 2,
            title: "ประเภทคลังสินค้า",
            text: "สามารถดูประเภทคลังสินค้าต่าง ๆ ได้",
            image: require("../../assets/images/stock.png"),
            backgroundColor:'#f58023'
        },
        {
            key:3,
            title:"รายละเอียดคลังสินค้า",
            text:"มีรายละเอียดเกี่ยวกับคลังสินค้าต่าง ๆ ",
            image: require("../../assets/images/packages.png"),
            backgroundColor:'#51a7a1'
        },
        {
            key:4,
            title:'เครื่องมือที่ใช้ในคลังสินค้า',
            text:"อุปกรณ์ที่ต้องใช้ในคลังสินค้าแต่ละประเภท",
            image:require('../../assets/images/wholesale.png'),
            backgroundColor:"#f58023"
        },
        {
            key:5,
            title:'สถานที่คลังสินค้า',
            text:"สถานที่ตั้งของคลังสินค้าแต่ละประเภท",
            image:require('../../assets/images/place.png'),
            backgroundColor:"#51a7a1"
        }
    ];

    const renderSilder = ({ item }) => {
        return (
            <View style={[styles.root, {backgroundColor:item.backgroundColor}]}>
                <Text style={styles.title} adjustsFontSizeToFit>
                    {item?.title}
                </Text>
                <View style={styles.imgStyle}>
                    <Avatar.Image
                        source={item?.image}
                        size={250}
                        style={styles.img}
                    />
                </View>
                <Text style={styles.textSub} numberOfLines={2}  >{item?.subTitle}</Text>
                <Text style={styles.text} numberOfLines={2} >{item?.text}</Text>
            </View>
        );
    };

    const onDone = () => {
        app.setAppIntro(true);
    };
    return (
        <AppIntroSlider
            data={slides}
            renderItem={renderSilder}
            onDone={onDone}
            keyExtractor={(item) => item.key.toString()}
            nextLabel="ถัดไป"
            doneLabel="เริ่มต้นใช้งาน"
            skipLabel="ข้าม"
            bottomButton
            showSkipButton
        />
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#51a7a1",
        justifyContent: 'center',
        alignItems:'center',
    },

    title: {
        fontFamily: "kanitBold",
        fontSize: 36,
        color: "white",
        position:'absolute',
        top:HEIGHT/6,
        textAlign:'center'
    },
    textSub:{
        fontFamily:'kanitSemiBold',
        color:'white',
        fontSize:36,
        textAlign:'center'
    },
    text:{
        fontFamily:'kanitRegular',
        color:'white',
        fontSize:24,
        textAlign:'center'
    },
    img:{
        marginBottom:30,
        backgroundColor:'black'
    }
});

export default IntroScreen;
