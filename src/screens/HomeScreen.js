import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../Style";
import typeData from "../data/typeData.json";
import thaiData from "../data/thaiData.json";
import safetyData from "../data/safetyData.json";
import keepTool from "../data/keepTool.json";

const HomeScreen = ({ navigation }) => {

    const goTypeDetail = (value) => {
        navigation.navigate("Type", { data: value });
    };

    const goSafetyDetail = (value) => {
        navigation.navigate("Safety", { data: value });
    };

    const goKeepTool = (value) =>{
        navigation.navigate("Keep", {data: value});
    };

    const goListName = () =>{
        navigation.navigate("List")
    }

    return (
        <LinearGradient
            colors={["black", "#6e767e", "#ffffff"]}
            style={styles.root}
        >
            <SafeAreaView style={styles.root}>
                <View style={styles.container}>
                    <Text style={styles.textHeader}>คลังสินค้า</Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.contentBg}>
                        <Image
                            source={require("../../assets/images/stockImg.jpg")}
                            resizeMethod="auto"
                            resizeMode="stretch"
                            style={styles.imgStock}
                        />
                        <Text style={styles.textContent}>
                            <Text style={styles.contentHeader}>คือ</Text>{" "}
                            อาคารทางพาณิชย์ขนาดใหญ่
                            สร้างมาเพื่อเก็บสินค้าเพื่อรอขนส่ง โดยผู้ผลิต,
                            ผู้นำเข้า, ผู้ส่งออก, ผู้ค้าส่ง, ธุรกิจขนส่ง,
                            ศุลกากร
                            เป็นผู้มีส่วนร่วมและใช้คลังสินค้าด้วยกันทั้งสิ้น
                            โดยรูปลักษณ์ของคลังสินค้าส่วนใหญ่
                            มักเป็นอาคารธรรมดาขนาดใหญ่และกว้าง
                            ตั้งอยู่ในเขตอุตสาหกรรมเมือง
                            ภายในอาคารต้องมีทางลาดเอียงเพื่อขนถ่ายสินค้าได้อย่างสะดวกสินค้าที่นำมาเก็บ
                            สามารถเป็นสินค้าชนิดใดก็ได้ เช่น วัตถุดิบ,
                            บรรจุภัณฑ์, ส่วนประกอบ หรือสินค้าสำเร็จรูปต่างๆ
                            และต้องมีระบบบริหารจัดการสินค้าเพื่อระบุตัวสินค้า
                            พร้อมจำแนกหมวดหมู่
                        </Text>
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
                            ความเป็นมาของคลังสินค้า
                        </Text>
                        <Text style={styles.textContent}>
                            {"\t"}
                            เกิดขึ้นมาเป็นเวลาช้านานแล้ว
                            สำหรับในประเทศไทยคลังสินค้า
                            เริ่มเข้ามามีความสำคัญตอนที่
                            ชาวต่างชาติจากทั้งยุโรปและอเมริกา
                            เข้ามามีส่วนร่วมทางด้านการค้า
                            หลังจบสงครามโลกครั้งที่ 2
                            เกิดขั้นตอนแข่งขันทางเศรษฐกิจอย่างมากมาย
                            ทำให้ผู้ผลิตเริ่มมองเห็นถึงความสำคัญของการจำหน่ายสินค้า
                            อันเกี่ยวพันธ์ไปถึงระบบจัดการซึ่งเกี่ยวข้องกับวัตถุดิบ
                            ที่เดินทางเข้าสู่ขั้นตอนผลิตจนเกิดมาเป็นสินค้าสำเร็จรูป
                            จากความต้องการต่างๆ เหล่านี้
                            ล้วนส่งผลไปสู่การแสวงหาวิธีดูแลอันดีมากขึ้น
                            คำถามที่เกิดขึ้น คือ
                            จะต้องทำอย่างไรกับของที่วางกองเพื่อรอขั้นตอนจำหน่าย
                            ด้วยเหตุนี้แนวคิดในการจัดการเกี่ยวกับคลังสินค้าจึงถือกำเนิดขึ้นมา
                            จนกลายมาเป็นองค์ประกอบสำคัญอันขาดไปไม่ได้
                            ในระบบของการผลิตสินค้าซึ่งส่งผลต่อการให้บริการลูกค้าที่ดี
                            นอกจากนี้ยังหมายถึง
                            การใช้ต้นทุนที่เกิดขึ้นให้เกิดประโยชน์สูงสุด
                        </Text>
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
                            ประเภทของคลังสินค้ามีอะไรบ้าง ?
                        </Text>
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
                            อุปกรณ์เซฟตี้
                        </Text>
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
                            อุปกรณ์อื่น ๆ
                        </Text>
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
                        <Divider
                            style={{
                                backgroundColor: "gray",
                                position: "relative",
                            }}
                        />
                        <TouchableOpacity onPress={goListName}>
                            <Text
                                style={[
                                    styles.contentHeader,
                                    {
                                        fontSize: 24,
                                        paddingTop: 20,
                                        textAlign: "center",
                                    },
                                ]}
                            >
                                บริษัทที่ให้บริการเกี่ยวกับคลังสินค้า
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontFamily: "kanitRegular",
                                    textAlign: "center",
                                    color:'grey'
                                }}
                            >
                                คลิกเพื่อดูรายชื่อ
                            </Text>
                        </TouchableOpacity>
                        <Divider
                            style={{
                                backgroundColor: "gray",
                                position: "relative",
                                marginTop:20
                            }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default HomeScreen;
