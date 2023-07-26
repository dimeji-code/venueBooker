import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity,SafeAreaView} from 'react-native'
import { Feather } from '@expo/vector-icons';
type Props = {
    navigation: any,
    route:any
}

const Venue = ({route, navigation}: Props) => {

    useEffect(() =>
    navigation.setOptions({ 
    headerTitle: route.params.title,
    headerLargeTitle:true,
    headerLargeStyle:{
        backgroundColor:"#c2c2a8c"
    },
    headerTintColor: '#1D0432',
    headerLargeTitleStyle: {
        fontWeight: 'bold',
        fontSize: 32
    },
        headerRight:()=>(
            <TouchableOpacity style={{marginLeft:10}} onPress={()=> {}}>
                <Feather name="more-horizontal" size={24} color="black" />            
            </TouchableOpacity>
        )
    })
)
    console.log("route -> ", route);
    
  return (
    <SafeAreaView style={styles.container}>
        <Image source={{uri:route.params.pic}} style={styles.img} />
        <Text>{route.params.title}</Text>
        <Text>{route.params.guestNum}</Text>
        <Text>{route.params.Category}</Text>
    </SafeAreaView>
  )
}

export default Venue

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    img:{
        width:"100%", 
        height:"45%"
    }
})