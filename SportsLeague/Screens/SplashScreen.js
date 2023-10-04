import React, { useEffect } from 'react'
import { Image, StatusBar, StyleSheet, View } from 'react-native'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("StartScreen")
        }, 2000)

    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"white"} />
            <Image source={require("../Images/splashlogo.png")} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "70%",
        height: "30%"
    }
})

export default SplashScreen