import { View, Text } from 'react-native'
import React from 'react'
import ProductComp from '../components/ProductComp'

const ProductPage = ({ route }) => {
    return (
        <ProductComp route={route} />
    )
}

export default ProductPage