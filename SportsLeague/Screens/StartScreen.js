import { Dimensions, StyleSheet, Text } from 'react-native'
import React from 'react'
import Container from '../Abstracts/Container'
import Button from '../Abstracts/Button'
import Facebook from '../Svgs/Facebook'
import Google from '../Svgs/Google'
import GradientText from '../Components/GradientText'
import { FontSize } from '../assets/Theme'
const { height, width } = Dimensions.get("screen")

const StartScreen = ({ navigation }) => {
    return (
        <Container style={{ flex: 1, alignItems: 'center' }}>
            <GradientText colors={['#061b93', '#172C9BC0', "#00000054"]} style={styles.headerText}>
                Start Here
            </GradientText>
            <Text style={[styles.bodyText, styles.refularFont]}>Link your preferred account or sign up with your email to get started</Text>
            <Button
                text={"CONTINUE WITH FACEBOOK"}
                LeadingIcon={Facebook}
                LeadingSize={FontSize.F19}
                backgroundColor={"#1877F2"}
                width={"100%"}
                borderRadius={width * 0.01}
                fontSize={FontSize.F10}
                color={"white"}
                paddingVertical={height * 0.017}
                fontFamily={"Quicksand-Bold"}
                style={{ marginVertical: height * 0.012, marginTop: height * 0.40 }}
            />
            <Button
                text={"CONTINUE WITH GOOGLE"}
                LeadingIcon={Google}
                LeadingSize={FontSize.F19}
                backgroundColor={"#fbfbfb"}
                width={"100%"}
                borderRadius={width * 0.01}
                fontSize={FontSize.F10}
                fontFamily={"Quicksand-Bold"}
                color={"black"}
                paddingVertical={height * 0.017}
                borderColor={"#2445F6"}
                borderWidth={1}
                style={{ marginVertical: height * 0.012 }}
            />
            <Button
                text={"CONTINUE WITH EMAIL"}
                backgroundColor={"#fbfbfb"}
                width={"100%"}
                borderRadius={width * 0.01}
                fontSize={FontSize.F10}
                fontFamily={"Quicksand-Bold"}
                color={"black"}
                paddingVertical={height * 0.017}
                borderColor={"#2445F6"}
                borderWidth={1}
                style={{ marginVertical: height * 0.012 }}
                onPress={() => navigation.navigate("SignupScreen")}
            />
            <Text style={[styles.signupText, styles.refularFont]}>Already have an account?{' '}
                <Text onPress={() => navigation.navigate("SigninEmail")}
                    style={{ fontFamily: "Quicksand-SemiBold", color: "#2445F6" }}>Sign in</Text>
            </Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: "Quicksand-Bold",
        marginTop: height * 0.05,
        fontSize: FontSize.F30
    },
    bodyText: {
        fontSize: FontSize.F15,
        textAlign: "center",
        width: width * 0.75,
        lineHeight: height * 0.025,
        marginTop: height * 0.04,
    },
    refularFont: {
        fontFamily: "Quicksand-Regular",
        color: "black",
    },
    signupText: {
        fontSize: FontSize.F15,
        marginTop: height * 0.03,
    }
})

export default StartScreen;