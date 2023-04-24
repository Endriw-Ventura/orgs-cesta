import React from "react";
import { StyleSheet, Text } from 'react-native';

export default function CustomText({ children, style }) {
    let fontStyle = style?.fontWeight === "bold" ? localStyles.fontMonserratBold : localStyles.fontMonserratRegular
    return <Text style={[style, fontStyle]}>{children}</Text>
}

const localStyles = StyleSheet.create({
    fontMonserratRegular: {
        fontFamily: 'MontserratRegular'
    },
    fontMonserratBold: {
        fontFamily: 'MontserratBold'
    },
});