import React, { useRef } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import BottomTabHeader from '../Components/BottomTabHeader'
import Container from '../Abstracts/Container'
import InputField from '../Abstracts/InputField'
import { FontSize } from '../assets/Theme'
import Search from '../Svgs/Search'
import Location from '../Svgs/Location'
import Scale from '../Functions/Scale'
import Button from '../Abstracts/Button'
import Add from '../Svgs/Add'
import Grid from '../Svgs/Grid'
import Settings from '../Svgs/Settings'
import FilterSheet from '../Components/FilterSheet'
import { useNavigation } from '@react-navigation/native'
const { height, width } = Dimensions.get("screen")

const Dashboard = () => {
    const navigation = useNavigation()
    const iconSize = Scale(430, 60, 60)
    const refRBSheet = useRef();

    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            flex: 1
        },
        color: {
            color: "black"
        },
        titleText: {
            fontFamily: "Quicksand-Bold",
            fontSize: FontSize.F15,
            paddingVertical: height * 0.01
        },
        bodyText: {
            fontFamily: "Quicksand-Regular",
            fontSize: FontSize.F12,
            textAlign: "center",
            width: width * 0.55
        },
        btn: {
            backgroundColor: "#2445F6",
            width: iconSize.Width,
            height: iconSize.Height,
            borderRadius: width * 0.04,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 35,
            right: 17,
        },
        line: {
            width: "115%",
            borderWidth: 0.9,
            borderColor: "black",
            position: "absolute",
            bottom: 0
        }
    })

    return (
        <Container style={{ flex: 1 }}>
            <BottomTabHeader own name="DASHBOARD" icon1={Grid} icon2={Settings} />
            <InputField
                Leading_icon={Search}
                leadingcolor={"#bfbfbf"}
                placeholder={"Search pools"}
                fontSize={FontSize.F12}
                backgroundColor={"#f5f5f5"}
                borderWidth={1}
                borderRadius={width * 0.01}
                borderColor={"#bfbfbf"}
                width={"100%"}
                paddingVertical={height * 0.004}
                style={{ marginTop: height * 0.018 }}
            />
            <View style={styles.container}>
                <Pressable>
                    <Location width={iconSize.Width} height={iconSize.Height} />
                </Pressable>
                <Text style={[styles.titleText, styles.color]}>Let's start playing</Text>
                <Text style={[styles.bodyText, styles.color]}>Head over to the Join a Pool section
                    to join a featured pool or start your own
                    and invite all your friends!</Text>
                <Button
                    text={"JOIN A POOL"}
                    backgroundColor={"black"}
                    color={"white"}
                    width={width * 0.27}
                    borderRadius={width * 0.01}
                    paddingVertical={height * 0.011}
                    fontFamily={"Quicksand-Bold"}
                    fontSize={FontSize.F11}
                    style={{ marginTop: height * 0.025 }}
                    onPress={() => { refRBSheet.current.open() }}
                />
            </View>
            <Pressable style={styles.btn}>
                <Add width={FontSize.F24} height={FontSize.F24} />
            </Pressable>
            <FilterSheet refRBSheet={refRBSheet} />
            <View style={styles.line} />
        </Container>
    )
}

export default Dashboard