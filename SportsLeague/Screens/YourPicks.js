import React from 'react'
import { Dimensions, StyleSheet, Text } from 'react-native'
import RefreshHeader from '../Components/RefreshHeader'
import Container from '../Abstracts/Container'
import { FontSize } from '../assets/Theme'
import YourPicksBody from '../Components/YourPicksBody'
const { height } = Dimensions.get("screen")

const YourPicks = () => {
    return (
        <Container style={{ flex: 1 }}>
            <RefreshHeader />
            <Text style={[styles.headText, styles.color]}>YOUR PICKS</Text>
            <YourPicksBody />
            <Text style={[styles.bodyText, { paddingVertical: height * 0.022 }]}>At this your pool commissioner is allowing new entries</Text>
            <Text style={[styles.bodyText]}>^The knockout stage pick sheet will be available shortly after the last group stage
                game ends.</Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    headText: {
        fontSize: FontSize.F18,
        fontFamily: "InknutAntiqua-SemiBold",
    },
    bodyText: {
        fontSize: FontSize.F10,
        fontFamily: "Quicksand-Regular",
    },
    color: {
        color: "black"
    },
})

export default YourPicks