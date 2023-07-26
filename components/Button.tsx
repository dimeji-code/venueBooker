import React from 'react'
import { TouchableOpacity,Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
    action : ()=>void,
    title: string,
    iconName: string | any,
    color: string,
    disabled: boolean
}

const Button = ({action, title, color, iconName, disabled}: Props) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={()=>{action()}} style={{
        display:"flex", 
        flexDirection:"row", 
        justifyContent: 'center',
        borderWidth:0.3,
        borderColor:'#ccc',
        borderRadius:6,
        padding:8,
        backgroundColor:'#f3f2f2',shadowOpacity:0.1,shadowRadius:2,shadowOffset:{width:1,height:1}
        }}>
        <Text style={{fontSize:18,marginRight:3}}>{title}</Text>
        <MaterialIcons  size={24} color={disabled?'#ccc':color} name={iconName} />
    </TouchableOpacity>
  )
}

export default Button