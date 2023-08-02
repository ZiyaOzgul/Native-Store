import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CardComp from './CardComp'

const Home = () => {
    const allProducts = useSelector(state => state.products.product)
    return (
        <SafeAreaView style={styles.page}>
            <Text style={styles.title}> Native Store  </Text>
            <FlatList
                data={allProducts}
                renderItem={(product) => <CardComp product={product.item} />}
                numColumns={2}
                keyExtractor={(product) => product.id}
            />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    title: {
        fontWeight: '600',
        fontSize: 25,
        marginVertical: 25,
        textAlign: 'center'
    }
})