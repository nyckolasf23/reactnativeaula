import React from "react";
import { View } from "react-native";


export default props => {
    return (
        <View style ={{
            height:90,
            width:80,
            backgroundColor: props.cor || '#000'
        }}/>
    )

}