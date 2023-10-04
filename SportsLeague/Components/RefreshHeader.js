import { StyleSheet, StatusBar, View, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Backward from '../Svgs/Backward'
import Refresh from '../Svgs/Refresh'
import { useNavigation } from '@react-navigation/native'
import { FontSize } from '../assets/Theme'
import Scale from '../Functions/Scale'
const { height: marginTop } = Dimensions.get("screen")

const RefreshHeader = () => {
    const navigation = useNavigation()
    const height = Scale(430, 430, 40)
    const styles = StyleSheet.create({
        container: {
            height: height.Height,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: marginTop * 0.05
        }
    })

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="white" />
            <Pressable onPress={() => navigation.goBack()}>
                <Backward width={FontSize.F18} height={FontSize.F18} />
            </Pressable>
            <Pressable>
                <Refresh width={FontSize.F20} height={FontSize.F20} />
            </Pressable>
        </View>
    )
}

export default RefreshHeader