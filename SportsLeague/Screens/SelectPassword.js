import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, Dimensions, KeyboardAvoidingView } from 'react-native'
import InputField from '../Abstracts/InputField'
import Container from '../Abstracts/Container'
import Backward from '../Svgs/Backward'
import Forward from '../Svgs/Forward'
import GradientText from '../Components/GradientText'
import { FontSize } from '../assets/Theme'
import Scale from '../Functions/Scale'

const { height, width } = Dimensions.get("screen")

const SelectPassword = ({ navigation }) => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const btnSize = Scale(430, 60, 56)
    const styles = StyleSheet.create({
        headText: {
            marginTop: height * 0.05,
            fontSize: FontSize.F30,
            marginBottom: height * 0.06
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
            marginTop: height * 0.42
        },
    })

    return (
        <KeyboardAvoidingView style={{ backgroundColor: "red", flex: 1 }}>
            <Container style={{ flex: 1 }}>
                <Pressable style={{ marginTop: height * 0.03 }}
                    onPress={() => navigation.goBack()}>
                    <Backward width={FontSize.F15} height={FontSize.F15} />
                </Pressable>
                <GradientText colors={['#2445F6', '#172C9BC0', "#00000054"]}
                    style={[styles.headText, styles.textCenter, styles.quicksandBold]}>
                    Pick a password
                </GradientText>
                <Text style={[styles.label, styles.font10, styles.quicksandRegular]}>PASSWORD</Text>
                <InputField
                    width={"100%"}
                    paddingVertical={0}
                    backgroundColor={"#fbfbfb"}
                    value={password}
                    onChangeText={setPassword}
                    borderColor={"#2445F6"}
                    fontSize={FontSize.F16}
                    borderWidth={1}
                    borderRadius={width * 0.01}
                />
                <Text style={[styles.label, styles.font10, styles.quicksandRegular]}>SECOND PASSWORD</Text>
                <InputField
                    width={"100%"}
                    paddingVertical={0}
                    backgroundColor={"#fbfbfb"}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    borderColor={"#2445F6"}
                    fontSize={FontSize.F16}
                    borderWidth={1}
                    borderRadius={width * 0.01}
                />
                <Pressable style={[styles.btn]}
                    onPress={() => navigation.navigate("SigninEmail")}>
                    <Forward width={FontSize.F22} height={FontSize.F22} />
                </Pressable>
            </Container >
        </KeyboardAvoidingView>
    )
}

export default SelectPassword;