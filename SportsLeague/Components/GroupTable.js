import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FontSize } from '../assets/Theme';

const { height, width } = Dimensions.get("screen");

const GroupTable = ({ groupName, data }) => {
    const displayedData = data.slice(0, 4)

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", width: "100%" }}>
                <Text style={styles.groupName}>{groupName}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "50%" }}>
                    <Text style={styles.head}>1st</Text>
                    <Text style={styles.head}>2nd</Text>
                    <Text style={styles.head}>3rd</Text>
                    <Text style={styles.head}>4th</Text>
                </View>
            </View>
            {displayedData.map((item, index) => (
                <View style={styles.row} key={index}>
                    <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                        <View style={{ paddingRight: width * 0.03 }}>{item.flag}</View>
                        <Text style={[styles.cellText, { color: "black" }]}>{item.country}</Text>
                    </View>
                    <View style={[styles.row, { width: "50%" }]}>
                        <View style={styles.cell}>
                            <Text style={styles.cellText}>{item.value1}</Text>
                        </View>
                        <View style={styles.cell}>
                            <Text style={styles.cellText}>{item.value2}</Text>
                        </View>
                        <View style={styles.cell}>
                            <Text style={styles.cellText}>{item.value3}</Text>
                        </View>
                        <View style={styles.cell}>
                            <Text style={styles.cellText}>{item.value4}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: height * 0.05,
    },
    groupName: {
        width: "50%",
        fontFamily: "InknutAntiqua-SemiBold",
        fontSize: FontSize.F12,
        color: "black",
    },
    row: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-between",
    },
    cell: {
        flex: 1,
        paddingTop: height * 0.015,
        paddingBottom: height * 0.015,
    },
    cellText: {
        fontSize: FontSize.F10,
        fontFamily: "Quicksand-Regular",
        color: "#2445F6"
    },
    head: {
        fontFamily: "Quicksand-Semibold",
        fontSize: FontSize.F12,
        color: "black",
        flex: 1
    }
});

export default GroupTable;
