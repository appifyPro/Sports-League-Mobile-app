import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Pressable, ScrollView } from 'react-native';
import Lions from '../Svgs/Lions';
import Chiefs from '../Svgs/Chiefs';
import Titans from '../Svgs/Titans';
import Saints from '../Svgs/Saints';
import Jaguars from '../Svgs/Jaguars';
import Colts from '../Svgs/Colts';
import Lion from '../Svgs/Lion';
import Chief from '../Svgs/Chief';
import { FontSize } from '../assets/Theme';
import Select from '../Svgs/Select';
import NoSelect from '../Svgs/NoSelect';

const { width, height } = Dimensions.get('screen');
const iconSize = FontSize.F30;

const data = [
    {
        date: "THU SEP 7 - 9:30 PM ET",
        team1i: <Lions width={FontSize.F35} height={FontSize.F30} />,
        team1: "Lions",
        team2i: <Chiefs width={iconSize} height={iconSize} />,
        team2: "Chiefs"
    },
    {
        date: "SUN SEP 10 - 1:30 PM ET",
        team1i: <Titans width={iconSize} height={iconSize} />,
        team1: "Titans",
        team2i: <Saints width={iconSize} height={iconSize} />,
        team2: "Saints"
    },
    {
        date: "SUN SEP 10 - 1:30 PM ET",
        team1i: <Jaguars width={iconSize} height={iconSize} />,
        team1: "Jaguars",
        team2i: <Colts width={iconSize} height={iconSize} />,
        team2: "Colts"
    },
    {
        date: "SUN SEP 10 - 1:30 PM ET",
        team1i: <Lion width={iconSize} height={iconSize} />,
        team1: "Lions",
        team2i: <Chief width={iconSize} height={iconSize} />,
        team2: "Chiefs"
    },
]

const TeamsChoice = () => {
    const [selectedTeams, setSelectedTeams] = useState({});

    const handleTeamSelection = (index, team) => {
        setSelectedTeams((prevSelectedTeams) => ({
            ...prevSelectedTeams,
            [index]: team,
        }));
    };

    return (
        <ScrollView>
            {data.map((item, index) => (
                <View key={index} style={{ marginBottom: height * 0.06, marginLeft: width * 0.15 }}>
                    <Text style={styles.date}>{item.date}</Text>
                    <View>
                        <Pressable onPress={() => handleTeamSelection(index, item.team1)}
                            style={[styles.teamOption,
                            selectedTeams[index] === item.team1 && styles.selectedOption,
                            ]}
                        >
                            <View>{item.team1i}</View>
                            <View style={styles.row}>
                                <Text style={styles.teamName}>{item.team1}</Text>
                                <View style={styles.selection}>
                                    {selectedTeams[index] === item.team1 ? (
                                        <Select width={FontSize.F18} height={FontSize.F18} />
                                    ) : (
                                        <NoSelect width={FontSize.F18} height={FontSize.F18} />
                                    )}
                                </View>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => handleTeamSelection(index, item.team2)}
                            style={[styles.teamOption,
                            selectedTeams[index] === item.team2 && styles.selectedOption,
                            ]}
                        >
                            <View>{item.team2i}</View>
                            <View style={styles.row}>
                                <Text style={styles.teamName}>{item.team2}</Text>
                                <View style={styles.selection}>
                                    {selectedTeams[index] === item.team2 ? (
                                        <Select width={FontSize.F18} height={FontSize.F18} />
                                    ) : (
                                        <NoSelect width={FontSize.F18} height={FontSize.F18} />
                                    )}
                                </View>
                            </View>
                        </Pressable>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    date: {
        fontSize: FontSize.F15,
        fontFamily: 'Quicksand-Bold',
    },
    teamName: {
        fontSize: FontSize.F13,
        fontFamily: 'Quicksand-Bold',
        marginLeft: width * 0.03,
        color: "black"
    },
    teamOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: height * 0.006,
        marginLeft: width * 0.07,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width * 0.36,
        marginLeft: width * 0.03
    },
});

export default TeamsChoice;
