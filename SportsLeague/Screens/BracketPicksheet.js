import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RefreshHeader from '../Components/RefreshHeader'
import Container from '../Abstracts/Container'
import { FontSize } from '../assets/Theme'

const BracketPicksheet = () => {
    return (
        <Container style={{ flex: 1 }}>
            <RefreshHeader />
            <Text style={[styles.headText, styles.color]}>BRACKET PICKSHEET</Text>
            <Text style={[styles.bodyText, styles.color]}>
                You are not able to submit knockout stage picks at this time because you didn’t
                submit picks for the group stage
            </Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    headText: {
        fontSize: FontSize.F18,
        fontFamily: "InknutAntiqua-SemiBold"
    },
    bodyText: {
        fontSize: FontSize.F12,
        fontFamily: "Quicksand-Regular",
        textAlign: "center",
        top: 10
    },
    color: {
        color: "black"
    }
})

export default BracketPicksheet