import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import SearchIcon from 'react-native-vector-icons/EvilIcons'
import FilterIcon from 'react-native-vector-icons/Ionicons'
const Searchbar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchView} >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 7 }} >
                    <SearchIcon name='search' color='white' size={25} />
                    <TextInput style={{ color: 'white', fontSize: 16, }} placeholderTextColor={'white'}  placeholder='search yor job' />
                </View>
                <FilterIcon name='md-filter-outline' color='white' size={20} />
            </View>
        </View>
    )
}

export default Searchbar


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:20
    },
    searchView: {
        position: 'absolute',
        bottom:40,
        height: 55,
        width: '100%',
        backgroundColor: '#1C58F2',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
       
    },
})


