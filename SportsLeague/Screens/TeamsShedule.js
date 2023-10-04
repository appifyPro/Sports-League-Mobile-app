import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Container from '../Abstracts/Container'
import Backward from '../Svgs/Backward'
import { FontSize } from '../assets/Theme'
import MatchesShedule from '../Components/MatchesShedule'
const { width, height } = Dimensions.get("screen")

const TeamsShedule = () => {
    return (
        <Container>
            <Pressable style={{ marginTop: height * 0.03, alignSelf: "flex-start" }}
                onPress={() => navigation.goBack()}>
                <Backward width={FontSize.F18} height={FontSize.F18} />
            </Pressable>
            <View style={styles.headContain}>
                <Text style={styles.head}>Aways</Text>
                <Text style={styles.head}>Home</Text>
            </View>
            <MatchesShedule />
        </Container>
    )
}

const styles = StyleSheet.create({
    headContain: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    head: {
        fontSize: FontSize.F13,
        fontFamily: "Quicksand-Bold",
        color: "black"
    }
})

export default TeamsShedule