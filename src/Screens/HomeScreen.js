import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import NotificationIcon from 'react-native-vector-icons/Ionicons'
import Caretdown from 'react-native-vector-icons/AntDesign'
import Searchbar from '../components/Searchbar'
import { Data } from '../../assets/APi/Data'
import JobCard from '../components/JobCard'
const HomeScreen = () => {
    return (
        <View style={{position:'relative',flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.header}>
                    <View style={styles.avatar} >
                        <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../../assets/images/profile-img.png')} />
                    </View>
                    <View>
                        <NotificationIcon name={'md-notifications-outline'} size={30} color='black' />
                    </View>
                </View>
                <View style={[styles.header, { paddingTop: 0, paddingBottom: 10 }]}>
                    <View  >
                        <Text style={{ fontSize: 13, fontWeight: '700', color: 'rgba(0,0,0,0.9)' }}>40 JOB FOUND</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <Text style={{ color: '#1C58F2' }}>All Relevance</Text>
                        <Caretdown name='caretdown' size={12} color='#1C58F2' />
                    </View>
                </View>
                {
                    Data.map((item, index) => (
                        <JobCard key={index} data={item} />
                    ))
                }
            </ScrollView>         
                <Searchbar />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 44,
        width: 44,
        borderRadius: 30,
        backgroundColor: 'rgba(0,0,0,0.3)'
    }
})