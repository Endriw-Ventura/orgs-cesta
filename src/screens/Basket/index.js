import React from "react";
import { FlatList, StyleSheet, View } from 'react-native';
import BasketTop from "./components/BasketTop";
import BasketDetails from "./components/BasketDetails";
import BasketItemList from "./components/BasketItemList";
import CustomText from "../../components/CustomText";

export default function Basket({ top, details, items }) {
    return <FlatList
        data={items.itemsList}
        renderItem={BasketItemList}
        keyExtractor={({itemName}) => itemName}
        ListHeaderComponent={() => {
            return <>
                <BasketTop {...top} />
                <View>
                    <BasketDetails {...details} />
                    <CustomText style={localStyles.titleTextStyle} >{items.basketItemListTitle}</CustomText>
                </View>
            </>
        }}
    />
}

const localStyles = StyleSheet.create({
    titleTextStyle: {
        width: '100%',
        lineHeight: 26,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16
    },
});
