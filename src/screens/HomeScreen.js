import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../Style";

const HomeScreen = ({ navigation }) => {
    const typeData = [
        {
            id: 1,
            title: "1. กลุ่มคลังสินค้าสาธารณะ",
            detail:
                "ธุรกิจของเจ้าของ ที่จัดให้มีความสะดวก – ง่ายดายต่างๆ ในการเก็บรักษาสินค้า รวมทั้งให้บริการต่างๆ อันเกี่ยวข้องกับสินค้านั้น"
        },
        {
            id: 2,
            title: "2. คลังสินค้าสาธารณะของบริษัทเอกชน",
            detail:
                "ธุรกิจขนาดใหญ่ ของภาคเอกชนซึ่งก่อตั้งขึ้นในรูปของบริษัทจำกัด หรือ กิจการคลังสินค้าสาธารณะที่บริษัทเอกชนกำลังดำเนินงานอยู่"
        },
        {
            id: 3,
            title: "3. คลังสินค้าสาธารณะของรัฐบาล",
            detail:
                "รัฐบาลในภาคส่วนต่างๆ ที่ประกอบธุรกิจทางการค้าเพื่อหารายได้เข้ารัฐ เป็นการจัดตั้งขึ้นในรูปแบบของรัฐวิสาหกิจ หรือรัฐพาณิชย์ในรูปแบบอื่นๆ โดยมีจุดมุ่งหมาย รวมทั้งนโยบายหลักในการประกอบกิจการต่างๆ เพื่อตอบสนองต่อนโยบายของรัฐบาลในด้านต่างๆ ให้เป็นไปอย่างราบรื่น สำหรับคลังสินค้าสาธารณะของรัฐบาล จัดตั้งขึ้นอย่างเป็นระบบในรูปแบบของรัฐวิสาหกิจ โดยมีจุดประสงค์เพื่อตอบสนองนโยบายของรัฐบาลทางด้านเศรษฐกิจ เช่น อุตสาหกรรมห้องเย็น เป็นต้น"
        },
        {
            id: 4,
            title: "4. คลังสินค้าสาธารณะของสหกรณ์",
            detail:
                "สหกรณ์คือ องค์การเอกชน ซึ่งอยู่ภายใต้การควบคุม รวมทั้งการสนับสนุนของรัฐบาล มีการจัดตั้งขึ้นตามหลักกฎหมายสหกรณ์ ซึ่งเป็นการรวมตัวกันของกลุ่มอาชีพ หรือกลุ่มผลประโยชน์ ซึ่งมีเป้าหมายในการทำกิจการต่างๆ ร่วมกัน ต่างฝ่ายต่างช่วยเหลือสนับสนุนซึ่งกันและกันทางด้านเศรษฐกิจ เช่น สหกรณ์การเกษตร หรือสหกรณ์การประมง เป็นต้น"
        }
    ];

    const thaiData = [
        {
            id: 1,
            title: "1. คลังสินค้าสาธารณะ (Public warehouse)",
            detail: [
                {
                    id: 1,
                    title:
                        "1.1 คลังสินค้าสำหรับสินค้าทั่วไป (General merchandise warehouse)"
                },
                {
                    id: 2,
                    title: "1.2 คลังสินค้าพิเศษ (Special commodity warehouse)"
                },
                {
                    id: 3,
                    title: "1.3 คลังสินค้าทัณฑ์บน (Bonded warehouse)"
                }
            ]
        },
        {
            id: 2,
            title: "2. คลังสินค้าเอกชน (Private warehouse)",
            detail: []
        },
        {
            id: 3,
            title: "3. คลังสินค้าเพื่อกิจกรรมพิเศษ (Special warehouse)",
            detail: []
        }
    ];

    const goTypeDetail = (value) => {
        navigation.navigate("Type", { data: value });
    };

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
                                position: "relative"
                            }}
                        />
                        <Text
                            style={[
                                styles.contentHeader,
                                { fontSize: 24, paddingTop: 20 }
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
                                position: "relative"
                            }}
                        />
                        <Text
                            style={[
                                styles.contentHeader,
                                { fontSize: 24, paddingTop: 20 }
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
                                                color: "blue"
                                            }
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
                                position: "relative"
                            }}
                        />
                        <Text
                            style={[
                                styles.contentHeader,
                                { fontSize: 24, paddingTop: 20 }
                            ]}
                        >
                            ประเภทของคลังสินค้าใน{"\n"}ประเทศไทย
                        </Text>
                        <Text style={styles.textContent}>
                            ประเภทของคลังสินค้า ในประเทศไทยมี 3 ประเภทได้แก่ ...
                        </Text>
                        {thaiData.map((e) => {
                            return (
                                <View>
                                    <Text style={[styles.textContent, {fontSize:18, fontWeight:'bold', textDecorationLine:'underline'}]}>{e.title}</Text>
                                    {e.detail.map((g) =>{
                                        return(
                                            <Text style={styles.textContent}>{"\t"}{g.title}</Text>
                                        )
                                    })}
                                </View>
                            );
                        })}
                        <Divider
                            style={{
                                backgroundColor: "gray",
                                position: "relative"
                            }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default HomeScreen;
