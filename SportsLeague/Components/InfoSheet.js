import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import Container from '../Abstracts/Container';
import BottomSheet from './BottomSheet';
import { FontSize } from '../assets/Theme';
import Button from '../Abstracts/Button';
import Scale from '../Functions/Scale';
import { useNavigation } from '@react-navigation/native';
import Cross from '../Svgs/Cross';
const { height, width } = Dimensions.get("screen")

const InfoSheet = ({ refRBSheet, selectedItem }) => {
    const imageSize = Scale(430, 100, 100);
    const logoImage = Scale(430, 40, 40);
    const sheetHeight = Scale(430, 430, 400);
    const navigation = useNavigation()

    const styles = StyleSheet.create({
        flex: {
            flex: 1,
        },
        title: {
            fontSize: FontSize.F16,
            fontFamily: "Quicksand-Bold",
        },
        circularImage: {
            width: imageSize.Width,
            height: imageSize.Height,
            borderRadius: imageSize.Width / 2,
        },
        logoImage: {
            width: logoImage.Width,
            height: logoImage.Height,
            borderRadius: logoImage.Width / 2,
            borderWidth: 2,
            borderColor: "white",
            position: "absolute",
            left: width * 0.18,
            bottom: height * 0.0005
        },
        color: {
            color: "black"
        },
        conText: {
            fontFamily: "Quicksand-SemiBold",
            fontSize: FontSize.F13
        },
        nameContainer: {
            flexDirection: "row",
            alignItems: "center",
            marginTop: height * 0.02,
        },
        eventTitle: {
            paddingVertical: height * 0.01,
            fontSize: FontSize.F15,
            fontFamily: "Quicksand-Regular"
        }
    });

    return (
        <>
            <BottomSheet refRBSheet={refRBSheet} height={sheetHeight.Height}>
                <Container style={styles.flex}>
                    <Pressable onPress={() => refRBSheet.current.close()}>
                        <Cross width={FontSize.F15} height={FontSize.F15} />
                    </Pressable>
                    <View style={{ alignItems: "center" }}>
                        <View>
                            <Image style={[styles.circularImage]} source={selectedItem?.img} resizeMode='cover' />
                            <Image style={[styles.logoImage]} source={selectedItem?.logo} />
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={[styles.title, styles.color]}>{selectedItem?.name}{" "}</Text>
                            <View>{selectedItem?.icon}</View>
                        </View>
                        <Text style={[styles.eventTitle, styles.color]}>{selectedItem?.title}</Text>
                        <Text style={[styles.conText, { color: "#05B6AD" }]}>{selectedItem?.points}</Text>
                    </View>
                    <Button
                        text={"JOIN"}
                        backgroundColor={"#1877F2"}
                        width={"100%"}
                        borderRadius={width * 0.01}
                        fontSize={FontSize.F13}
                        fontFamily={"Quicksand-SemiBold"}
                        color={"white"}
                        paddingVertical={height * 0.017}
                        borderColor={"#2445F6"}
                        borderWidth={1}
                        onPress={() => { refRBSheet.current.close() }}
                        style={{ marginVertical: height * 0.03 }}
                    />
                    <Pressable onPress={() => navigation.navigate("Profile", { selectedItem })}>
                        <Text style={[styles.color, styles.conText, { textAlign: "center" }]}>COMMISIONER INFO</Text>
                    </Pressable>
                </Container>
            </BottomSheet>
        </>
    );
};

export default InfoSheet;
