import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('screen')

const CardComp = ({ product }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Product', { item: product })}>
            <View style={styles.card}>
                <Image source={{ uri: product.imgURL }} style={styles.productImg} />
                <Text style={styles.title}>
                    {product.title}
                </Text>
                <Text style={styles.price}>
                    {product.price}
                </Text>
                {product.inStock ? null : <Text style={styles.outStock}>Elimizde Yok</Text>}
            </View>
        </TouchableOpacity>
    )
}

export default CardComp

const styles = StyleSheet.create({
    card: {
        width: width * 0.45,
        height: height * 0.4,
        marginHorizontal: 5,
        marginVertical: 10,
    },
    productImg: {
        width: '100%',
        height: '55%',
    },
    title: {
        fontSize: 16,
        fontWeight: '400',
        margin: 5,
    },
    price: {
        fontSize: 18,
        fontWeight: "600",
        margin: 8,
    },
    outStock: {
        color: 'red',
        fontSize: 16,
        fontWeight: '600',
        marginHorizontal: 10,
        marginVertical: 5
    }
})