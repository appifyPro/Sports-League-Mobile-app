import React from 'react';
import { StyleSheet, TextInput, View, Dimensions } from 'react-native';
const { height, width } = Dimensions.get("screen")
const height40 = height * 0.0035

const InputField = ({ width, height, style, color, elevation,
    onPress, value, onChangeText, onFocus,
    backgroundColor, placeholder, placeholderTextColor,
    borderWidth, borderColor, borderRadius,
    seperator, seperatorHeight, seperatorColor,
    fontSize, paddingVertical, paddingHorizontal,
    Leading_icon, leadingcolor, LeadingButton, leadingsize,
    Tailing_icon, tailingsize, TailingButton, tailingcolor,
    secureTextEntry, autoCapitalize, onTailingPress
}) => {

    const styles = StyleSheet.create({
        row: {
            flexDirection: 'row',
        },
        center: {
            alignSelf: 'center',
        },
        view: {
            width: width ?? '90%',
            paddingVertical: paddingVertical ?? 5,
            paddingHorizontal: paddingHorizontal ?? 7,
            backgroundColor: backgroundColor ?? 'rgba(0, 0)',
            elevation: elevation ?? 0,
            borderRadius: borderRadius ?? 10,
            borderWidth: borderWidth ?? 1,
            borderColor: borderColor ?? '#aaaaaa',
        },
        input: {
            fontSize: fontSize ?? 12,
            flex: 1,
            flexGrow: 1,
            paddingVertical: height ? height : height40,
            color: "black",
        },
        seperator: {
            height: seperatorHeight ?? '80%',
            alignSelf: 'center',
            marginHorizontal: 5,
            width: seperator ?? 0,
            backgroundColor: seperatorColor ?? 'black',
        },
        leading: {
            paddingLeft: 4,
            paddingRight: 8,
            alignItems: 'center',
        },
        tailing: {
            alignItems: 'center',
        },
    });
    return (
        <View style={[styles.row, styles.view, style]}>
            {Leading_icon !== undefined ? (
                LeadingButton !== undefined ? (
                    <LeadingButton
                        onPress={() => onPress()}
                        style={styles.leading}
                        width={null}
                        TextIcon={Leading_icon}
                        texticonsize={leadingsize}
                        texticoncolor={leadingcolor}
                    />
                ) : (
                    <View style={[styles.center, styles.leading]}>
                        <Leading_icon
                            width={leadingsize}
                            height={leadingsize}
                            color={leadingcolor}
                        />
                    </View>
                )
            ) : null}
            {seperator !== undefined ? <View style={styles.seperator} /> : null}
            <TextInput
                style={[styles.input]}
                onFocus={onFocus}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={"black"}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
            />
            {Tailing_icon !== undefined ? (
                TailingButton !== undefined ? (
                    <TailingButton
                        width={null}
                        TextIcon={Tailing_icon}
                        texticonsize={tailingsize}
                        texticoncolor={tailingcolor}
                        onPress={onTailingPress}
                    />
                ) : (
                    <View style={[styles.center, styles.leading]}>
                        <Tailing_icon
                            width={tailingsize}
                            height={tailingsize}
                            color={tailingcolor}
                        />
                    </View>
                )
            ) : null}
        </View>
    );
};

export default InputField;
