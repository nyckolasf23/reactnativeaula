import React from "react";
import { View,StyleSheet} from "react-native";
import Quadrado from "./Quadrado";

export default props => {
    const lado = 90
    return (
     <View style={styles.FlexV2}>
         <Quadrado cor='#0000FF'/>
        <Quadrado cor='#FFFF00'/>
        <Quadrado cor='#0000FF'/>
        <Quadrado cor='#FFFF00'/>
        <Quadrado cor='#0000FF'/>
     </View>
    )
}

const styles = StyleSheet.create({
FlexV2: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-end',
   justifyContent: 'space-around',
    backgroundColor: '#000000'
}
})