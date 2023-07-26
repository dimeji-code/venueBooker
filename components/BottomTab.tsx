import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

type Props = {}

const BottomTab = (props: Props) => {
    

    return (
    <View style={styles.box}>
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{}}> 
                <Feather name="home" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}> 
                <Feather name="search" size={20} color="white" />
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    box:{
        width:'100%',
        position:'absolute',
        backgroundColor: '#ffffff0',
        top: '90%', 
        height: '8%',
        borderRadius: 10,
        borderWidth: 0.1,
        display: 'flex',
        padding:5,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    container:{
        // backgroundColor: '#7c5d37',
        backgroundColor: '#262515af',
        padding:5,
        paddingHorizontal: 40,
        height: '100%',
        width: '80%',
        borderRadius: 60,
        borderWidth: 0.1,
        borderColor: '#fff',
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        shadowOpacity:0.3,
        shadowOffset:{width:2, height:2},

    },
    text:{
        color: '#fff',

    }
})