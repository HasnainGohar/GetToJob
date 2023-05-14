import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import ArrowIcon from 'react-native-vector-icons/Ionicons'
import HeartIcon from 'react-native-vector-icons/Ionicons'
import Caretdown from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'


const JobDetails = ({ route }) => {
    data = route.params

    const navigation = useNavigation()

    return (
        <View style={{ position: 'relative', flex: 1 }}>
            <ScrollView>
                <View style={{ gap: 10 }}>

                    <View style={{ backgroundColor: 'white' }}>
                        <View style={styles.headerIcons}>
                            <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}  >
                                <ArrowIcon name='arrow-back' color='#181A1F' size={25} />
                            </TouchableOpacity>
                            <View>
                                <HeartIcon name='heart-outline' color='#181A1F' size={25} />
                            </View>
                        </View>
                        <View style={styles.jobTitle}>
                            <View style={styles.avatar}>
                                <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={data.img_url} />
                            </View>
                            <View>
                                <Text style={{ color: 'black', fontWeight: '500', fontSize: 27 }}>{data.company} </Text>
                                <Text style={{ fontSize: 14 }}>{data.tag}</Text>
                                <Text style={{ fontSize: 12 }}>{data.post}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'white', flexDirection: 'row', paddingBottom: 10 }}>
                        <View style={{ flex: 1, padding: 10, gap: 15 }} >
                            <Text>Apply Before</Text>
                            <Text>{data.last}</Text>
                            <View style={{ marginTop: 10 }} >
                                <Text>Salary Range</Text>
                                <Text>{data.salary}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, padding: 10, gap: 15 }} >
                            <Text>Job Nature</Text>

                            <View style={styles.jobtag} >
                                <Text style={{ fontSize: 13, padding: 4, color: '#181A1F' }}>Contractual</Text>
                            </View>
                            <View>
                                <Text>Job Location</Text>
                                <Text>Work from anywhere</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'white', flexDirection: 'row', paddingBottom: 10 }}>
                        <View style={{ padding: 15, gap: 10 }}>
                            <Text> Job Description</Text>
                            <Text style={{ textAlign: 'justify', fontSize: 15 }}>
                                Can you bring creative human-centered ideas to life and make great things happen beyond what meets the eye?
                                We believe in teamwork, fun, complex projects, diverse perspectives, and simple solutions. How about you? We're looking for a like-minded
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                <Text style={{ color: '#1C58F2', fontSize: 12, fontWeight: '700' }}>See more</Text>
                                <Caretdown name='caretdown' size={10} color='#1C58F2' />
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'white', flexDirection: 'row', paddingBottom: 10 }}>
                        <View style={{ padding: 15, gap: 10 }}>
                            <Text> Roles AND RESPONSIBILITIES</Text>
                            <Text style={{ textAlign: 'justify', fontSize: 15, }}>
                                - Someone who has ample work experience with synthesizing primary research, developing insight-driven product strategy, and extending that strategy into artefacts in a creative, systematic and logical fashion
                            </Text>
                            <Text> -Adapt and meticulous with creating user</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                <Text style={{ color: '#1C58F2', fontSize: 12, fontWeight: '700' }}>See more</Text>
                                <Caretdown name='caretdown' size={10} color='#1C58F2' />
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
            <View style={{
                justifyContent:'center',
                alignItems:'center',
                padding: 20,
                zIndex: 999,
            }}>
                <View style={[styles.searchView]} >
                    <Text style={{ color: 'white' }}>APPLY NOW</Text>
                </View>
            </View>
        </View>
    )
}

export default JobDetails

const styles = StyleSheet.create({
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingTop: 30
    },
    jobTitle: {
        padding: 20,
        gap: 10,
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.3)'
    }
    , jobtag: {
        backgroundColor: '#F5F7FC',
        borderRadius: 12,
        paddingHorizontal: 6,
        width: 90
    },
    searchView: {
        height: 55,
        width: '100%',
        backgroundColor: '#1C58F2',
        borderRadius: 12,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bottom:20,

    }
})
