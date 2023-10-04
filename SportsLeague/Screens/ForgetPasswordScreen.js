import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, Dimensions } from 'react-native'
import InputField from '../Abstracts/InputField'
import Container from '../Abstracts/Container'
import Backward from '../Svgs/Backward'
import Button from '../Abstracts/Button'
import GradientText from '../Components/GradientText'
import { FontSize } from '../assets/Theme'
const { width, height } = Dimensions.get("screen")

const ForgetPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState("")

    return (
        <Container style={{ flex: 1 }}>
            <Pressable style={{ marginTop: height * 0.03 }}
                onPress={() => navigation.goBack()}>
                <Backward width={FontSize.F15} height={FontSize.F15} />
            </Pressable>
            <GradientText colors={['#2445F6', '#172C9BC0', "#00000054"]}
                style={[styles.headText, styles.textCenter, styles.quicksandBold]}>
                I forgot my password
            </GradientText>
            <Text style={[styles.quicksandRegular, styles.textCenter, { fontSize: FontSize.F12, alignSelf: "center", width: "80%" }]}>
                Enter your email address, and we’ll send you a link to reset your password.</Text>
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
                borderRadius={width * 0.01}
            />
            <Button
                text={"RESET PASSWORD"}
                backgroundColor={"#1877F2"}
                width={"100%"}
                borderRadius={width * 0.01}
                fontSize={FontSize.F10}
                fontFamily={"Quicksand-Bold"}
                color={"white"}
                paddingVertical={height * 0.017}
                borderColor={"#2445F6"}
                borderWidth={1}
                style={{ marginTop: height * 0.476 }}
                onPress={() => navigation.navigate("SelectPassword")}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    headText: {
        marginTop: height * 0.04,
        fontSize: FontSize.F30,
        marginBottom: height * 0.05
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

export default ForgetPasswordScreen;