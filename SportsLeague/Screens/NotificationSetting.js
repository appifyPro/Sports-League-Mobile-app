import { Dimensions, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Backward from '../Svgs/Backward'
import { FontSize } from '../assets/Theme'
import Forward from '../Svgs/Forward'
const { height, width } = Dimensions.get("screen")

const NotificationSetting = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.statusbar}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <Backward width={FontSize.F18} height={FontSize.F18} />
                </TouchableWithoutFeedback>
                <Text style={styles.statusText}>Notification Setting</Text>
            </View>
            <View style={styles.container}>
                <Pressable style={styles.btn}>
                    <Text style={styles.text}>Push notification</Text>
                    <Forward width={FontSize.F14} height={FontSize.F14} />
                </Pressable>
                <View style={styles.line} />
                <Pressable style={styles.btn}>
                    <Text style={styles.text}>Email notification</Text>
                    <Forward width={FontSize.F14} height={FontSize.F14} />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    statusbar: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: height * 0.05,
        left: 15
    },
    statusText: {
        fontSize: FontSize.F18,
        fontFamily: "Quicksand-SemiBold",
        paddingLeft: width * 0.06
    },
    btn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: width * 0.05
    },
    text: {
        fontSize: FontSize.F12,
        fontFamily: "Quicksand-SemiBold",
        color: "black",
        paddingVertical: height * 0.02
    },
    container: {
        backgroundColor: "#f3f6ff",
        justifyContent: "space-between",
        marginTop: height * 0.02
    },
    line: {
        width: width * 0.9,
        alignSelf: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#D9D9D9"
    }
})

export default NotificationSetting