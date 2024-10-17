import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import image from '../../assets/Treino.png'
import { Image } from 'react-native'

export const Training = () => {
    return <View><Image style={styles.image} source={image} /></View>

}


const styles = StyleSheet.create({
    image: {
        width: '100%'
    }
})