import React from "react";
import { View,StyleSheet} from "react-native";
import Quadrado from "./Quadrado";

export default props => {

    return (
     <View style={styles.FlexV4}>
           <View style={styles.V0}/>
        <View style={styles.V1}/>
        <View style={styles.V2}/>
     </View>
    )
}

const styles = StyleSheet.create({
FlexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: '#000'
},
V0: {
    backgroundColor: '#FF0000',
    flexGrow: 1

},
V1: {
    backgroundColor: '#0000FF',
    flexGrow: 1

},
V2: {
    backgroundColor: '#000000',
    flexGrow: 1

}
})