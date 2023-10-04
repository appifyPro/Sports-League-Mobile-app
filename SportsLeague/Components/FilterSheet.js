import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Pressable, ScrollView, Dimensions } from 'react-native';
import Container from '../Abstracts/Container';
import BottomSheet from './BottomSheet';
import NoSelect from '../Svgs/NoSelect';
import Select from '../Svgs/Select';
import { FontSize } from '../assets/Theme';
import Button from '../Abstracts/Button';
import CrossLight from '../Svgs/CrossLight';
import Scale from '../Functions/Scale';
const { height, width } = Dimensions.get("screen")

const FilterSheet = ({ refRBSheet }) => {
    const sheetHeight = Scale(430, 430, 700)
    const [dataset, setDataset] = useState([
        {
            title: 'Start Date',
            selected: true,
        },
        {
            title: 'Start Date (reverse)',
        },
        {
            title: 'Name (A-Z)',
        },
        {
            title: 'Name (Z-A)',
        },
        {
            title: '# of pool Members',
        },
        {
            title: 'Role',
        },
    ]);

    const [sportsData, setSportsData] = useState([
        {
            title: 'Pro Football',
            selected: true,
        },
        {
            title: 'College Basketball',
        },
        {
            title: 'Pro Basketball',
        },
        {
            title: 'Golf',
        },
        {
            title: 'Soccer',
        },
    ]);

    const handleSelection = (index) => {
        setDataset((prevState) => {
            const temp = prevState.map((item, i) => {
                if (i === index) {
                    return { ...item, selected: true };
                } else {
                    return { ...item, selected: false };
                }
            });
            return temp;
        });
    };

    const handleSelection1 = (index) => {
        setSportsData((prevState) => {
            const temp = prevState.map((item, i) => {
                if (i === index) {
                    return { ...item, selected: true };
                } else {
                    return { ...item, selected: false };
                }
            });
            return temp;
        });
    };

    const styles = StyleSheet.create({
        flex: {
            flex: 1,
        },
        row: {
            flexDirection: 'row',
            justifyContent: "space-between"
        },
        title: {
            fontSize: FontSize.F15,
            fontFamily: "Quicksand-Regular",
            marginVertical: height * 0.025,
            color: "black"
        },
        headTitle: {
            fontSize: FontSize.F12,
            fontFamily: "Quicksand-SemiBold"
        },
        selection: {
            justifyContent: 'center',
        },
        titleLine: {
            borderBottomWidth: 1,
            borderColor: '#D9D9D9',
        },
    });

    return (
        <>
            <BottomSheet refRBSheet={refRBSheet} height={sheetHeight.Height}>
                <Container style={styles.flex}>
                    <View style={[styles.row, { paddingBottom: height * 0.02 }]}>
                        <Pressable onPress={() => refRBSheet.current.close()}>
                            <CrossLight width={FontSize.F13} height={FontSize.F13} />
                        </Pressable>
                        <Text style={{ fontSize: FontSize.F15, fontFamily: "Quicksand-Bold", color: "black" }}>Sort by</Text>
                        <Text style={{ fontSize: FontSize.F12, fontFamily: "Quicksand-Regular", color: "#2445F6" }}>RESET</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <Text style={styles.headTitle}>SORT BY</Text>
                        </View>
                        <View>
                            {dataset.map((data, key) => {
                                return (
                                    <View key={key}>
                                        <TouchableWithoutFeedback
                                            onPress={() => {
                                                handleSelection(key);
                                            }}
                                        >
                                            <View style={styles.row}>
                                                <Text style={styles.title}>{data.title}</Text>
                                                <View style={styles.selection}>
                                                    {data.selected ? (
                                                        <Select
                                                            width={FontSize.F18}
                                                            height={FontSize.F18}
                                                        />
                                                    ) : (
                                                        <NoSelect
                                                            width={FontSize.F18}
                                                            height={FontSize.F18}
                                                        />
                                                    )}
                                                </View>
                                            </View>
                                        </TouchableWithoutFeedback>
                                        {key !== dataset.length - 1 && <View style={styles.titleLine} />}
                                    </View>
                                );
                            })}
                        </View>
                        <View>
                            <Text style={[styles.headTitle, { marginTop: height * 0.06 }]}>FILTER SPORTS</Text>
                        </View>
                        <View>
                            {sportsData.map((data, key) => {
                                return (
                                    <View key={key}>
                                        <TouchableWithoutFeedback
                                            onPress={() => {
                                                handleSelection1(key);
                                            }}
                                        >
                                            <View style={styles.row}>
                                                <Text style={styles.title}>{data.title}</Text>
                                                <View style={styles.selection}>
                                                    {data.selected ? (
                                                        <Select
                                                            width={FontSize.F18}
                                                            height={FontSize.F18}
                                                        />
                                                    ) : (
                                                        <NoSelect
                                                            width={FontSize.F18}
                                                            height={FontSize.F18}
                                                        />
                                                    )}
                                                </View>
                                            </View>
                                        </TouchableWithoutFeedback>
                                        {key !== sportsData.length - 1 && <View style={styles.titleLine} />}
                                    </View>
                                );
                            })}
                        </View>
                        <Button
                            text={"APPLY"}
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
                            style={{ marginBottom: height * 0.03 }}
                        />
                    </ScrollView>
                </Container>
            </BottomSheet>
        </>
    );
};

export default FilterSheet;
