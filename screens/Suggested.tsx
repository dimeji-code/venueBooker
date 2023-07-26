import React, { useEffect } from 'react'
import { View, Text,Image, TouchableOpacity,SafeAreaView, StyleSheet,ScrollView } from 'react-native'
import { venues } from '../data/data'
import { Ionicons } from '@expo/vector-icons';

type Props = {
    navigation:any,
    route:any
}

const Suggested = ({navigation, route}: Props) => {

    useEffect(() =>
    navigation.setOptions({ 
    headerTitle:"Suggested",
    headerLargeTitle:true,
    headerShadowVisible:false,
    headerTransparent:true,
    headerBackVisible:false,
    headerLargeStyle:{
        backgroundColor:"#c2c2a8c",
    },
    headerLargeTitleStyle:{
        fontSize:32,
        color:"#3a3e40",
    },
    headerTintColor: '#1D0432',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
        headerLeft:()=>(
            null
        ),
    })
)
    var theDate:Date = new Date(route.params.date)
    var peopleRange:number = Number(route.params.numPeople)

    console.log("SUGGESTED PARAMS: ", route.params)
    console.log("SUGGESTED PARAMS: ", route.params.date)

    
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.text}>{route.params.category}</Text>
            <Text>Max. Occupancy : {route.params.numPeople}</Text>
            <Text>Ontario City : {route.params.location}</Text>
            <Text>Event Day : {route.params.date}</Text>
        </View>
        <ScrollView style={styles.bottom}>
        {
            venues.filter(venue => ((venue.maxOccupancy >= peopleRange) && (venue.maxOccupancy <= (peopleRange + 50)))).
            map(ven => (
                <View style={styles.card}>
                    <View style={{flex:0.45}}>
                        <Image style={styles.img} source={{uri:ven.img}} />
                    </View>
                    <View style={{flex:0.55, justifyContent:"space-evenly",padding:5}}>
                        <Text style={{...styles.text,fontSize:16,fontWeight:"400"}}>{ven.name}</Text>
                        <Text> <Ionicons name="person-outline" size={20} color="black" />{ven.maxOccupancy}</Text>
                    </View>
                </View>
            ))
        }
        </ScrollView>

    </SafeAreaView>
  )
}

export default Suggested

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#Fff",
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    text:{
        fontSize:20,
        fontWeight:"600",
        color:"#3f3c42"
    },
    card:{
        display:"flex",
        flex:1,
        height:160,
        borderWidth:0.2,
        borderColor:"#faf3ec",
        borderRadius:10,
        marginHorizontal:12,
        marginVertical:5,
        flexDirection:"row",
        backgroundColor:"#fbf7f3",
        overflow:"hidden"
    },
    img:{
        width:"100%",
        height:"100%",
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,

    },
    top:{
        flex:0.3,
        paddingHorizontal:15,
        paddingVertical:4
    },
    bottom:{
        flex:0.7,
        borderWidth:0.4,
        // justifyContent: 'center',
        // alignItems: 'center'
    }
})