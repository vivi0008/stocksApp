import React from "react";
import { View, Text, SafeAreaView, Image, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../Style";
import { WebView } from "react-native-webview";
import { Video, AVPlaybackStatus } from "expo-av";

const HomeScreen = ({ navigation }) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <LinearGradient
            colors={["black", "#6e767e", "#ffffff"]}
            style={styles.root}
        >
            <SafeAreaView style={styles.root}>
                <View style={styles.container}>
                    <Text style={styles.textHeader}>คลังสินค้าคืออะไร ?</Text>
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
                            สื่อการสอนเพิ่มเติม
                        </Text>
                        <Text style={styles.textContent}>
                            1. ความหมาย
                            ความสำคัญของคลังสินค้าและพื้นที่จัดเก็บสินค้า
                        </Text>
                        <WebView
                            source={{
                                uri:
                                    "https://www.youtube.com/embed/oGgQR-CD2Yw",
                            }}
                            style={styles.videoStyle}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                        />
                        <Text style={styles.textContent}>
                            2. การจำแนกประเภทคลังสินค้า
                        </Text>
                        <WebView
                            source={{
                                uri:
                                    "https://www.youtube.com/embed/SQl9bljysa8",
                            }}
                            style={styles.videoStyle}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                        />
                        <Text style={styles.textContent}>
                            3. การจำแนกคลังสินค้าตามลักษณะงาน และ
                            การจำแนกคลังสินค้าตามลักษณะสินค้า
                        </Text>
                        <WebView
                            source={{
                                uri:
                                    "https://www.youtube.com/embed/I3yTQcXC-VA",
                            }}
                            style={styles.videoStyle}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                        />
                        <Text style={styles.textContent}>
                            4. กลุ่มงานพื้นฐานในคลังสินค้า
                        </Text>
                        <WebView
                            source={{
                                uri:
                                    "https://www.youtube.com/embed/fVwZ7BjcXCI",
                            }}
                            style={styles.videoStyle}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default HomeScreen;
