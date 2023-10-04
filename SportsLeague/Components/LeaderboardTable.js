import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, Dimensions } from 'react-native';
import { FontSize } from '../assets/Theme';
import Downward from '../Svgs/Downward';
const { width } = Dimensions.get("screen")

const LeaderboardTable = ({ leaderboardData }) => {
    return (
        <ScrollView horizontal={true}>
            <View style={{ backgroundColor: "#f3f6ff", }}>
                <View style={styles.header}>
                    <View style={[styles.column, styles.column1]}>
                        <Text style={styles.columnHeader}>Place</Text>
                    </View>
                    <View style={[styles.column, styles.column2]}>
                        <Text style={styles.columnHeader}>Player (enrty #)</Text>
                    </View>
                    <View style={[styles.column]}>
                        <Text style={styles.columnHeader}>Total Points <Downward /></Text>
                    </View>
                    <View style={[styles.column]}>
                        <Text style={styles.columnHeader}>Possible Points</Text>
                    </View>
                    <View style={[styles.column]}>
                        <Text style={styles.columnHeader}>Points</Text>
                    </View>
                    <View style={[styles.column]}>
                        <Text style={styles.columnHeader}>Points</Text>
                    </View>
                    <View style={[styles.column]}>
                        <Text style={styles.columnHeader}>Predicted Champion</Text>
                    </View>
                </View>

                <FlatList
                    data={leaderboardData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.row}>
                            <View style={[styles.column, styles.column1]}>
                                <Text style={styles.columnText}>{item.name}</Text>
                            </View>
                            <View style={[styles.column, styles.column2]}>
                                <Text style={styles.columnText}>{item.score}</Text>
                            </View>
                            <View style={[styles.column]}>
                                <Text style={styles.columnText}>{item.col3}</Text>
                            </View>
                            <View style={[styles.column]}>
                                <Text style={styles.columnText}>{item.col4}</Text>
                            </View>
                            <View style={[styles.column]}>
                                <Text style={styles.columnText}>{item.col5}</Text>
                            </View>
                            <View style={[styles.column]}>
                                <Text style={styles.columnText}>{item.col6}</Text>
                            </View>
                            <View style={[styles.column]}>
                                <Text style={styles.columnText}>{item.col7}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: width * 0.02
    },
    columnHeader: {
        fontFamily: 'Quicksand-Bold',
        fontSize: FontSize.F12,
        color: "#2445F6",
        textAlign: 'center',
        paddingLeft: width * 0.06
    },
    columnText: {
        fontFamily: 'Quicksand-Bold',
        fontSize: FontSize.F12,
        color: "black",
        textAlign: 'center',
    },
    column: {
        width: width * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    column1: {
        width: width * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    column2: {
        width: width * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingLeft: width * 0.04,
        paddingVertical: width * 0.06
    },
    columnText: {
        fontFamily: 'Quicksand-Bold',
        fontSize: FontSize.F12,
        color: "black",
        textAlign: 'center',
    },
});

export default LeaderboardTable;
