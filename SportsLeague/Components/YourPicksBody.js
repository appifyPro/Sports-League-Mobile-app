import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Settings from '../Svgs/Settings'
import { FontSize } from '../assets/Theme'
import Button from '../Abstracts/Button'
import Scale from '../Functions/Scale'
const { height, width } = Dimensions.get("screen")

const YourPicksBody = () => {
    const containerSize = Scale(430, 338, 449)
    const rectangleSize = Scale(430, 43, 29)

    const styles = StyleSheet.create({
        container: {
            width: containerSize.Width,
            height: containerSize.Height,
            borderWidth: 2,
            borderColor: "#d9d9d9",
            alignItems: "center",
            alignSelf: "center",
            marginTop: height * 0.04,
            borderRadius: 3
        },
        header: {
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-end",
            marginTop: height * 0.02,
            width: width * 0.442,
            justifyContent: "space-between",
            paddingRight: width * 0.02
        },
        letter: {
            letterSpacing: 20,
            marginVertical: height * 0.015
        },
        bigRec: {
            width: rectangleSize.Width,
            height: rectangleSize.Height,
            backgroundColor: "#e2e2e2",
        },
        smallRec: {
            width: rectangleSize.Width,
            height: height * 0.006,
            marginTop: height * 0.007,
            backgroundColor: "#e2e2e2"
        },
        quicksandRegular: {
            fontFamily: "Quicksand-Regular",
            fontSize: FontSize.F13,
            color: "black"
        },
        quicksandBold: {
            fontFamily: "Quicksand-Bold",
            fontSize: FontSize.F13,
            color: "black"
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.quicksandBold]}>ENTRY</Text>
                <Pressable>
                    <Settings width={FontSize.F18} height={FontSize.F18} />
                </Pressable>
            </View>
            <Text style={[styles.quicksandRegular, { marginVertical: height * 0.013 }]}>RUSTOM</Text>
            <Text style={[styles.quicksandRegular, { marginTop: height * 0.01 }]}>Your Group Stage Winners</Text>
            <Text style={[styles.quicksandBold, styles.letter]}>ABCDEFGH</Text>
            <Text style={[styles.quicksandRegular, { paddingBottom: height * 0.012 }]}>The Group Stage Pick Deadline Has Passed</Text>
            <Text style={[styles.quicksandBold, { marginVertical: height * 0.025 }]}>Knockout Stage</Text>
            <Button
                text={"MAKE KNOCKOUT STAGE PICKS"}
                fontSize={FontSize.F13}
                fontFamily={"Quicksand-SemiBold"}
                backgroundColor={"#2445F6"}
                borderRadius={width * 0.01}
                color={"white"}
                paddingVertical={height * 0.018}
                style={{ marginBottom: height * 0.01 }}
            />
            <Text style={[styles.quicksandBold, { marginVertical: height * 0.007 }]}>Final</Text>
            <View style={styles.bigRec} />
            <View style={styles.smallRec} />
        </View>
    )
}

export default YourPicksBody