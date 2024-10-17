import React from 'react'
import { View, Text, StyleSheet } from 'react-native-web'
import image from '../../assets/Home (1).png'
import { Image } from 'react-native'

export const Home = () => {
    return <View>
        <Image style={styles.image} source={image} />
    </View>

}


const styles = StyleSheet.create({
    image: {
        width: '100%'
    }
})
