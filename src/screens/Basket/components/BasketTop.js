import React from "react";
import topo from '../../../../assets/topo.png'
import { Image, Dimensions, StyleSheet } from 'react-native'
import CustomText from "../../../components/CustomText";

const width = Dimensions.get('screen').width

export default function BasketTop({screenTitleText}) {
    return <>
        <Image source={topo} style={localStyles.topImageStyle} />
        <CustomText style={localStyles.screenTitleTextStyle}> {screenTitleText} </CustomText>
    </>
}

const localStyles = StyleSheet.create({
    topImageStyle: {
        width: width,
        height: 578 / 768 * width
    },
    screenTitleTextStyle: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        color: 'white',
        padding: 16,
        lineHeight: 26,
        fontSize: 20,
        fontWeight: 'bold'
    },
});