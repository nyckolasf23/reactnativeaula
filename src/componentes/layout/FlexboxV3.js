import React from "react";
import { View,StyleSheet} from "react-native";
import Quadrado from "./Quadrado";

export default props => {
    const lado = 90
    return (
     <View style={styles.FlexV3}>
         <Quadrado cor='#0000FF'/>
        <Quadrado cor='#FFFFFF'/>
        <Quadrado cor='#0000FF'/>
        <Quadrado cor='#FFFFFF'/>
        <Quadrado cor='#0000FF'/>
     </View>
    )
}

const styles = StyleSheet.create({
FlexV3: {
    flexDirection: "row",
    height: 350,
    width: '100%',
    alignItems: 'center',
   justifyContent: 'center',
    backgroundColor: '#000000'
}
})