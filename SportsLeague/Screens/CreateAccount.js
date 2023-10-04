import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, Dimensions, KeyboardAvoidingView } from 'react-native'
import PhoneInput from 'react-native-phone-number-input';
import InputField from '../Abstracts/InputField'
import Container from '../Abstracts/Container'
import Backward from '../Svgs/Backward'
import GradientText from '../Components/GradientText'
import { FontSize } from '../assets/Theme'
import Forward from '../Svgs/Forward';
import Scale from '../Functions/Scale';
const { height, width } = Dimensions.get("screen")

const CreateAccount = ({ navigation }) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [displayName, setDisplayName] = useState("")
    const [phone, setPhone] = useState('')
    const btnSize = Scale(430, 60, 56)

    const styles = StyleSheet.create({
        headText: {
            marginTop: height * 0.05,
            fontSize: FontSize.F30,
            marginBottom: height * 0.01
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
        phoneContainer: {
            width: "100%",
            paddingVertical: height * 0.001,
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: "#fbfbfb",
            borderColor: "#2445F6",
        },
        textInput: {
            paddingVertical: 0,
            backgroundColor: "#fbfbfb",
        },
        countryPickerButtonStyle: {
            width: width * 0.17,
        },
        phoneInputText: {
            fontSize: FontSize.F16,
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
            {/* <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} > */}
            <Pressable style={{ marginTop: height * 0.03 }}
                onPress={() => navigation.goBack()}>
                <Backward width={FontSize.F15} height={FontSize.F15} />
            </Pressable>
            <GradientText colors={['#0824c4', '#172C9BC0', "#00000054"]}
                style={[styles.headText, styles.textCenter, styles.quicksandBold]}>
                Create account
            </GradientText>
            <Text style={[styles.label, styles.font10, styles.quicksandRegular]}>First Name</Text>
            <InputField
                width={"100%"}
                backgroundColor={"#fbfbfb"}
                value={firstName}
                onChangeText={setFirstName}
                borderColor={"#2445F6"}
                borderWidth={1}
                borderRadius={5}
                fontSize={FontSize.F16}
                paddingVertical={0}
            />
            <Text style={[styles.label, styles.font10, styles.quicksandRegular]}>Last Name</Text>
            <InputField
                width={"100%"}
                backgroundColor={"#fbfbfb"}
                value={lastName}
                onChangeText={setLastName}
                borderColor={"#2445F6"}
                borderWidth={1}
                fontSize={FontSize.F16}
                borderRadius={5}
                paddingVertical={0}
            />
            <Text style={[styles.label, styles.font10, styles.quicksandRegular]}>Display Name</Text>
            <InputField
                width={"100%"}
                backgroundColor={"#fbfbfb"}
                value={displayName}
                onChangeText={setDisplayName}
                borderColor={"#2445F6"}
                borderWidth={1}
                fontSize={FontSize.F16}
                borderRadius={5}
                paddingVertical={0}
            />
            <Text style={[styles.label, styles.font10, styles.quicksandRegular]}>Phone Number</Text>
            <PhoneInput
                defaultValue={phone}
                defaultCode="PK"
                layout="first"
                containerStyle={styles.phoneContainer}
                textContainerStyle={styles.textInput}
                codeTextStyle={{ fontSize: FontSize.F16 }}
                // flagButtonStyle={styles.countryPickerButtonStyle}
                countryPickerButtonStyle={styles.countryPickerButtonStyle}
                placeholder='Mobile Number'
                textInputProps={{ placeholderTextColor: "black", style: styles.phoneInputText }}
                value={phone}
                onChangeFormattedText={text => { setPhone(text) }}
                onChangeText={setPhone}
            />
            <Pressable style={[styles.btn,]}
                onPress={() => navigation.navigate("Notification")}>
                <Forward width={FontSize.F22} height={FontSize.F22} />
            </Pressable>
            {/* </KeyboardAvoidingView> */}
        </Container>
    )
}

export default CreateAccount;