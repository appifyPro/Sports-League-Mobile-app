import React, { useRef } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import BottomTabHeader from '../Components/BottomTabHeader'
import Container from '../Abstracts/Container'
import InputField from '../Abstracts/InputField'
import { FontSize } from '../assets/Theme'
import Search from '../Svgs/Search'
import Scale from '../Functions/Scale'
import Button from '../Abstracts/Button'
import Grid from '../Svgs/Grid'
import CircleProfile from '../Svgs/CircleProfile'
import AddProfile from '../Svgs/AddProfile'
import SortBy from '../Components/SortBy'
const { height, width } = Dimensions.get("screen")

const Connection = ({ navigation }) => {
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
            paddingTop: height * 0.01
        },
        bodyText: {
            fontFamily: "Quicksand-Regular",
            fontSize: FontSize.F12,
            textAlign: "center",
            width: width * 0.76,
            marginVertical: height * 0.028
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
            <BottomTabHeader name="CONNECTIONS" icon3={Grid} />
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
                    <CircleProfile width={iconSize.Width} height={iconSize.Height} />
                </Pressable>
                <Text style={[styles.titleText, styles.color]}>No connections yet</Text>
                <Text style={[styles.bodyText, styles.color]}>LSL is more fun with friends Tap the invite friends
                    icon or the button bellow to invite for sync your friend</Text>
                <Button
                    text={"INVITE FRIENDS"}
                    backgroundColor={"black"}
                    color={"white"}
                    width={width * 0.3}
                    borderRadius={width * 0.01}
                    paddingVertical={height * 0.011}
                    fontFamily={"Quicksand-Bold"}
                    fontSize={FontSize.F11}
                    onPress={() => { refRBSheet.current.open() }}
                />
            </View>
            <Pressable style={styles.btn} onPress={() => navigation.navigate("InviteFriends")}>
                <AddProfile width={FontSize.F24} height={FontSize.F24} />
            </Pressable>
            <SortBy refRBSheet={refRBSheet} />
            <View style={styles.line} />
        </Container>
    )
}

export default Connection