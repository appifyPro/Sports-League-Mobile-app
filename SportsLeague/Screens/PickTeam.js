import { Pressable, StyleSheet, Text, Dimensions, View, ScrollView } from 'react-native'
import React from 'react'
import { FontSize } from '../assets/Theme'
import Container from '../Abstracts/Container'
import Backward from '../Svgs/Backward'
import TeamsChoice from '../Components/TeamsChoice'
const { width, height } = Dimensions.get("screen")

const PickTeam = ({ navigation }) => {
    return (
        <Container>
            <Pressable style={{ marginTop: height * 0.03, alignSelf: "flex-start" }}
                onPress={() => navigation.goBack()}>
                <Backward width={FontSize.F18} height={FontSize.F18} />
            </Pressable>
            <Text style={[styles.font15, styles.head]}>PICK DEADLINE: SUNDAY 9/10/2023 1:00 PM ET</Text>
            <Text style={[styles.font15, styles.body]}>Pick one team you think will win by clicking a team's box
                below. You can not pick the same team more than once
                during the season. Note: Your pick is made straight-up,
                not using the point spread. However, some members
                find the point spreads useful in making their pick.
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TeamsChoice />
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    font15: {
        fontSize: FontSize.F15
    },
    head: {
        fontFamily: "Quicksand-Bold",
        marginVertical: height * 0.03,
    },
    body: {
        fontFamily: "Quicksand-Regular",
        color: "black",
        marginBottom: height * 0.04
    },

})

export default PickTeam;