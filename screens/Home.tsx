import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Image, ScrollView,SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {venues} from "../data/data"
import { TouchableOpacity } from 'react-native-gesture-handler'
import Flag from 'react-native-flags'

type Props = {
    route:any,
    navigation:any
}

const Home = ({ route, navigation }: Props) => {
    console.log("Route -> " ,route)
    console.log("Navigation -> " ,navigation)
    const events:string[] = ["weddings","banquets","prom","re-unions","concerts","parties"]

    useEffect(() =>
    navigation.setOptions({ 
    headerTitle:"Venue Finder",
    headerLargeTitle:true,
    headerLargeStyle:{
        backgroundColor:"#c2c2a8c",
    },
    headerLargeTitleStyle:{
        fontSize:26,
        color:"#3a3e40",
    },
    headerTintColor: '#1D0432',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
        headerLeft:()=>(
            <TouchableOpacity style={{marginLeft:10}} onPress={()=> {}}>
            <Ionicons name="menu-outline" size={24} color="black"  />
            </TouchableOpacity>
        ),
        headerRight:()=>(
            <View>
            <Text>ON</Text>
            <View style={{
                borderWidth:0.4, 
                borderRadius:30, 
                borderColor:"#ccc",
                overflow:"hidden", 
                width:25,
                height:25,
                flex:1, 
                justifyContent: "center", 
                alignItems: "center"}}>
                   {/* <Text>🇨🇦</Text>  */}
                <Flag
                    code="CA"
                    size={32}
                />
            </View>
            </View>
        )
    })
)

    return (
        
    <SafeAreaView style={styles.container}> 
        <View style={styles.top}>
            <Text style={styles.title}>Experience the occasion</Text>
        </View>

        <View style={styles.mid}>

            <Text style={{...styles.title,fontSize:22}}>Popular venues</Text>

            <View  
            style={{display:"flex",justifyContent:'center', alignItems: "center",marginVertical:5, paddingVertical:2}}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{paddingVertical:4}} >
                    {
                    events.map(event => 
                    <View  key={event} style={styles.tag}>
                        <Text>{event}</Text>
                    </View>) 
                    }
                </ScrollView>
            </View>




            <ScrollView 
            showsHorizontalScrollIndicator={false} 
            horizontal 
            >
            {
            venues.map(venue =>
            <TouchableOpacity 
            onPress={()=>{navigation.navigate('Venue',{
                title:venue.name, 
                pic:venue.img,
                guestNum: venue.maxOccupancy,
                category: venue.category
            })}} 
            key={venue.name} 
            style={styles.midbox}
            >
                <Image style={styles.img} source={{uri: venue.img}} />
                <Text style={{...styles.title,fontSize:16, marginTop:5, marginLeft:5}}>{venue.name}</Text>
                <Text style={{...styles.title,fontSize:16, marginTop:5, marginLeft:5}}>
                <Ionicons name="person-outline" size={20} color="black" /><Text style={styles.lite}> {venue.maxOccupancy} </Text> </Text>
            </TouchableOpacity>
            
            )}
            </ScrollView>

        </View>

    </SafeAreaView>
  )
}

export default Home


const styles = StyleSheet.create({

    container:{
        flex: 1,
        display:'flex',
        backgroundColor: '#fff',  
    },

    tag:{
        borderWidth: 0.8,
        borderRadius: 18,
        paddingHorizontal: 8,
        paddingVertical: 1,
        marginHorizontal:6,
        backgroundColor: '#fffffffc',
        borderColor:"#c7c7c7a7",
        maxHeight:45,
        minHeight:32,
        flex:1,
        display:'flex',
        justifyContent:"center",
        alignItems: 'center',
        shadowColor:"#ccc",
        shadowOpacity:0.2,
        shadowOffset:{width:1,height:2},

    },
    top:{
        flex: 0.2,
        backgroundColor: '#fff',
        borderWidth:0.4,
        borderColor: '#ffdacc',
        padding: 15,
    },
    title:{
        fontSize:36,
        color:'#3a3e40',
        fontWeight: 'bold',
        // fontFamily:"Courier"
    },
    lite:{
        fontWeight: '500',
    },
    mid:{
        flex: 0.8,
        backgroundColor: '#fff', 
        // borderWidth:1.4,
        // borderColor: '#1da218',
        padding: 15,

    },
    midbox:{
        width: 250,
        borderColor: '#f3fcf3',
        borderWidth:0.5,
        marginHorizontal:4,
        backgroundColor:"#fdf9f6ca",
        borderRadius:10,
        overflow:"hidden",
        shadowOpacity:0.1,
        shadowOffset:{width:1, height:1},

    },
    img:{
        width: '100%',
        height: '70%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },




})