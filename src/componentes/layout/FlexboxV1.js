import React from "react";
import { View,StyleSheet} from "react-native";
import Quadrado from "./Quadrado";

export default props => {
    const lado = 50
    return (
     <View style={styles.FlexV1}>
         <Quadrado cor='#A020F0'/>
        <Quadrado cor='#FF0000'/>
        <Quadrado cor='#FFFF00'/>
        <Quadrado cor='#1E90FF'/>
        <Quadrado cor='#FF3E96'/>
     </View>
    )
}

const styles = StyleSheet.create({
FlexV1: {
   flexGrow: 1,
   justifyContent: 'center',
    backgroundColor: '#000000'
}
})