import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import JobDetails from '../Screens/JobDetails';
import SplashScreen from '../Screens/SplashScreen';
const Stack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='splash' component={SplashScreen}/>
            <Stack.Screen name='home' component={HomeScreen} />
            <Stack.Screen name='jobdetail' component={JobDetails} />
        </Stack.Navigator>
    )
}

export default Stack

const styles = StyleSheet.create({})