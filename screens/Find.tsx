import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet,SafeAreaView, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../components/Button';
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = {
    navigation: any,
    route:any
}

const Find = ({navigation, route}: Props) => { 
    const [currPage, setCurrentPage] = useState(0)
    const [currCat, setCurrentCat] = useState("")
    const [currOcc, setCurrentOcc] = useState("")
    const [currLoc, setCurrentLoc] = useState("")
    const [c, setC] = useState<string | number>()
    const [disabled, setDisabled] = useState(true)
    var selectedDate: Date = new Date()

    var pages = [
        {name:"Category",list:["Party","Re-union","Banquet","Wedding","Prom","Concert","Other"],selected:currCat },
        {name:"Occupancy",list:["10","25","50","100","200","400"],selected:currOcc},
        {name:"Location",list:["Toronto", "Mississauga","Brampton","Niagara","Ottawa","Kitchener", "Guelph", "London"],selected:currLoc }
    ]

    useEffect(()=>{
        if (currPage==0 && pages[0].selected == ""){//Category not selected
            setDisabled(true)
        }
        else if (currPage==1 && pages[1].selected == ""){//occupancy not selected 
            setDisabled(true)
        }
        else if (currPage==2 && pages[2].selected == ""){//occupancy not selected 
            setDisabled(true)
        }


        
    },[currPage])

    const handleSelection = (selected:string) =>{
        if (currPage==0){//Category
            setCurrentCat(selected);
            // pages[0].selected = selected;
            setC(selected)
            setDisabled(false)
        }
        else if (currPage==1){//Occupancy
            setCurrentOcc(selected);
            pages[1].selected = selected;
            setC(selected)
            setDisabled(false)
        }
        else if (currPage==2){//Location
            setCurrentLoc(selected);
            pages[2].selected = selected;
            setC(selected)
            setDisabled(false)

        }
        console.log(pages[0].selected);
        console.log(pages[1].selected);
        console.log(pages[2].selected);
    }
    const nextPage = () =>{
        if(currPage < 3)
            setCurrentPage(currPage+1)
    }
    const prevPage = () =>{
        if(currPage > 0)
            setCurrentPage(currPage-1)
    }
    const nextStack = () =>{
        setCurrentPage(0)
        navigation.navigate("Suggested", {
            category : pages[0].selected,
            numPeople : pages[1].selected,
            location : pages[2].selected,
            date : selectedDate.toString()
        })
        setCurrentCat("")
        setCurrentOcc("")
        setCurrentLoc("")
    }
  return (
    <SafeAreaView style={styles.container}>
        <View style={{flex:0.12,  alignItems: 'center', justifyContent: 'center'}}>

            <View style={{width:'60%', display:"flex", alignItems:"center", flexDirection:"row",justifyContent: "space-evenly"}}>
                <View style={{
                        width:currPage==0?40:25, 
                        height:6, 
                        backgroundColor:currPage==0?"#c096ca":"#c5b6c7"}}>        
                </View>
                <View style={{
                        width:currPage==1?40:25, 
                        height:6, 
                        backgroundColor:currPage==1?"#c096ca":"#c5b6c7"}}>        
                </View>
                <View style={{
                        width:currPage==2?40:25, 
                        height:6, 
                        backgroundColor:currPage==2?"#c096ca":"#c5b6c7"}}>        
                </View>
                <View style={{
                        width:currPage==3?40:25, 
                        height:6, 
                        backgroundColor:currPage==3?"#c096ca":"#c5b6c7"}}>        
                </View>

            </View>
        </View>

        <View 
        style={{
            flex:0.7, 
            borderWidth:0.5,
            backgroundColor:"#f4f4f4", 
            borderColor:"#ccc",margin:10, padding:10, borderRadius:5, overflow:"hidden"
            }}>
            { currPage <3 && <View>
                <View style={{display:"flex", alignItems: "center",paddingVertical:5}}>
                    <Text style={{fontSize:18, fontWeight:'500', color:'#3e3f3f'}}>Select Venue {pages[currPage].name}</Text>
                </View>
                <ScrollView>
                {
                pages[currPage].list.map(current => 
                <TouchableOpacity onPress={()=>{handleSelection(current)}} key={current} style={styles.item}>
                    <Text>{current}</Text>
                    {current == c && <MaterialIcons name="check" size={24} color="#c096ca" />}
                </TouchableOpacity>) 
                }
                </ScrollView>

            </View>
            }

            { currPage == 3 && <View>
                <View style={{display:"flex", alignItems: "center",paddingVertical:5}}>
                    <Text style={{fontSize:18, fontWeight:'500', color:'#3e3f3f'}}>Select Date</Text>
                </View>
                <DateTimePicker
                value={selectedDate}
                mode='date'
                />

            </View>
            }

        </View>

        <View style={{flex:0.18, justifyContent: 'center'}}>
            <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
                {currPage>0 && <Button disabled={false} action={()=> {prevPage()}} title="back" iconName="settings-backup-restore" color="#c096ca" />}
                <Button disabled={disabled} action={()=> {currPage==3?nextStack():nextPage()}} title="next" iconName="next-plan" color="#c096ca" />
            </View>
        </View>


    </SafeAreaView>
  )
}

export default Find

const styles = StyleSheet.create({
    container:{
        flex:1, 
    },
    item:{
        height:50, 
        borderWidth:0.3, 
        borderColor: "#505050b7",
        backgroundColor:"#fcfcfc", 
        paddingHorizontal:10,
        marginVertical:5,
        marginHorizontal:5,
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowOpacity:0.1,
        shadowOffset:{width:1, height:1},
    },

})