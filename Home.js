import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/Stack/Stack';

const Home = () => {
  return (
    <NavigationContainer>
        <Stack/>
    </NavigationContainer>
  )
}

export default Home

const styles = StyleSheet.create({})