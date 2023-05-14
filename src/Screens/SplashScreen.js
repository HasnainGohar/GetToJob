import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('home')
        }, 1000)
    })
    return (
        <View style={{ flex: 1, backgroundColor: '#1C58F2', alignItems: 'center' }} >
            <View>
                <Image
                    style={{
                        height: height - 150,
                        width: height / 2.7
                    }}
                    source={require('../../assets/images/Saly-15.png')} />
            </View>
            <View style={{ position: 'absolute', zIndex: 1, bottom: 200 }}>
                <Image style={{ resizeMode: 'contain', height: width / 2, width: height / 2 }} source={require('../../assets/images/splashU.png')} />
            </View>
            <View style={{ position: 'absolute', zIndex: 1, bottom:100 }}>
                <Image source={require('../../assets/images/text.png')} />
            </View>

        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    text: {

    }

})