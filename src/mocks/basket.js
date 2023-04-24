
import logo from '../../assets/logo.png'

import tomatoImage from '../../assets/frutas/Tomate.png';
import broccoliImage from '../../assets/frutas/Brócolis.png';
import potatoImage from '../../assets/frutas/Batata.png';
import cucumberImage from '../../assets/frutas/Pepino.png';
import pumpkinImage from '../../assets/frutas/Abóbora.png';

const basket = {
    top: {
        screenTitleText: 'Basket Details'
    },
    details: {
        basketTitleText: 'Veggetables Basket',
        basketLocationText: 'Jenny Jack Farm',
        basketDescriptionText: 'A basket full of selected veggetables from the farm right to your kitchen',
        basketPriceText: 'R$ 40,00',
        basketLogo: logo,
        buttonText: 'Buy'
    },
    items:{
        basketItemListTitle: 'Basket Items',
        itemsList:[
            {
                itemName: 'Tomato',
                itemImage: tomatoImage
            },
            {
                itemName: 'Broccoli',
                itemImage: broccoliImage
            },
            {
                itemName: 'Potato',
                itemImage: potatoImage
            },
            {
                itemName: 'Cucumber',
                itemImage: cucumberImage
            },
            {
                itemName: 'Pumpkin',
                itemImage: pumpkinImage
            }
        ]
    }
}

export default basket