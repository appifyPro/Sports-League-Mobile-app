import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../Abstracts/Container'
import BottomTabHeader from '../Components/BottomTabHeader'
import CircleSettings from '../Svgs/CircleSettings'
import Settings from '../Svgs/Settings'
import CircleBell from '../Svgs/CircleBell'
import Scale from '../Functions/Scale'
import { FontSize } from '../assets/Theme'
const { width, height } = Dimensions.get("screen")

const BottomNotification = () => {
    const iconSize = Scale(430, 60, 60)
    return (
        <Container style={{ flex: 1, }}>
            <BottomTabHeader own name={"NOTIFICATIONS"} icon1={CircleSettings} icon2={Settings} />
            <View style={styles.container}>
                <CircleBell width={iconSize.Width} height={iconSize.Height} />
                <Text style={[styles.title, styles.color]}>You’re all caught up</Text>
                <Text style={[styles.body, styles.color]}>Check back later to see new notification about pools,
                    connections, or platform updates</Text>
            </View>
            <View style={styles.line} />
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        flex: 1
    },
    color: {
        color: "black"
    },
    title: {
        fontFamily: "Quicksand-Bold",
        fontSize: FontSize.F15,
        marginVertical: height * 0.01
    },
    body: {
        fontFamily: "Quicksand-Regular",
        fontSize: FontSize.F12,
        width: width * 0.8,
        textAlign: "center",
        marginTop: height * 0.01
    },
    line: {
        width: "115%",
        borderWidth: 0.9,
        borderColor: "black",
        position: "absolute",
        bottom: 0
    },
})

export default BottomNotification