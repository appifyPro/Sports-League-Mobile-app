import React from 'react';
import { Dimensions, View, } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
const { width, height } = Dimensions.get("screen")

const BottomSheet = ({ children, refRBSheet, height }) => {
    return (
        <RBSheet
            ref={refRBSheet}
            dragFromTopOnly={true}
            animationType={'slide'}
            openDuration={1850}
            // closeOnDragDown={true}
            customStyles={{
                container: {
                    borderTopStartRadius: width * 0.06,
                    borderTopEndRadius: width * 0.06,
                    paddingTop: 20,
                    paddingHorizontal: 10,
                    height: height,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            }}>
            <View style={{ width: '100%', height: '100%' }}>{children}</View>
        </RBSheet>
    );
};

export default BottomSheet;
