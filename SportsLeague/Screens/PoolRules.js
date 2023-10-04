import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RefreshHeader from '../Components/RefreshHeader'
import Container from '../Abstracts/Container'
import { FontSize } from '../assets/Theme'

const PoolRules = () => {
    return (
        <Container style={{ flex: 1 }}>
            <RefreshHeader />
            <Text style={[styles.headText, styles.color]}>POOL RULES</Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    headText: {
        fontSize: FontSize.F18,
        fontFamily: "InknutAntiqua-SemiBold"
    },
    color: {
        color: "black"
    }
})

export default PoolRules