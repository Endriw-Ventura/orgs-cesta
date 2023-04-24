
import React from "react";
import CustomText from "../../../components/CustomText";
import { StyleSheet, View, Image, Button, TouchableOpacity } from "react-native";

export default function BasketDetails({ basketTitleText, basketLocationText, basketDescriptionText, basketPriceText, basketLogo, buttonText }) {
    return <>
        <CustomText style={localStyles.basketTitleTextStyle}> {basketTitleText} </CustomText>
        <View style={localStyles.basketViewStyle}>
            <Image source={basketLogo} style={localStyles.logoImageStyle} />
            <CustomText style={localStyles.basketLocationTextStyle}>{basketLocationText} </CustomText>
        </View>
        <CustomText style={localStyles.basketDescriptionTextStyle}> {basketDescriptionText}</CustomText>
        <CustomText style={localStyles.basketPriceTextStyle}>{basketPriceText} </CustomText>
        <TouchableOpacity style={localStyles.buttonStyle}>
            <CustomText style={localStyles.buttonTextStyle}>
                {buttonText}
            </CustomText>
        </TouchableOpacity>
    </>
}

const localStyles = StyleSheet.create({
    basketTitleTextStyle: {
        color: '#464646',
        padding: 16,
        fontSize: 24,
        fontWeight: 'bold'
    },
    basketDescriptionTextStyle: {
        color: '#A3A3A3',
        padding: 16,
        fontSize: 16,
        fontWeight: 'bold'
    },
    basketPriceTextStyle: {
        color: '#04A566',
        padding: 16,
        fontSize: 24,
        fontWeight: 'bold'
    },
    basketLocationTextStyle: {
        color: '#464646',
        fontSize: 20,
        marginLeft: 12
    },
    basketViewStyle: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    logoImageStyle: {
        marginLeft: 16,
        width: 32,
        height: 32
    },
    buttonStyle: {
        marginVertical: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 10,
        marginHorizontal: 20
    },
    buttonTextStyle:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 22,
        fontSize: 20
    }
});