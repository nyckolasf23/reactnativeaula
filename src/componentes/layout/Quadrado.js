import React from "react";
import { View } from "react-native";

export default props => {
    const lado = 50
    return (
        <View style ={{
            height:90,
            width:80,
            backgroundColor: props.cor || '#000'
        }}/>
    )
}