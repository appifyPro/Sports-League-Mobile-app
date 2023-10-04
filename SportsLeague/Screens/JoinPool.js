import React, { useState, useRef } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import BottomTabHeader from '../Components/BottomTabHeader';
import Container from '../Abstracts/Container';
import Search from '../Svgs/Search';
import InputField from '../Abstracts/InputField';
import { FontSize } from '../assets/Theme';
import Dollar from '../Svgs/Dollar';
import Scale from '../Functions/Scale';
import InfoSheet from '../Components/InfoSheet';
const { height, width } = Dimensions.get("screen");

const image = require("../Images/panda.jpg")
const logo = require("../Images/logo.jpg")

const JoinPool = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const data = [
        {
            img: image,
            logo: logo,
            name: "TaylorMade The open Pivk 6 content",
            points: "12810/ spots",
            title: "Golf majors",
            icon: <Dollar />
        },
        {
            img: image,
            logo: logo,
            name: "TaylorMade The open Pivk 6 content",
            points: "12810/ spots",
            title: "Women's World Cup soccer",
            icon: <Dollar />
        },
    ]

    const handleContentClick = (item) => {
        setSelectedItem(item);
        refRBSheet.current.open();
    };

    const imageSize = Scale(430, 50, 50);
    const logoImage = Scale(430, 30, 30);
    const refRBSheet = useRef();

    const styles = StyleSheet.create({
        text: {
            fontFamily: "Quicksand-Bold",
            fontSize: FontSize.F15,
            marginVertical: height * 0.03,
            color: "#cccccc"
        },
        imageContainer: {
            flexDirection: "row",
            alignItems: "center",
            marginVertical: height * 0.01,
        },
        imageWrapper: {
            position: "relative",
            marginRight: width * 0.06,
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
            left: width * 0.07,
            top: height * 0.02
        },
        infoContainer: {
            flexDirection: "row",
            alignItems: "center",
        },
        container: {
            marginTop: height * 0.02
        },
        color: {
            color: "black"
        },
        conText: {
            fontFamily: "Quicksand-SemiBold",
            fontSize: FontSize.F13,
        },
        line: {
            width: "115%",
            borderWidth: 0.9,
            borderColor: "black",
            position: "absolute",
            bottom: 0
        }
    });

    return (
        <Container style={{ flex: 1 }}>
            <BottomTabHeader name={"JOIN A POOL"} />
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
            <Text style={styles.text}>FEATURED</Text>
            <View style={styles.container}>
                {data.map((item, index) => (
                    <Pressable onPress={() => handleContentClick(item)}
                        key={index} style={styles.imageContainer}>
                        <View style={styles.imageWrapper}>
                            <Image style={[styles.circularImage]} source={item.img} resizeMode='cover' />
                            <Image style={[styles.logoImage]} source={item.logo} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={[styles.conText, styles.color]}>{item.name}</Text>
                            <View style={styles.infoContainer}>
                                <Text style={[styles.conText, { color: "#05B6AD" }]}>{item.points}</Text>
                                <Text style={[styles.conText, styles.color]}>{" ~ "}</Text>
                                <Text style={[styles.color, { fontSize: FontSize.F11, fontFamily: "Quicksand-Regular" }]}>{item.title}{"  "}</Text>
                                <View>{item.icon}</View>
                            </View>
                        </View>
                    </Pressable>
                ))}
            </View>
            <InfoSheet refRBSheet={refRBSheet} selectedItem={selectedItem} />
            <View style={styles.line} />
        </Container>
    )
}

export default JoinPool;