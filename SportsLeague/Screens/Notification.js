import React from 'react'
import { StyleSheet, Text, Dimensions, View, ImageBackground, Image } from 'react-native'
import Container from '../Abstracts/Container'
import Button from '../Abstracts/Button'
import GradientText from '../Components/GradientText'
import { FontSize } from '../assets/Theme'
import Down from '../Svgs/Down'
const { height, width } = Dimensions.get("screen")

const Notification = ({ navigation }) => {

    return (
        <Container style={{ flex: 1 }}>
            <GradientText colors={['#2445F6', '#172C9BC0', "#00000054"]}
                style={[styles.headText, styles.textCenter, styles.quicksandBold]}>
                Don't miss out
            </GradientText>
            <Text style={[styles.quicksandRegular, styles.textCenter, styles.color, styles.font10, { alignSelf: "center", width: "100%" }]}>
                Get notifications about pool results, pool invitation, friend connection
                request and more</Text>
            <ImageBackground source={require("../Images/bgImage.png")}
                style={styles.imageBackground}>
                <View style={[styles.notContainer, { marginTop: height * 0.15 }]}>
                    <Image source={require("../Images/logo.jpg")} />
                    <View>
                        <Text style={[styles.head, styles.quicksandBold, styles.color]}>The NBA pool</Text>
                        <Text style={[styles.color, styles.font10, styles.quicksandRegular]}>Next week’s picks are available, let’s go!</Text>
                    </View>
                    <Down />
                </View>
                <View style={styles.notContainer}>
                    <Image source={require("../Images/logo.jpg")} />
                    <View>
                        <Text style={[styles.head, styles.quicksandBold, styles.color]}>The NBA pool</Text>
                        <Text style={[styles.color, styles.font10, styles.quicksandRegular]}>Next week’s picks are available, let’s go!</Text>
                    </View>
                    <Down />
                </View>
                <View style={styles.notContainer}>
                    <Image source={require("../Images/logo.jpg")} />
                    <View>
                        <Text style={[styles.head, styles.quicksandBold, styles.color]}>The NBA pool</Text>
                        <Text style={[styles.color, styles.font10, styles.quicksandRegular,]}>Next week’s picks are available, let’s go!</Text>
                    </View>
                    <Down />
                </View>
            </ImageBackground>
            <View style={{ position: "absolute", bottom: 10, alignSelf: 'center', }}>
                <Button
                    text={"GET NOTIFICATIONS"}
                    backgroundColor={"#2445F6"}
                    width={"100%"}
                    borderRadius={width * 0.01}
                    fontSize={FontSize.F13}
                    fontFamily={"Quicksand-SemiBold"}
                    color={"white"}
                    paddingVertical={height * 0.017}
                    onPress={() => navigation.navigate("BottomTab")}
                />
                <Text onPress={() => navigation.navigate("BottomTab")}
                    style={[styles.quicksandBold, styles.textCenter, { marginVertical: height * 0.02, color: "black", fontSize: FontSize.F13 }]}>NOT NOW</Text>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    headText: {
        marginTop: height * 0.05,
        fontSize: FontSize.F30,
        marginBottom: height * 0.03
    },
    textCenter: {
        textAlign: "center",
    },
    font10: {
        fontSize: FontSize.F10,
    },
    quicksandRegular: {
        fontFamily: "Quicksand-Regular"
    },
    quicksandBold: {
        fontFamily: "Quicksand-Bold"
    },
    color: {
        color: "black"
    },
    imageBackground: {
        height: "75%",
        alignSelf: "center",
    },
    notContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        width: "90%",
        alignItems: "center",
        borderWidth: 2.5,
        borderRadius: FontSize.F15,
        borderColor: "#d9d9d9",
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.05,
        marginTop: height * 0.025,
    },
    head: {
        fontSize: FontSize.F13,
        paddingBottom: height * 0.009,
    },
})

export default Notification;