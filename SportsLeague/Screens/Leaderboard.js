import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RefreshHeader from '../Components/RefreshHeader'
import Container from '../Abstracts/Container'
import { FontSize } from '../assets/Theme'
import LeaderboardTable from '../Components/LeaderboardTable'

const leaderboardData = [
    { name: '1', score: "Soccer", col3: '60', col4: 'Value4', col5: 'Value4', col6: 'Value6', col7: 'Value7' },
    { name: '2', score: "Golf", col3: '100', col4: 'Value4', col5: 'Value4', col6: 'Value6', col7: 'Value7' },
    { name: '3', score: "Basketball", col3: '0', col4: 'Value4', col5: 'Value4', col6: 'Value6', col7: 'Value7' },
    { name: '12', score: "Chess", col3: '35', col4: 'Value4', col5: 'Value4', col6: 'Value6', col7: 'Value7' },
];

const Leaderboard = () => {
    return (
        <>
            <Container style={{ flex: 1 }}>
                <RefreshHeader />
                <Text style={[styles.headText, styles.color]}>LEADERBOARD</Text>
                <Text style={[styles.bodyText, styles.color]}>
                    The leaderboard below is based on the 'in-progress' group stage and
                    is subject to change. If a picked country drops in their group ranking,
                    points may be subtracted. Click column headings to change sort order.
                    Click a player's name to view their picks.
                </Text>
            </Container>
            <View style={styles.container}>
                <LeaderboardTable leaderboardData={leaderboardData} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    headText: {
        fontSize: FontSize.F18,
        fontFamily: "InknutAntiqua-SemiBold",
    },
    bodyText: {
        fontSize: FontSize.F12,
        fontFamily: "Quicksand-Regular",
        textAlign: "center",
        top: 10
    },
    color: {
        color: "black"
    },
    container: {
        flex: 2,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Leaderboard