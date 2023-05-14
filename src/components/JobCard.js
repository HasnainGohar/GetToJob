import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
const JobCard = ({data}) => {
    
    console.log(data)
    const navigation=useNavigation()
    return (
        <View style={{ paddingHorizontal: 15 }}>
            <TouchableOpacity activeOpacity={1} style={styles.cardView} onPress={()=>navigation.navigate('jobdetail',data)} >
                <View style={styles.title}>
                    <View style={styles.avatar}>
                        <Image style={{height:'100%',width:'100%',resizeMode:'contain'}} source={data.img_url}/>
                    </View>
                    <View>
                        <Text style={{ color: 'black', fontWeight: '600', fontSize: 16 }}>{data.company} </Text>
                        <Text>{data.tag}</Text>
                    </View>
                </View>

                <View style={[styles.header, { paddingTop: 0 }]}>
                    <View style={styles.jobtag} >
                        <Text style={{ fontSize: 13, padding: 4, color: '#181A1F' }}>Contractual</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <Text style={{ color: '#181A1F' }}>{data.salary}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default JobCard

const styles = StyleSheet.create({

    cardView: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginVertical:10
    },

    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 20,
        gap: 6
    },
    jobtag: {
        backgroundColor: '#F5F7FC',
        borderRadius: 12,
        paddingHorizontal: 6
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    avatar: {
        height: 44,
        width: 44,
        borderRadius: 15,
        backgroundColor: 'rgba(0,0,0,0.3)'
    }
})