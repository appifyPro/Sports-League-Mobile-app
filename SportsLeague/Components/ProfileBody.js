import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { FontSize } from '../assets/Theme';
import Forward from '../Svgs/Forward';
import Leaderboard from '../Svgs/Leaderboard';
import Pencil from '../Svgs/Pencil';
import PickSummary from '../Svgs/PicksSummary';
import AddProfileEmpty from '../Svgs/AddProfileEmpty';
import Rules from '../Svgs/Rules';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get("screen");

const ProfileBody = () => {
    const navigation = useNavigation()

    const game = [
        {
            icon: <Leaderboard width={FontSize.F20} height={FontSize.F20} />,
            name: "Leaderboard",
            onPress: () => navigation.navigate('Leaderboard'),
        },
        {
            icon: <Pencil width={FontSize.F22} height={FontSize.F22} />,
            name: "Make your picks",
            icon2: <Forward color={"grey"} width={FontSize.F12} height={FontSize.F12} />,
            onPress: () => navigation.navigate("PickTeam")
        },
        {
            icon: <PickSummary width={FontSize.F20} height={FontSize.F20} />,
            name: "Pick Summary",
            onPress: () => navigation.navigate('GroupStagePick'),
        },
    ];

    const pool = [
        {
            icon: <AddProfileEmpty width={FontSize.F22} height={FontSize.F22} />,
            name: "Entries",
            onPress: () => navigation.navigate('YourPicks'),
        },
        {
            icon: <Rules width={FontSize.F22} height={FontSize.F22} />,
            name: "Rules",
            onPress: () => navigation.navigate('PoolRules'),
        },
    ];

    const renderButtons = (data) => {
        return data.map((item, index) => (
            <View key={index}>
                <Pressable style={styles.btn} onPress={item.onPress}>
                    <View style={styles.iconContainer}>{item.icon}</View>
                    <View style={styles.txtContainer}>
                        <Text style={styles.text}>{item.name}</Text>
                        {item.icon2 && <View style={styles.icon2Container}>{item.icon2}</View>}
                    </View>
                </Pressable>
                {index < data.length - 1 && <View style={styles.line} />}
            </View>
        ));
    };

    return (
        <View style={{ flex: 1.8, backgroundColor: "white" }}>
            <Text style={styles.headText}>GAME</Text>
            <View style={styles.container}>
                {renderButtons(game)}
            </View>
            <Text style={styles.headText}>POOL</Text>
            <View style={styles.container}>
                {renderButtons(pool)}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: width * 0.05
    },
    iconContainer: {
        marginRight: width * 0.05,
    },
    icon2Container: {
        marginLeft: width * 0.05,
    },
    txtContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        paddingRight: width * 0.01,
    },
    text: {
        fontSize: FontSize.F12,
        fontFamily: "Quicksand-SemiBold",
        color: "black",
        paddingVertical: height * 0.02
    },
    container: {
        backgroundColor: "#f3f6ff",
        justifyContent: "space-between",
    },
    line: {
        width: width * 0.9,
        alignSelf: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#D9D9D9"
    },
    headText: {
        fontSize: FontSize.F12,
        fontFamily: "Quicksand-Bold",
        paddingLeft: width * 0.05,
        paddingVertical: height * 0.02
    },
});

export default ProfileBody;
