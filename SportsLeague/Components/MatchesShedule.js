import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Lions from '../Svgs/Lions'
import Chiefs from '../Svgs/Chiefs'
import { FontSize } from '../assets/Theme'
const { width, height } = Dimensions.get("screen")

const MatchesShedule = () => {
    const data = [
        {
            title: ""
        },
        {
            title: ""
        },
        {
            title: ""
        },
        {
            title: ""
        },
        {
            title: ""
        },
    ]

    return (
        <View>
            <Text style={[styles.head, styles.bold13]}>Friday, September 7</Text>
            <View style={styles.container}>
                <View style={styles.boxCon}>
                    <View style={{ marginLeft: width * 0.045 }}>
                        <Lions />
                    </View>
                    <View style={{ marginLeft: width * 0.02 }}>
                        <Text style={[styles.bold13, { color: "black" }]}>DET</Text>
                        <Text style={styles.regular10}>(1-0)</Text>
                        <Text style={styles.regular10}>Away</Text>
                    </View>
                </View>
                <View style={styles.boxCon}>
                    <View style={{ marginLeft: width * 0.045 }}>
                        <Chiefs width={FontSize.F35} height={FontSize.F35} />
                    </View>
                    <View style={{ marginLeft: width * 0.02 }}>
                        <Text style={[styles.bold13, { color: "black" }]}>KCY</Text>
                        <Text style={styles.regular10}>(1-0)</Text>
                        <Text style={styles.regular10}>Home</Text>
                    </View>
                </View>
            </View>
            <Text style={[styles.head, styles.bold13]}>Monday, September 12</Text>
            {data.map((item, index) => (
                <View key={index} style={[styles.container, { marginBottom: height * 0.015 }]}>
                    <View style={styles.boxCon}>

                    </View>
                    <View style={styles.boxCon}>

                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    head: {
        textAlign: "center",
        marginVertical: height * 0.015,
        color: "#cccccc"
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    boxCon: {
        width: width * 0.44,
        height: height * 0.08,
        borderWidth: 1,
        borderRadius: width * 0.01,
        borderColor: "#D9D9D9",
        backgroundColor: "#f3f6ff",
        flexDirection: "row",
        alignItems: "center"
    },
    bold13: {
        fontSize: FontSize.F13,
        fontFamily: "Quicksand-Bold",
    },
    regular10: {
        fontSize: FontSize.F10,
        fontFamily: "Quicksand-Regular",
    }
})

export default MatchesShedule