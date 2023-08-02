import { Dimensions, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen')

const ProductComp = ({ route }) => {
    const { item } = route.params;
    return (
        <SafeAreaView style={styles.page}>
            <Image source={{ uri: item.imgURL }} style={styles.productImg} />
            <Text style={styles.title}>
                {item.title}
            </Text>
            <View style={styles.container}>
                <Text style={styles.price}>
                    {item.price}
                </Text>
                {item.inStock ? <Text style={styles.inStock}>Ürün Stokta Var</Text> : <Text style={styles.outStock}>Ürün Tükendi</Text>}
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Satın Al
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ProductComp

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: StatusBar.currentHeight || 0,

    },
    productImg: {
        width: width,
        height: height * 0.55,
        borderRadius: 25,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 15,
        padding: 5,
    },
    container: {
        flexDirection: 'row',
        marginVertical: 15,
        padding: 5,
        justifyContent: 'space-evenly'
        , width: '100%'
    },
    price: {
        fontSize: 18,
        fontWeight: '600',
        color: '#0f0f0f',
    },
    inStock: {
        color: '#0faa0f',
        fontWeight: '400',
        fontSize: 18,
    },
    outStock: {
        color: '#aa0f0f',
        fontWeight: '400',
        fontSize: 18,
    },
    button: {
        borderWidth: 1,
        borderRadius: 15,
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '400',
    },
})