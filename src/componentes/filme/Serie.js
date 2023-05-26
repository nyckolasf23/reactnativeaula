import React, {Component} from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Estilo from "../Estilo";



const styles = StyleSheet.create({
    tinyLogo: {
        width: 100,
        height: 125,
        alignItems:"center"
      }
})
export default class Serie extends Component {
    render() {
      return (
        <View style={styles.FlexV4}>
            <Text style={Estilo.txtGrande}>Melhores Series</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../imagens/flash.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/impuros.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/poster.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/lacasa.jpg')}
          />
        </View>
      );
    }
  }