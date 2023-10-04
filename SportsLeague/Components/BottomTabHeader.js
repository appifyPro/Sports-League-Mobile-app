import React from 'react'
import { Text, StyleSheet, Image, View, Dimensions, Pressable, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontSize } from '../assets/Theme'
import Scale from '../Functions/Scale'
const { width } = Dimensions.get("screen")

const BottomTabHeader = ({ name, icon1, icon2, icon3, own }) => {
    const navigation = useNavigation()
    const height = Scale(430, 430, 40)
    const imageSize = Scale(430, 40, 40);
    const styles = StyleSheet.create({
        container: {
            height: height.Height,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        image: {
            width: imageSize.Width,
            height: imageSize.Height,
            borderRadius: imageSize.Width / 2,
        },
        text: {
            fontSize: FontSize.F15,
            fontFamily: "Quicksand-SemiBold",
            color: "black"
        }
    })

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"white"} />
            <Image style={styles.image} source={require("../Images/panda.jpg")} />
            <Text style={styles.text}>{name}</Text>
            {own ? (
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Pressable style={{ marginRight: width * 0.05 }}>
                        {icon1}
                    </Pressable>
                    <Pressable>
                        {icon2}
                    </Pressable>
                </View>
            ) : <Pressable>
                {icon3}
            </Pressable>
            }
        </View>
    )
}

export default BottomTabHeader;