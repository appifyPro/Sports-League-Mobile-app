import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, Dimensions } from 'react-native'
import InputField from '../Abstracts/InputField'
import Container from '../Abstracts/Container'
import Backward from '../Svgs/Backward'
import Button from '../Abstracts/Button'
import GradientText from '../Components/GradientText'
import { FontSize } from '../assets/Theme'
const { height, width } = Dimensions.get("screen")

const LoginUsername = ({ navigation }) => {
    const [username, setUsername] = useState("")
    const [Password, setPassword] = useState("")

    return (
        <Container style={{ flex: 1 }}>
            <Pressable style={{ marginTop: height * 0.03 }}
                onPress={() => navigation.goBack()}>
                <Backward width={FontSize.F15} height={FontSize.F15} />
            </Pressable>
            <GradientText colors={['#2445F6', '#172C9BC0', "#00000054"]}
                style={[styles.headText, styles.textCenter, styles.quicksandBold]}>
                Sign in with username
            </GradientText>
            <Text style={[styles.label, styles.font10, styles.quicksandRegular]}>Username</Text>
            <InputField
                width={"100%"}
                backgroundColor={"#fbfbfb"}
                value={username}
                onChangeText={setUsername}
                borderColor={"#2445F6"}
                fontSize={FontSize.F16}
                borderWidth={1}
                borderRadius={width * 0.01}
                paddingVertical={0}
            />
            <Text style={[styles.label, styles.font10, styles.quicksandRegular]}>Password</Text>
            <InputField
                width={"100%"}
                backgroundColor={"#fbfbfb"}
                value={Password}
                onChangeText={setPassword}
                borderColor={"#2445F6"}
                fontSize={FontSize.F16}
                borderWidth={1}
                borderRadius={width * 0.01}
                paddingVertical={0}
            />
            <Text onPress={() => navigation.navigate("ForgetPasswordScreen")}
                style={[styles.font10, styles.quicksandBold, { textAlign: "right", marginVertical: height * 0.012, color: "#FF3D00" }]}>RESET PASSWORD</Text>
            <Button
                text={"CONTINUE"}
                backgroundColor={"#1877F2"}
                width={"100%"}
                borderRadius={width * 0.01}
                fontSize={FontSize.F10}
                fontFamily={"Quicksand-Bold"}
                color={"white"}
                paddingVertical={height * 0.017}
                borderColor={"#2445F6"}
                borderWidth={1}
                style={{ marginTop: height * 0.34 }}
            />
            <Text onPress={() => navigation.navigate("SigninEmail")}
                style={[styles.font10, styles.quicksandBold, styles.textCenter, { marginVertical: height * 0.02, color: "black" }]}>USE USERNAME?</Text>
        </Container>
    )
}

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
    }
})

export default LoginUsername;