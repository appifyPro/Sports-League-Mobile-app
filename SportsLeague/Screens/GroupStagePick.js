import { StyleSheet, Text, Dimensions, ScrollView, View } from 'react-native'
import React from 'react'
import RefreshHeader from '../Components/RefreshHeader'
import Container from '../Abstracts/Container'
import { FontSize } from '../assets/Theme'
import GroupTable from '../Components/GroupTable'
import UK from '../Svgs/UK'
import USA from '../Svgs/USA'
import Ukrine from '../Svgs/Ukrine'
import India from '../Svgs/India'
const { height } = Dimensions.get("screen")

const GROUPA = [
    { flag: <UK width={FontSize.F24} height={FontSize.F24} />, country: 'United Kingdom', value1: "90%", value2: "32%", value3: "90%", value4: "60%" },
    { flag: <USA width={FontSize.F24} height={FontSize.F24} />, country: 'United States', value1: "90%", value2: "32%", value3: "90%", value4: "60%" },
    { flag: <Ukrine width={FontSize.F24} height={FontSize.F24} />, country: 'Ukrine', value1: "90%", value2: "32%", value3: "90%", value4: "60%" },
    { flag: <India width={FontSize.F24} height={FontSize.F24} />, country: 'India', value1: "90%", value2: "32%", value3: "90%", value4: "60%" },
];

const GROUPB = [
    { flag: <UK width={FontSize.F24} height={FontSize.F24} />, country: 'United Kingdom', value1: "90%", value2: "32%", value3: "90%", value4: "60%" },
    { flag: <USA width={FontSize.F24} height={FontSize.F24} />, country: 'United States', value1: "90%", value2: "32%", value3: "90%", value4: "60%" },
    { flag: <Ukrine width={FontSize.F24} height={FontSize.F24} />, country: 'Ukrine', value1: "90%", value2: "32%", value3: "90%", value4: "60%" },
    { flag: <India width={FontSize.F24} height={FontSize.F24} />, country: 'India', value1: "90%", value2: "32%", value3: "90%", value4: "60%" },
];

const GROUPC = [
    { flag: <UK width={FontSize.F24} height={FontSize.F24} />, country: 'United Kingdom', value1: "90%", value2: "32%", value3: "90%", value4: "60%" },
    { flag: <USA width={FontSize.F24} height={FontSize.F24} />, country: 'United States', value1: "90%", value2: "32%", value3: "90%", value4: "60%" },
    { flag: <Ukrine width={FontSize.F24} height={FontSize.F24} />, country: 'Ukrine', value1: "90%", value2: "32%", value3: "90%", value4: "60%" },
    { flag: <India width={FontSize.F24} height={FontSize.F24} />, country: 'India', value1: "90%", value2: "32%", value3: "90%", value4: "60%" },
];


const GroupStagePick = () => {
    return (
        <Container style={{ flex: 1 }}>
            <RefreshHeader />
            <Text style={[styles.headText, styles.color]}>GROUP STAGE PICK SUMMARY</Text>
            <Text style={[styles.bodyText, styles.color]}>
                The following tables show how pool members picked each country to
                finish in their Group.
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1 }}>
                    <GroupTable groupName="GROUP A" data={GROUPA} />
                    <GroupTable groupName="GROUP B" data={GROUPB} />
                    <GroupTable groupName="GROUP C" data={GROUPC} />
                </View>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    headText: {
        fontSize: FontSize.F18,
        fontFamily: "InknutAntiqua-SemiBold"
    },
    bodyText: {
        fontSize: FontSize.F12,
        fontFamily: "Quicksand-Regular",
        textAlign: "center",
        marginVertical: height * 0.01,
    },
    color: {
        color: "black"
    }
})

export default GroupStagePick