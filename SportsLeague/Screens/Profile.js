import { StyleSheet, View, Pressable, Dimensions, Image, Text, Modal } from 'react-native'
import React, { useState } from 'react'
import Container from '../Abstracts/Container'
import Settings from '../Svgs/Settings'
import { FontSize } from '../assets/Theme'
import Backward from '../Svgs/Backward'
import Scale from '../Functions/Scale'
import ProfileBody from '../Components/ProfileBody'
import Archive from '../Svgs/Archive'
import Mail from '../Svgs/Mail'
const { height, width } = Dimensions.get("screen")

const Profile = ({ navigation, route }) => {
    const imageSize = Scale(430, 100, 100);
    const logoImage = Scale(430, 40, 40);
    const modalSize = Scale(430, 150, 80);
    const AchieveModalSize = Scale(430, 392, 191);
    const selectedItem = route.params?.selectedItem;
    const [settingsModalVisible, setSettingsModalVisible] = useState(false);
    const [achieveModalVisible, setAchieveModalVisible] = useState(false);

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
        nameContainer: {
            flexDirection: "row",
            alignItems: "center",
            marginTop: height * 0.02,
        },
        eventTitle: {
            paddingVertical: height * 0.01,
            fontSize: FontSize.F15,
            fontFamily: "Quicksand-Regular",
        },
        modalContainer: {
            paddingLeft: width * 0.025,
            justifyContent: "space-evenly",
            backgroundColor: 'white',
            width: modalSize.Width,
            height: modalSize.Height,
            borderRadius: modalSize.Width / 12,
            elevation: 5,
            position: "absolute",
            right: 25,
            top: 50
        },
        modalText: {
            fontSize: FontSize.F12,
            fontFamily: 'Quicksand-SemiBold',
            color: 'black',
            paddingHorizontal: height * 0.01,
        },
        archiveContianer: {
            flexDirection: "row",
            alignItems: "center"
        },
        AchieveModalContainer: {
            width: AchieveModalSize.Width,
            height: AchieveModalSize.Height,
            borderRadius: AchieveModalSize.Width / 15,
            backgroundColor: "white",
            alignSelf: "center",
            justifyContent: "space-between",
            paddingVertical: height * 0.02,
            paddingHorizontal: width * 0.04,
            marginTop: AchieveModalSize.Height / 0.65,
        },
        AchieveModalTitle: {
            fontSize: FontSize.F19,
            fontFamily: "Quicksand-Bold",
            color: "black"
        },
        AchieveModalText: {
            fontSize: FontSize.F14,
            fontFamily: 'Quicksand-Regular',
            paddingBottom: height * 0.024,
            color: "black"
        },
        modalCloseText: {
            fontFamily: 'Quicksand-SemiBold',
            fontSize: FontSize.F13,
            color: "#2445F6"
        },
    });

    return (
        <>
            <Container style={{ flex: 1 }}>
                <Pressable onPress={() => setSettingsModalVisible(false)}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Pressable style={{ marginTop: height * 0.03 }}
                            onPress={() => navigation.goBack()}>
                            <Backward width={FontSize.F17} height={FontSize.F17} />
                        </Pressable>
                        <Pressable style={{ marginTop: height * 0.03 }}
                            onPress={() => setSettingsModalVisible(true)}>
                            <Settings width={FontSize.F20} height={FontSize.F20} />
                        </Pressable>
                    </View>
                    <Modal
                        visible={settingsModalVisible}
                        transparent={true}
                        animationType="none">
                        <Pressable style={{ flex: 1 }}
                            onPress={() => setSettingsModalVisible(false)}>
                            <View style={styles.modalContainer}>
                                <Pressable style={styles.archiveContianer} onPress={() => {
                                    setAchieveModalVisible(true);
                                    setSettingsModalVisible(false);
                                }}>
                                    <Archive width={FontSize.F19} height={FontSize.F19} />
                                    <Text style={styles.modalText}>Achieve</Text>
                                </Pressable>
                                <Pressable style={styles.archiveContianer}>
                                    <Mail width={FontSize.F19} height={FontSize.F19} />
                                    <Text style={styles.modalText}>Contact support</Text>
                                </Pressable>
                            </View>
                        </Pressable>
                    </Modal>
                    <Modal
                        visible={achieveModalVisible}
                        transparent={true}
                        animationType="slide">
                        <Pressable style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                            onPress={() => setAchieveModalVisible(false)}>
                            <View style={styles.AchieveModalContainer}>
                                <Text style={styles.AchieveModalTitle}>Confirm archiving</Text>
                                <Text style={styles.AchieveModalText}>Are you sure you want to archive{" "}
                                    <Text style={{ color: "black", fontFamily: "Quicksand-Bold" }}>{selectedItem?.name}</Text>
                                </Text>
                                <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                                    <Pressable onPress={() => setAchieveModalVisible(false)}>
                                        <Text style={[styles.modalCloseText, { paddingHorizontal: width * 0.09 }]}>CANCEL</Text>
                                    </Pressable>
                                    <Pressable>
                                        <Text style={[styles.modalCloseText, { paddingRight: width * 0.03 }]}>ARCHIVE POOL</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Pressable>
                    </Modal>
                    <View style={{ alignItems: "center", marginTop: height * 0.02 }}>
                        <View>
                            <Image style={[styles.circularImage]} source={selectedItem?.img} resizeMode='cover' />
                            <Image style={[styles.logoImage]} source={selectedItem?.logo} />
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={[styles.title, styles.color]}>{selectedItem?.name}{" "}</Text>
                            <View>{selectedItem?.icon}</View>
                        </View>
                        <Text style={[styles.eventTitle, styles.color]}>{selectedItem?.title}</Text>
                    </View>
                </Pressable>
            </Container>
            <ProfileBody />
        </>
    )
}

export default Profile;