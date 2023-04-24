import { React } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import CustomText from "../../../components/CustomText";

export default function BasketItemList({ item: { itemName, itemImage } }) {
    return <View style={localStyles.itemStyle}>
        <Image style={localStyles.itemImageStyle} source={itemImage} />
        <CustomText style={localStyles.itemTextStyle}>{itemName}</CustomText>
    </View>
}

const localStyles = StyleSheet.create({
    itemImageStyle: {
        width: 46,
        height: 46,
        marginBottom: 10
    },
    itemTextStyle: {
        lineHeight: 20,
        fontSize: 16,
        marginLeft: 10
    },
    itemStyle: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        alignItems: 'center',
        margin: 12
    }
})