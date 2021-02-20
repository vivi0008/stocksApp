import {StyleSheet, Dimensions} from 'react-native'

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        margin: 24,
        marginBottom: 18,
    },
    textHeader: {
        fontFamily: "kanitSemiBold",
        color: "white",
        fontSize: 42,
    },
    contentBg: {
        backgroundColor: "white",
        marginTop: 32,
        padding: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    textContent: {
        fontFamily: "kanitRegular",
        fontSize: 16,
        marginVertical: 18,
    },
    contentHeader: {
        fontFamily: "kanitRegular",
        fontSize: 34,
        fontWeight: "900",
    },
    imgStock: {
        height: HEIGHT / 5,
        width: WIDTH / 2,
        alignSelf: "center",
    },
    row: {
        flexDirection: "row",
    },
    typeButton:{
        marginTop:2
    }
})