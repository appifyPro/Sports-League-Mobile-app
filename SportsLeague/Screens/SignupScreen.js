import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, Dimensions } from 'react-native'
import InputField from '../Abstracts/InputField'
import Container from '../Abstracts/Container'
import Backward from '../Svgs/Backward'
import Forward from '../Svgs/Forward'
import GradientText from '../Components/GradientText'
import { FontSize } from '../assets/Theme'
import Scale from '../Functions/Scale'
const { height, width } = Dimensions.get("screen")

const SignupScreen = ({ navigation }) => {
    const btnSize = Scale(430, 60, 56)
    const [email, setEmail] = useState("")

    const styles = StyleSheet.create({
        headText: {
            marginTop: height * 0.05,
            fontSize: FontSize.F30,
            marginBottom: height * 0.005
        },
        textCenter: {
            textAlign: "center",
        },
        font10: {
            fontSize: FontSize.F10,
        },
        quicksandRegular: {
            fontFamily: "Quicksand-Regular"
        },
        quicksandBold: {
            fontFamily: "Quicksand-Bold"
        },
        label: {
            marginVertical: height * 0.012,
        },
        btn: {
            backgroundColor: "#1877F2",
            width: btnSize.Width,
            height: btnSize.Height,
            borderRadius: 5,
            fontWeight: "700",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "flex-end",
            position: "absolute",
            bottom: height * 0.04,
            right: width * 0.05,
        },
    })

    return (
        <Container style={{ flex: 1 }}>
            <Pressable style={{ marginTop: height * 0.03 }}
                onPress={() => navigation.goBack()}>
                <Backward width={FontSize.F15} height={FontSize.F15} />
            </Pressable>
            <GradientText colors={['#2445F6', '#172C9BC0', "#00000054"]}
                style={[styles.headText, styles.textCenter, styles.quicksandBold]}>
                Sign up
            </GradientText>
            <Text style={[styles.label, styles.font10, { marginVertical: height * 0.02, marginTop: height * 0.04 }]}>Email</Text>
            <InputField
                width={"100%"}
                paddingVertical={0}
                backgroundColor={"#fbfbfb"}
                value={email}
                onChangeText={setEmail}
                borderColor={"#2445F6"}
                fontSize={FontSize.F16}
                borderWidth={1}
                borderRadius={5}
            />
            <Pressable style={[styles.btn]}
                onPress={() => navigation.navigate("CreateAccount")}>
                <Forward width={FontSize.F22} height={FontSize.F22} />
            </Pressable>
        </Container>
    )
}

export default SignupScreen;