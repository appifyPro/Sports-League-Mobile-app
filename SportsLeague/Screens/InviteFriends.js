import { StyleSheet, Text, View, Dimensions, Pressable, TextInput } from 'react-native'
import React from 'react'
import Container from '../Abstracts/Container'
import { FontSize } from '../assets/Theme'
import Backward from '../Svgs/Backward'
import Button from '../Abstracts/Button'
import Share from '../Svgs/Share'
const { width, height } = Dimensions.get("screen")

const InviteFriends = ({ navigation }) => {
    return (
        <Container style={{ flex: 1, alignItems: 'center', }}>
            <Pressable style={{ marginTop: height * 0.03, alignSelf: "flex-start" }}
                onPress={() => navigation.goBack()}>
                <Backward width={FontSize.F18} height={FontSize.F18} />
            </Pressable>
            <Text style={[styles.title, styles.color]}>Invite Friends</Text>
            <Text style={[styles.body, styles.color]}>
                Use the link below to invite your friends. Copy and paste it
                to an email or share on your favorite social media account.
            </Text>
            <View style={styles.inputContainer}>
                <Text style={[styles.linkTitle, { padding: width * 0.03 }]}>Your referal link</Text>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Text style={[styles.link, styles.color]}>https://dribbble.com/tags/dating_app_profile_screen</Text>
                    <Pressable style={styles.copybtn}>
                        <Text style={styles.copytxt}>COPY</Text>
                    </Pressable>
                </View>
            </View>
            <Button
                text={"SHARE"}
                backgroundColor={"#2445F6"}
                width={"100%"}
                borderRadius={width * 0.01}
                TextIcon={Share}
                fontSize={FontSize.F13}
                fontFamily={"Quicksand-SemiBold"}
                color={"white"}
                paddingVertical={height * 0.018}
                borderWidth={1}
                onPress={() => navigation.navigate("")}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "Quicksand-Bold",
        fontSize: FontSize.F20,
        marginTop: height * 0.02
    },
    body: {
        fontFamily: "Quicksand-Regular",
        fontSize: FontSize.F15,
        marginTop: height * 0.02,
        textAlign: "center",
    },
    color: {
        color: "black"
    },
    inputContainer: {
        width: "100%",
        backgroundColor: "#F7F7F7",
        justifyContent: "space-evenly",
        height: height * 0.075,
        borderRadius: width * 0.01,
        marginVertical: height * 0.02,
        marginTop: height * 0.05,
        borderBottomWidth: 0.8,
        borderBottomColor: "black",
        paddingBottom: height * 0.02,
    },
    linkTitle: {
        fontFamily: "Quicksand-Regular",
        fontSize: FontSize.F10
    },
    link: {
        fontFamily: "Quicksand-SemiBold",
        fontSize: FontSize.F10,
        width: "83%",
    },
    copytxt: {
        fontFamily: "Quicksand-SemiBold",
        fontSize: FontSize.F12,
        color: "#2445F6"
    }
})

export default InviteFriends